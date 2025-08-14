import React from 'react';
import DummyLogo from './DummyLogo';
import { getCompanyColors } from '../../utils/companyColors';

interface CompanyLogoProps {
  companyName: string;
  size?: number;
  className?: string;
  alt?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  companyName,
  size = 80,
  className = '',
  alt = ''
}) => {
  const colors = getCompanyColors(companyName);
  
  return (
    <DummyLogo
      companyName={companyName}
      size={size}
      className={className}
      backgroundColor={colors.backgroundColor}
      textColor={colors.textColor}
    />
  );
};

export default CompanyLogo;
