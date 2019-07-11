// add goat emoji next to Messi because Messi is the GOAT

function shouldAddGoat(player: string): boolean {
  return player === 'Lionel Messi';
}

export function checkPlayerAndAddGoatIfNeeded(player: string): string {
  if (shouldAddGoat(player)) {
    return (player += ' 🐐');
  }
  return player;
}
