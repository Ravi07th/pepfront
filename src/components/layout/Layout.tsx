import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useLayoutContext } from '../../contexts/LayoutContext';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  overrideContext?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader: propShowHeader = true,
  showFooter: propShowFooter = true,
  className = "",
  overrideContext = false
}) => {
  let showHeader = propShowHeader;
  let showFooter = propShowFooter;
  
  try {
    const layoutContext = useLayoutContext();
    // Use props if overrideContext is true, otherwise use context
    if (!overrideContext) {
      showHeader = layoutContext.showHeader;
      showFooter = layoutContext.showFooter;
    }
  } catch (error) {
    // If context is not available, use prop values (defaults)
    console.warn('LayoutContext not available, using prop values');
  }

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showHeader && <Header />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout; 