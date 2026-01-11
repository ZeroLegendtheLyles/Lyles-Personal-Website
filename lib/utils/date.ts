import { format, parseISO } from 'date-fns';

export function formatDate(date: string | Date, formatStr: string = 'MMM yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}
