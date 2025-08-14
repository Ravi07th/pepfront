import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user engagement
export const trackEngagement = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', 'engagement', formName, 1);
  trackEngagement('form_submit', {
    form_name: formName,
    form_type: formType,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', 'engagement', buttonName, 1);
  trackEngagement('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track test completions
export const trackTestCompletion = (testName: string, score: number, timeSpent: number) => {
  trackEvent('test_complete', 'engagement', testName, score);
  trackEngagement('test_complete', {
    test_name: testName,
    score: score,
    time_spent: timeSpent,
  });
};

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', 'engagement', searchTerm, resultsCount);
  trackEngagement('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Track video interactions
export const trackVideoInteraction = (videoName: string, action: 'play' | 'pause' | 'complete') => {
  trackEvent('video_interaction', 'engagement', videoName, 1);
  trackEngagement('video_interaction', {
    video_name: videoName,
    action: action,
  });
};

// Track download events
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'engagement', fileName, 1);
  trackEngagement('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string, action: string) => {
  trackEvent('social_click', 'engagement', platform, 1);
  trackEngagement('social_click', {
    platform: platform,
    action: action,
  });
};

// Track user registration
export const trackRegistration = (method: string) => {
  trackEvent('sign_up', 'engagement', method, 1);
  trackEngagement('sign_up', {
    method: method,
  });
};

// Track user login
export const trackLogin = (method: string) => {
  trackEvent('login', 'engagement', method, 1);
  trackEngagement('login', {
    method: method,
  });
};

// Track error events
export const trackError = (errorMessage: string, errorType: string) => {
  trackEvent('error', 'error', errorType, 1);
  trackEngagement('error', {
    error_message: errorMessage,
    error_type: errorType,
  });
};

// React component for automatic page view tracking
export const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on component mount
    initializeGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return null;
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          trackEngagement('web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(entry.startTime),
          });
        }
        if (entry.entryType === 'first-input') {
          trackEngagement('web_vitals', {
            metric_name: 'FID',
            metric_value: Math.round(entry.processingStart - entry.startTime),
          });
        }
        if (entry.entryType === 'layout-shift') {
          trackEngagement('web_vitals', {
            metric_name: 'CLS',
            metric_value: Math.round((entry as any).value * 1000) / 1000,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};

// E-commerce tracking
export const trackPurchase = (transactionId: string, value: number, currency: string = 'INR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

// Enhanced e-commerce tracking
export const trackAddToCart = (itemId: string, itemName: string, price: number, quantity: number = 1) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      items: [{
        item_id: itemId,
        item_name: itemName,
        price: price,
        quantity: quantity,
      }],
    });
  }
};

// User properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      custom_map: properties,
    });
  }
};

// User ID tracking
export const setUserId = (userId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      user_id: userId,
    });
  }
};

// Debug mode
export const enableDebugMode = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      debug_mode: true,
    });
  }
};

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default GoogleAnalytics;
