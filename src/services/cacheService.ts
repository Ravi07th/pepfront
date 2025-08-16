interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items in cache
  persist?: boolean; // Whether to persist to localStorage
  namespace?: string; // Namespace for localStorage
}

class CacheService {
  private cache = new Map<string, CacheItem<any>>();
  private readonly defaultTTL = 5 * 60 * 1000; // 5 minutes
  private readonly defaultMaxSize = 100;
  private readonly namespace: string;
  private readonly persist: boolean;

  constructor(options: CacheOptions = {}) {
    this.namespace = options.namespace || 'prepcampus_cache';
    this.persist = options.persist || false;
    
    if (this.persist) {
      this.loadFromStorage();
    }

    // Clean up expired items periodically
    setInterval(() => {
      this.cleanup();
    }, 60000); // Clean up every minute
  }

  public set<T>(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL,
      accessCount: 0,
      lastAccessed: Date.now()
    };

    // Remove oldest items if cache is full
    if (this.cache.size >= this.defaultMaxSize) {
      this.evictOldest();
    }

    this.cache.set(key, item);

    if (this.persist) {
      this.saveToStorage();
    }
  }

  public get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (this.isExpired(item)) {
      this.cache.delete(key);
      if (this.persist) {
        this.saveToStorage();
      }
      return null;
    }

    // Update access statistics
    item.accessCount++;
    item.lastAccessed = Date.now();

    return item.value;
  }

  public has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    if (this.isExpired(item)) {
      this.cache.delete(key);
      if (this.persist) {
        this.saveToStorage();
      }
      return false;
    }
    
    return true;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted && this.persist) {
      this.saveToStorage();
    }
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    if (this.persist) {
      this.saveToStorage();
    }
  }

  public size(): number {
    return this.cache.size;
  }

  public keys(): string[] {
    return Array.from(this.cache.keys());
  }

  public getStats(): {
    size: number;
    hitRate: number;
    averageAccessCount: number;
    oldestItem: string | null;
    newestItem: string | null;
  } {
    const keys = this.keys();
    if (keys.length === 0) {
      return {
        size: 0,
        hitRate: 0,
        averageAccessCount: 0,
        oldestItem: null,
        newestItem: null
      };
    }

    const items = keys.map(key => this.cache.get(key)!);
    const totalAccessCount = items.reduce((sum, item) => sum + item.accessCount, 0);
    const averageAccessCount = totalAccessCount / items.length;

    const sortedByTimestamp = items.sort((a, b) => a.timestamp - b.timestamp);
    const oldestItem = keys.find(key => this.cache.get(key) === sortedByTimestamp[0]) || null;
    const newestItem = keys.find(key => this.cache.get(key) === sortedByTimestamp[sortedByTimestamp.length - 1]) || null;

    return {
      size: this.cache.size,
      hitRate: 0, // Would need to track misses to calculate hit rate
      averageAccessCount,
      oldestItem,
      newestItem
    };
  }

  // Cache with automatic refresh
  public async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const cached = this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    try {
      const value = await fetcher();
      this.set(key, value, ttl);
      return value;
    } catch (error) {
      console.error(`Failed to fetch data for key "${key}":`, error);
      throw error;
    }
  }

  // Cache with stale-while-revalidate pattern
  public async getWithStaleRevalidate<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const cached = this.get<T>(key);
    
    if (cached !== null) {
      // Return cached value immediately, then refresh in background
      this.refreshInBackground(key, fetcher, ttl);
      return cached;
    }

    // No cached value, fetch immediately
    const value = await fetcher();
    this.set(key, value, ttl);
    return value;
  }

  private async refreshInBackground<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<void> {
    try {
      const value = await fetcher();
      this.set(key, value, ttl);
    } catch (error) {
      console.error(`Background refresh failed for key "${key}":`, error);
    }
  }

  private isExpired(item: CacheItem<any>): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  private cleanup(): void {
    const keysToDelete: string[] = [];
    
    for (const [key, item] of this.cache.entries()) {
      if (this.isExpired(item)) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key));

    if (keysToDelete.length > 0 && this.persist) {
      this.saveToStorage();
    }
  }

  private evictOldest(): void {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldestTime) {
        oldestTime = item.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  private saveToStorage(): void {
    try {
      const data = Array.from(this.cache.entries());
      localStorage.setItem(this.namespace, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save cache to localStorage:', error);
    }
  }

  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem(this.namespace);
      if (data) {
        const entries = JSON.parse(data);
        this.cache = new Map(entries);
        
        // Clean up expired items on load
        this.cleanup();
      }
    } catch (error) {
      console.error('Failed to load cache from localStorage:', error);
    }
  }
}

// Create default cache instance
export const cacheService = new CacheService({
  ttl: 5 * 60 * 1000, // 5 minutes
  maxSize: 100,
  persist: true,
  namespace: 'prepcampus_cache'
});

// Create specialized cache instances
export const userCache = new CacheService({
  ttl: 10 * 60 * 1000, // 10 minutes
  maxSize: 50,
  persist: true,
  namespace: 'prepcampus_user_cache'
});

export const searchCache = new CacheService({
  ttl: 2 * 60 * 1000, // 2 minutes
  maxSize: 200,
  persist: false,
  namespace: 'prepcampus_search_cache'
});

export const questionCache = new CacheService({
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 500,
  persist: true,
  namespace: 'prepcampus_question_cache'
});
