export function splitString(string: string, separator: string): string[] {
  return string.split(separator);
}

export function removeUnderScores(string: string): string {
  return string.replace(/_/g, ' ');
}

export function addUnderScores(string: string): string {
  return string.replace(/ /g, '_');
}

export function truncate(string: string, maxLength: number): string {
  return string.length > maxLength
    ? string.substring(0, maxLength) + '...'
    : string;
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
