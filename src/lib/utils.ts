import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Debounce function to limit the rate at which a function can fire
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Calculate completion percentage based on filled fields
 */
export function calculateCompletion(data: any): number {
  const totalFields = countFields(data);
  const filledFields = countFilledFields(data);

  if (totalFields === 0) return 0;
  return Math.round((filledFields / totalFields) * 100);
}

function countFields(obj: any): number {
  if (obj === null || obj === undefined) return 0;
  if (typeof obj !== 'object') return 1;
  if (Array.isArray(obj)) return obj.length;

  return Object.keys(obj).reduce((count, key) => {
    return count + countFields(obj[key]);
  }, 0);
}

function countFilledFields(obj: any): number {
  if (obj === null || obj === undefined) return 0;
  if (typeof obj === 'string') return obj.trim().length > 0 ? 1 : 0;
  if (typeof obj === 'number') return 1;
  if (typeof obj === 'boolean') return 1;
  if (Array.isArray(obj)) return obj.filter(item => countFilledFields(item) > 0).length;

  return Object.keys(obj).reduce((count, key) => {
    return count + countFilledFields(obj[key]);
  }, 0);
}
