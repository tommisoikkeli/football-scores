import { DateTime } from 'luxon';

export const parseDate = (date: string): string =>
  DateTime.fromISO(date).toLocaleString();

export const parseTime = (date: string): string =>
  DateTime.fromISO(date).toLocaleString({
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
