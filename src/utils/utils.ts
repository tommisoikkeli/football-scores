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
