import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance
export const LazyComponent = ({ component: Component, fallback = <div>Loading...</div> }: {
  component: React.ComponentType<any>;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback}>
    <Component />
  </Suspense>
);

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      {...(priority && { fetchPriority: 'high' })}
      onError={(e) => {
        // Fallback to a placeholder image if loading fails
        const target = e.target as HTMLImageElement;
        target.src = '/images/placeholder.png';
      }}
    />
  );
};

// Link optimization component
interface OptimizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  external?: boolean;
}

export const OptimizedLink: React.FC<OptimizedLinkProps> = ({
  href,
  children,
  className = '',
  prefetch = true,
  external = false
}) => {
  const handleClick = () => {
    // Track outbound links for analytics
    if (external) {
      // Add analytics tracking here
      console.log('External link clicked:', href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...(prefetch && { 'data-prefetch': 'true' })}
    >
      {children}
    </a>
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  React.useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);
};

// Preload critical resources
export const PreloadResources = () => {
  React.useEffect(() => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/src/index.css',
      '/src/main.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

// SEO-friendly loading states
export const SEOLoadingState = ({ children, loading, fallback }: {
  children: React.ReactNode;
  loading: boolean;
  fallback?: React.ReactNode;
}) => {
  if (loading) {
    return (
      <div className="animate-pulse">
        {fallback || (
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
};
