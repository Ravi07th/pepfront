import { useState, useEffect } from 'react';

export type LayoutVariant = 'default' | 'full' | 'content-only' | 'minimal';

interface UseLayoutReturn {
  variant: LayoutVariant;
  setVariant: (variant: LayoutVariant) => void;
  showHeader: boolean;
  showFooter: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useLayout = (initialVariant: LayoutVariant = 'default'): UseLayoutReturn => {
  const [variant, setVariant] = useState<LayoutVariant>(initialVariant);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine header and footer visibility based on variant
  const getLayoutConfig = () => {
    switch (variant) {
      case 'full':
        return { showHeader: true, showFooter: true };
      case 'content-only':
        return { showHeader: false, showFooter: false };
      case 'minimal':
        return { showHeader: true, showFooter: false };
      default:
        return { showHeader: true, showFooter: true };
    }
  };

  const { showHeader, showFooter } = getLayoutConfig();

  return {
    variant,
    setVariant,
    showHeader,
    showFooter,
    isMobile,
    isTablet,
    isDesktop,
  };
}; 