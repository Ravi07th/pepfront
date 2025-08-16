interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
  timeToInteractive?: number;
}

interface UserInteraction {
  type: 'click' | 'scroll' | 'navigation' | 'search' | 'test_start' | 'test_complete';
  element?: string;
  timestamp: number;
  duration?: number;
  metadata?: Record<string, any>;
}

class PerformanceService {
  private metrics: PerformanceMetrics = {} as PerformanceMetrics;
  private interactions: UserInteraction[] = [];
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.isInitialized = true;
    this.captureInitialMetrics();
    this.setupPerformanceObservers();
    this.setupUserInteractionTracking();
  }

  private captureInitialMetrics() {
    if (typeof performance === 'undefined') return;

    // Basic timing metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    }

    // Paint timing
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        this.metrics.firstContentfulPaint = entry.startTime;
      }
    });
  }

  private setupPerformanceObservers() {
    if (typeof PerformanceObserver === 'undefined') return;

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const firstInputEntry = entry as PerformanceEventTiming;
          this.metrics.firstInputDelay = firstInputEntry.processingStart - firstInputEntry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach(entry => {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }
  }

  private setupUserInteractionTracking() {
    if (typeof window === 'undefined') return;

    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackInteraction('click', {
        element: target.tagName.toLowerCase(),
        class: target.className,
        id: target.id,
        text: target.textContent?.slice(0, 50)
      });
    });

    // Track scroll events (throttled)
    let scrollTimeout: NodeJS.Timeout;
    document.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackInteraction('scroll', {
          scrollY: window.scrollY,
          scrollX: window.scrollX
        });
      }, 100);
    });

    // Track navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      this.trackInteraction('navigation', {
        type: 'pushState',
        url: args[2]
      });
    }.bind(this);

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      this.trackInteraction('navigation', {
        type: 'replaceState',
        url: args[2]
      });
    }.bind(this);
  }

  public trackInteraction(type: UserInteraction['type'], metadata?: Record<string, any>) {
    const interaction: UserInteraction = {
      type,
      timestamp: Date.now(),
      metadata
    };

    this.interactions.push(interaction);

    // Keep only last 100 interactions to prevent memory leaks
    if (this.interactions.length > 100) {
      this.interactions = this.interactions.slice(-100);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(interaction);
    }
  }

  public trackPageLoad(url: string) {
    const loadTime = performance.now();
    this.trackInteraction('navigation', {
      type: 'page_load',
      url,
      loadTime
    });
  }

  public trackTestStart(testType: string, testId?: string) {
    this.trackInteraction('test_start', {
      testType,
      testId,
      timestamp: Date.now()
    });
  }

  public trackTestComplete(testType: string, testId?: string, score?: number, duration?: number) {
    this.trackInteraction('test_complete', {
      testType,
      testId,
      score,
      duration,
      timestamp: Date.now()
    });
  }

  public trackSearch(query: string, resultsCount: number) {
    this.trackInteraction('search', {
      query,
      resultsCount,
      timestamp: Date.now()
    });
  }

  private sendToAnalytics(data: any) {
    // In production, send to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    try {
      // Example with Google Analytics 4
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'performance_metric', {
          event_category: 'performance',
          event_label: data.type,
          value: data.metadata?.loadTime || data.timestamp,
          custom_parameters: data.metadata
        });
      }

      // Example with custom analytics endpoint
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
    } catch (error) {
      console.warn('Failed to send analytics:', error);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getInteractions(): UserInteraction[] {
    return [...this.interactions];
  }

  public generateReport(): any {
    return {
      metrics: this.getMetrics(),
      interactions: this.getInteractions(),
      summary: {
        totalInteractions: this.interactions.length,
        averagePageLoadTime: this.calculateAveragePageLoadTime(),
        mostActiveHours: this.calculateMostActiveHours(),
        popularPages: this.calculatePopularPages()
      }
    };
  }

  private calculateAveragePageLoadTime(): number {
    const pageLoads = this.interactions.filter(i => i.type === 'navigation' && i.metadata?.type === 'page_load');
    if (pageLoads.length === 0) return 0;
    
    const totalTime = pageLoads.reduce((sum, interaction) => sum + (interaction.metadata?.loadTime || 0), 0);
    return totalTime / pageLoads.length;
  }

  private calculateMostActiveHours(): Record<string, number> {
    const hours: Record<string, number> = {};
    this.interactions.forEach(interaction => {
      const hour = new Date(interaction.timestamp).getHours();
      hours[hour] = (hours[hour] || 0) + 1;
    });
    return hours;
  }

  private calculatePopularPages(): Record<string, number> {
    const pages: Record<string, number> = {};
    this.interactions.forEach(interaction => {
      if (interaction.type === 'navigation' && interaction.metadata?.url) {
        const url = interaction.metadata.url;
        pages[url] = (pages[url] || 0) + 1;
      }
    });
    return pages;
  }
}

export const performanceService = new PerformanceService();
