/**
 * Date utility functions for the calculator
 */

export interface DateResult {
  days: number;
  weeks: number;
  months: number;
  years: number;
  businessDays: number;
}

/**
 * Calculate the difference between two dates
 */
export function calculateDateDiff(startDate: Date, endDate: Date): DateResult {
  // Ensure we have normalized dates (no time component)
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Business Days calculation (weekends only for now)
  let businessDays = 0;
  const current = new Date(start < end ? start : end);
  const target = new Date(start < end ? end : start);

  while (current < target) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      businessDays++;
    }
    current.setDate(current.getDate() + 1);
  }

  // Breakdown
  const weeks = Math.floor(diffInDays / 7);
  
  // Approximate months/years
  const years = Math.floor(diffInDays / 365.25);
  const months = Math.floor(diffInDays / 30.44);

  return {
    days: diffInDays,
    weeks,
    months,
    years,
    businessDays
  };
}

/**
 * Format a date to YYYY-MM-DD for input fields
 */
export function formatDateForInput(date: Date): string {
  return date.toISOString().split('T')[0];
}
