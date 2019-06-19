import { ITeam } from "../models/team";

export function splitString(string: string, separator: string): string[] {
  return string.split(separator);
}

export function shouldAddGoat(player: string): boolean {
  return player === 'Lionel Messi';
}

// add goat emoji next to Messi because Messi is the GOAT
export function checkPlayerAndAddGoatIfNeeded(player: string): string {
  if (shouldAddGoat(player)) {
    return player += ' 🐐';
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
  const items = getLocalStorageItems(key).filter((t: ITeam) => t.id !== item.id);
  window.localStorage.setItem(key, JSON.stringify(items));
}

export function isTeamSaved(key: string, id: number): boolean {
  // check if id exists in local storage
  return getLocalStorageItems(key).map((t: ITeam) => t.id).indexOf(id) !== -1;
}
