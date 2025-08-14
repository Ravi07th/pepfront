import { Company, ExamType } from '../types';

/**
 * Generates the correct route ID for a company and exam type
 * Handles the special case where company ID already includes exam type (like TCS)
 */
export const getRouteId = (company: Company, examType: ExamType): string => {
  console.log(`[Routing] getRouteId called with company: ${company?.id}, examType: ${examType?.id}`);
  
  if (!company || !examType) {
    console.error('[Routing] Missing company or examType data');
    return '';
  }
  
  // Special case: TCS company ID already includes the exam type
  if (company.id === 'tcs-nqt') {
    console.log(`[Routing] TCS special case: ${company.id}`);
    return company.id;
  }
  
  // For all other companies, concatenate company ID and exam type ID
  const routeId = `${company.id}-${examType.id}`;
  console.log(`[Routing] Generated route ID: ${routeId} for company: ${company.id}, examType: ${examType.id}`);
  return routeId;
};

/**
 * Parses a route ID to extract company and exam type information
 * Used for reverse lookup when navigating from URL
 */
export const parseRouteId = (routeId: string): { companyId: string; examTypeId: string } => {
  console.log(`[Routing] Parsing route ID: ${routeId}`);
  
  // Special case: TCS route
  if (routeId === 'tcs-nqt') {
    console.log(`[Routing] TCS route detected: companyId=tcs-nqt, examTypeId=nqt`);
    return { companyId: 'tcs-nqt', examTypeId: 'nqt' };
  }
  
  // For other companies, split by the last hyphen
  const lastHyphenIndex = routeId.lastIndexOf('-');
  if (lastHyphenIndex === -1) {
    console.log(`[Routing] No hyphen found, treating as company ID only: ${routeId}`);
    return { companyId: routeId, examTypeId: '' };
  }
  
  const companyId = routeId.substring(0, lastHyphenIndex);
  const examTypeId = routeId.substring(lastHyphenIndex + 1);
  
  console.log(`[Routing] Parsed: companyId=${companyId}, examTypeId=${examTypeId}`);
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
