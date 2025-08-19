import { Company, ExamType } from '../types';

/**
 * Generates the correct route ID for a company and exam type
 * Handles the special case where company ID already includes exam type (like TCS)
 */
export const getRouteId = (company: Company, examType: ExamType): string => {
  
  if (!company || !examType) {
    console.error('[Routing] Missing company or examType data');
    return '';
  }
  
  // Special case: TCS company ID already includes the exam type
  if (company.id === 'tcs-nqt') {
    return company.id;
  }
  
  // For all other companies, concatenate company ID and exam type ID
  const routeId = `${company.id}-${examType.id}`;
  return routeId;
};

/**
 * Parses a route ID to extract company and exam type information
 * Used for reverse lookup when navigating from URL
 */
export const parseRouteId = (routeId: string): { companyId: string; examTypeId: string } => {
  
  // Special case: TCS route
  if (routeId === 'tcs-nqt') {
    return { companyId: 'tcs-nqt', examTypeId: 'nqt' };
  }
  
  // For other companies, split by the last hyphen
  const lastHyphenIndex = routeId.lastIndexOf('-');
  if (lastHyphenIndex === -1) {
    return { companyId: routeId, examTypeId: '' };
  }
  
  const companyId = routeId.substring(0, lastHyphenIndex);
  const examTypeId = routeId.substring(lastHyphenIndex + 1);
  
  return { companyId, examTypeId };
};

/**
 * Validates if a route ID is valid for the given company
 */
export const isValidRouteId = (routeId: string, company: Company): boolean => {
  const { companyId, examTypeId } = parseRouteId(routeId);
  
  // Check if company ID matches
  if (companyId !== company.id) {
    return false;
  }
  
  // Check if exam type exists for this company
  return company.examTypes.some(examType => examType.id === examTypeId);
};
