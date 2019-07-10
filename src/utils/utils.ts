import { ITeam } from '../models/team';

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

export function parseDate(date: Date): string {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function parseTime(date: Date): string {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// add goat emoji next to Messi because Messi is the GOAT
export function checkPlayerAndAddGoatIfNeeded(player: string): string {
  if (player === 'Lionel Messi') {
    return (player += ' 🐐');
  }
  return player;
}

export function getLocalStorageItems(key: string) {
  return JSON.parse(window.localStorage.getItem(key) || '[]');
}

export function setLocalStorageItem(key: string, item: ITeam): void {
  const existingItems = getLocalStorageItems(key);
  window.localStorage.setItem(key, JSON.stringify([...existingItems, item]));
}

export function removeLocalStorageItem(key: string, item: ITeam): void {
  const items = getLocalStorageItems(key).filter(
    (t: ITeam) => t.id !== item.id
  );
  window.localStorage.setItem(key, JSON.stringify(items));
}

export function isTeamSaved(key: string, id: number): boolean {
  // check if id exists in local storage
  return (
    getLocalStorageItems(key)
      .map((t: ITeam) => t.id)
      .indexOf(id) !== -1
  );
}
