// Dummy Logo Generator
// This script generates placeholder logos for companies to avoid copyright issues

function generateDummyLogo(companyName, backgroundColor = '#3B82F6', textColor = '#FFFFFF') {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, 200, 200);
  
  // Text
  ctx.fillStyle = textColor;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Get initials from company name
  const initials = companyName.split(' ').map(word => word[0]).join('').toUpperCase();
  ctx.fillText(initials, 100, 100);
  
  return canvas.toDataURL('image/png');
}

// Generate logos for all companies
const companies = [
  { name: 'TCS', bg: '#3B82F6', text: '#FFFFFF' },
  { name: 'Infosys', bg: '#8B5CF6', text: '#FFFFFF' },
  { name: 'Wipro', bg: '#10B981', text: '#FFFFFF' },
  { name: 'Cognizant', bg: '#EF4444', text: '#FFFFFF' },
  { name: 'Amazon', bg: '#F59E0B', text: '#FFFFFF' },
  { name: 'Google', bg: '#1E40AF', text: '#FFFFFF' },
  { name: 'Microsoft', bg: '#059669', text: '#FFFFFF' },
  { name: 'Accenture', bg: '#7C3AED', text: '#FFFFFF' },
  { name: 'Capgemini', bg: '#DC2626', text: '#FFFFFF' },
  { name: 'HCL', bg: '#7C2D12', text: '#FFFFFF' }
];

// Export the function for use in components
window.generateDummyLogo = generateDummyLogo;
window.companyLogos = companies;
