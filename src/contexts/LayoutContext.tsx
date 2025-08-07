import React, { createContext, useContext, ReactNode } from 'react';
import { useLayout, LayoutVariant } from '../hooks/useLayout';

interface LayoutContextType {
  variant: LayoutVariant;
  setVariant: (variant: LayoutVariant) => void;
  showHeader: boolean;
  showFooter: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
  initialVariant?: LayoutVariant;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ 
  children, 
  initialVariant = 'default' 
}) => {
  const layoutState = useLayout(initialVariant);

  return (
    <LayoutContext.Provider value={layoutState}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
}; 