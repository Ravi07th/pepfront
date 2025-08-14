export interface CompanyColors {
  backgroundColor: string;
  textColor: string;
}

export const companyColors: Record<string, CompanyColors> = {
  'TCS': { backgroundColor: '#2563EB', textColor: '#FFFFFF' }, // Blue
  'Infosys': { backgroundColor: '#7C3AED', textColor: '#FFFFFF' }, // Purple
  'Wipro': { backgroundColor: '#059669', textColor: '#FFFFFF' }, // Green
  'Cognizant': { backgroundColor: '#DC2626', textColor: '#FFFFFF' }, // Red
  'Amazon': { backgroundColor: '#F59E0B', textColor: '#FFFFFF' }, // Orange
  'Google': { backgroundColor: '#1E40AF', textColor: '#FFFFFF' }, // Dark Blue
  'Microsoft': { backgroundColor: '#047857', textColor: '#FFFFFF' }, // Dark Green
  'Accenture': { backgroundColor: '#8B5CF6', textColor: '#FFFFFF' }, // Violet
  'Capgemini': { backgroundColor: '#B91C1C', textColor: '#FFFFFF' }, // Dark Red
  'HCL': { backgroundColor: '#92400E', textColor: '#FFFFFF' } // Brown
};

export const getCompanyColors = (companyName: string): CompanyColors => {
  return companyColors[companyName] || { backgroundColor: '#6B7280', textColor: '#FFFFFF' };
};
