#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Doubly linked list node
typedef struct Node {
    int key;
    int value;
    struct Node* prev;
    struct Node* next;
} Node;

// Hash table entry
typedef struct HashEntry {
    int key;
    Node* node;
    struct HashEntry* next;
} HashEntry;

// LRU Cache structure
typedef struct {
    int capacity;
    int size;
    Node* head;  // Most recently used
    Node* tail;  // Least recently used
    HashEntry** hashTable;
} LRUCache;

#define HASH_SIZE 10007

// Hash function
int hash(int key) {
    return key % HASH_SIZE;
}

// Create a new node
Node* createNode(int key, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = key;
    newNode->value = value;
    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

// Remove node from list
void removeNode(Node* node) {
    if (node->prev) node->prev->next = node->next;
    if (node->next) node->next->prev = node->prev;
}

// Add node to front (most recently used)
void addToFront(LRUCache* cache, Node* node) {
    node->next = cache->head;
    node->prev = NULL;
    if (cache->head) cache->head->prev = node;
    cache->head = node;
    if (!cache->tail) cache->tail = node;
}

// Move node to front
void moveToFront(LRUCache* cache, Node* node) {
    if (node == cache->head) return;
    removeNode(node);
    addToFront(cache, node);
}

// Remove least recently used (tail)
void removeLRU(LRUCache* cache) {
    if (!cache->tail) return;
    
    Node* lru = cache->tail;
    cache->tail = cache->tail->prev;
    if (cache->tail) cache->tail->next = NULL;
    else cache->head = NULL;
    
    // Remove from hash table
    int hashKey = hash(lru->key);
    HashEntry* entry = cache->hashTable[hashKey];
    HashEntry* prev = NULL;
    
    while (entry) {
        if (entry->key == lru->key) {
            if (prev) prev->next = entry->next;
            else cache->hashTable[hashKey] = entry->next;
            free(entry);
            break;
        }
        prev = entry;
        entry = entry->next;
    }
    
    free(lru);
    cache->size--;
}

// Get value from hash table
Node* getFromHash(LRUCache* cache, int key) {
    int hashKey = hash(key);
    HashEntry* entry = cache->hashTable[hashKey];
    
    while (entry) {
        if (entry->key == key) {
            return entry->node;
        }
        entry = entry->next;
    }
    return NULL;
}

// Add to hash table
void addToHash(LRUCache* cache, int key, Node* node) {
    int hashKey = hash(key);
    HashEntry* entry = (HashEntry*)malloc(sizeof(HashEntry));
    entry->key = key;
    entry->node = node;
    entry->next = cache->hashTable[hashKey];
    cache->hashTable[hashKey] = entry;
}

// Best solution: Hash Table + Doubly Linked List
LRUCache* lRUCacheCreate_best(int capacity) {
    LRUCache* cache = (LRUCache*)malloc(sizeof(LRUCache));
    cache->capacity = capacity;
    cache->size = 0;
    cache->head = NULL;
    cache->tail = NULL;
    cache->hashTable = (HashEntry**)calloc(HASH_SIZE, sizeof(HashEntry*));
    return cache;
}

int lRUCacheGet_best(LRUCache* obj, int key) {
    Node* node = getFromHash(obj, key);
    if (!node) return -1;
    
    moveToFront(obj, node);
    return node->value;
}

void lRUCachePut_best(LRUCache* obj, int key, int value) {
    Node* node = getFromHash(obj, key);
    
    if (node) {
        // Update existing key
        node->value = value;
        moveToFront(obj, node);
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            removeLRU(obj);
        }
        
        node = createNode(key, value);
        addToFront(obj, node);
        addToHash(obj, key, node);
        obj->size++;
    }
}

// Average solution: Hash Table with Timestamps
typedef struct {
    int key;
    int value;
    int timestamp;
} HashEntry_Avg;

typedef struct {
    int capacity;
    int size;
    int currentTime;
    HashEntry_Avg* entries;
    int* used;
} LRUCache_Avg;

LRUCache_Avg* lRUCacheCreate_average(int capacity) {
    LRUCache_Avg* cache = (LRUCache_Avg*)malloc(sizeof(LRUCache_Avg));
    cache->capacity = capacity;
    cache->size = 0;
    cache->currentTime = 0;
    cache->entries = (HashEntry_Avg*)calloc(capacity, sizeof(HashEntry_Avg));
    cache->used = (int*)calloc(capacity, sizeof(int));
    return cache;
}

int findKey_average(LRUCache_Avg* obj, int key) {
    for (int i = 0; i < obj->capacity; i++) {
        if (obj->used[i] && obj->entries[i].key == key) {
            return i;
        }
    }
    return -1;
}

int findLRU_average(LRUCache_Avg* obj) {
    int lruIndex = 0;
    int minTime = obj->entries[0].timestamp;
    
    for (int i = 1; i < obj->capacity; i++) {
        if (obj->used[i] && obj->entries[i].timestamp < minTime) {
            minTime = obj->entries[i].timestamp;
            lruIndex = i;
        }
    }
    return lruIndex;
}

int lRUCacheGet_average(LRUCache_Avg* obj, int key) {
    int index = findKey_average(obj, key);
    if (index == -1) return -1;
    
    // Update timestamp
    obj->entries[index].timestamp = ++obj->currentTime;
    return obj->entries[index].value;
}

