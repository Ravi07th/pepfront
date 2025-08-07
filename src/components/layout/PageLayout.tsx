import React from 'react';
import Layout from './Layout';

interface PageLayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'full' | 'content-only' | 'minimal';
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  variant = 'default',
  className = "" 
}) => {
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

  return (
    <Layout 
      showHeader={showHeader} 
      showFooter={showFooter}
      className={className}
      overrideContext={true}
    >
      {children}
    </Layout>
  );
};

export default PageLayout; 