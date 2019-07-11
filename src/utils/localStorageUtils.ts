import { ITeam } from '../models/team';

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