void lRUCachePut_average(LRUCache_Avg* obj, int key, int value) {
    int index = findKey_average(obj, key);
    
    if (index != -1) {
        // Update existing key
        obj->entries[index].value = value;
        obj->entries[index].timestamp = ++obj->currentTime;
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            // Find and remove LRU entry
            int lruIndex = findLRU_average(obj);
            obj->used[lruIndex] = 0;
            obj->size--;
        }
        
        // Find empty slot
        for (int i = 0; i < obj->capacity; i++) {
            if (!obj->used[i]) {
                obj->entries[i].key = key;
                obj->entries[i].value = value;
                obj->entries[i].timestamp = ++obj->currentTime;
                obj->used[i] = 1;
                obj->size++;
                break;
            }
        }
    }
}

// Worst solution: Simple Array
typedef struct {
    int key;
    int value;
    int timestamp;
} KVPair;

typedef struct {
    int capacity;
    int size;
    int currentTime;
    KVPair* pairs;
} LRUCache_Worst;

LRUCache_Worst* lRUCacheCreate_worst(int capacity) {
    LRUCache_Worst* cache = (LRUCache_Worst*)malloc(sizeof(LRUCache_Worst));
    cache->capacity = capacity;
    cache->size = 0;
    cache->currentTime = 0;
    cache->pairs = (KVPair*)calloc(capacity, sizeof(KVPair));
    return cache;
}

int findKey_worst(LRUCache_Worst* obj, int key) {
    for (int i = 0; i < obj->size; i++) {
        if (obj->pairs[i].key == key) {
            return i;
        }
    }
    return -1;
}

int findLRU_worst(LRUCache_Worst* obj) {
    int lruIndex = 0;
    int minTime = obj->pairs[0].timestamp;
    
    for (int i = 1; i < obj->size; i++) {
        if (obj->pairs[i].timestamp < minTime) {
            minTime = obj->pairs[i].timestamp;
            lruIndex = i;
        }
    }
    return lruIndex;
}

void removeAt_worst(LRUCache_Worst* obj, int index) {
    for (int i = index; i < obj->size - 1; i++) {
        obj->pairs[i] = obj->pairs[i + 1];
    }
    obj->size--;
}

int lRUCacheGet_worst(LRUCache_Worst* obj, int key) {
    int index = findKey_worst(obj, key);
    if (index == -1) return -1;
    
    // Update timestamp
    obj->pairs[index].timestamp = ++obj->currentTime;
    return obj->pairs[index].value;
}

void lRUCachePut_worst(LRUCache_Worst* obj, int key, int value) {
    int index = findKey_worst(obj, key);
    
    if (index != -1) {
        // Update existing key
        obj->pairs[index].value = value;
        obj->pairs[index].timestamp = ++obj->currentTime;
    } else {
        // Add new key
        if (obj->size >= obj->capacity) {
            // Find and remove LRU entry
            int lruIndex = findLRU_worst(obj);
            removeAt_worst(obj, lruIndex);
        }
        
        // Add new entry
        obj->pairs[obj->size].key = key;
        obj->pairs[obj->size].value = value;
        obj->pairs[obj->size].timestamp = ++obj->currentTime;
        obj->size++;
    }
}

// Test function
void test_solution(const char* test_name, void* (*create)(int), int (*get)(void*, int), void (*put)(void*, int, int), int capacity) {
    void* cache = create(capacity);
    
    printf("%s:\\n", test_name);
    
    // Test case 1: Basic operations
    put(cache, 1, 1);
    put(cache, 2, 2);
    printf("  Get(1) = %d (expected: 1)\\n", get(cache, 1));
    
    put(cache, 3, 3);
    printf("  Get(2) = %d (expected: -1, evicted)\\n", get(cache, 2));
    
    put(cache, 4, 4);
    printf("  Get(1) = %d (expected: -1, evicted)\\n", get(cache, 1));
    printf("  Get(3) = %d (expected: 3)\\n", get(cache, 3));
    printf("  Get(4) = %d (expected: 4)\\n", get(cache, 4));
    
    printf("\\n");
}

int main() {
    printf("=== Testing LRU Cache Solutions ===\\n\\n");
    
    int capacity = 2;
    
    test_solution("Best (Hash Table + Doubly Linked List)", 
                  (void* (*)(int))lRUCacheCreate_best, 
                  (int (*)(void*, int))lRUCacheGet_best, 
                  (void (*)(void*, int, int))lRUCachePut_best, 
                  capacity);
    
    test_solution("Average (Hash Table with Timestamps)", 
                  (void* (*)(int))lRUCacheCreate_average, 
                  (int (*)(void*, int))lRUCacheGet_average, 
                  (void (*)(void*, int, int))lRUCachePut_average, 
                  capacity);
    
    test_solution("Worst (Simple Array)", 
                  (void* (*)(int))lRUCacheCreate_worst, 
                  (int (*)(void*, int))lRUCacheGet_worst, 
                  (void (*)(void*, int, int))lRUCachePut_worst, 
                  capacity);
    
    printf("=== Test Summary ===\\n");
    printf("All three solutions should produce the same results for LRU cache operations.\\n");
    printf("- Best: Hash Table + Doubly Linked List - O(1) time, O(capacity) space\\n");
    printf("- Average: Hash Table with Timestamps - O(n) time, O(capacity) space\\n");
    printf("- Worst: Simple Array - O(n) time, O(capacity) space\\n");
    
    return 0;
}
