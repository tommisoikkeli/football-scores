import { IMatch, MatchStatus } from '../../models/matches';

const isHomeTeamWin = (match: IMatch): boolean =>
  match.score.winner === 'HOME_TEAM';

const isAwayTeamWin = (match: IMatch): boolean =>
  match.score.winner === 'AWAY_TEAM';

const isDraw = (match: IMatch): boolean => match.score.winner === 'DRAW';

const isHomeTeamActiveTeam = (match: IMatch, activeTeam: string): boolean =>
  match.homeTeam.name === activeTeam;

const isAwayTeamActiveTeam = (match: IMatch, activeTeam: string): boolean =>
  match.awayTeam.name === activeTeam;

const filterWins = (matches: IMatch[], activeTeam: string): IMatch[] => {
  return matches.filter((m: IMatch) => {
    if (isHomeTeamWin(m)) {
      return isHomeTeamActiveTeam(m, activeTeam);
    }
    if (isAwayTeamWin(m)) {
      return isAwayTeamActiveTeam(m, activeTeam);
    }
    return false;
  });
};

const filterLosses = (matches: IMatch[], activeTeam: string): IMatch[] => {
  return matches.filter((m: IMatch) => {
    if (isHomeTeamWin(m)) {
      return !isHomeTeamActiveTeam(m, activeTeam);
    }
    if (isAwayTeamWin(m)) {
      return !isAwayTeamActiveTeam(m, activeTeam);
    }
    return false;
  });
};

const filterDraws = (matches: IMatch[]): IMatch[] =>
  matches.filter((m: IMatch) => isDraw(m));

const filterByStatus = (matches: IMatch[], status: MatchStatus): IMatch[] =>
  matches.filter((m: IMatch) => m.status === status);

export const filterMatches = (
  matches: IMatch[],
  filter: string,
  activeTeam: string
): IMatch[] => {
  let results: IMatch[] = [];

  // Return filtered results based on selection.
  switch (filter) {
    case 'Wins':
      results = filterWins(matches, activeTeam);
      break;
    case 'Losses':
      results = filterLosses(matches, activeTeam);
      break;
    case 'Draws':
      results = filterDraws(matches);
      break;
    case 'Finished':
      results = filterByStatus(matches, MatchStatus.FINISHED);
      break;
    case 'Upcoming':
      results = filterByStatus(matches, MatchStatus.SCHEDULED);
      break;
    default:
      break;
  }
  return results;
};

export const getResultClass = (match: IMatch, activeTeam: string): string => {
  if (isHomeTeamWin(match) && isHomeTeamActiveTeam(match, activeTeam)) {
    return 'win';
  } else if (isAwayTeamWin(match) && isAwayTeamActiveTeam(match, activeTeam)) {
    return 'win';
  } else if (isHomeTeamWin(match) && !isHomeTeamActiveTeam(match, activeTeam)) {
    return 'loss';
  } else if (isAwayTeamWin(match) && !isAwayTeamActiveTeam(match, activeTeam)) {
    return 'loss';
  } else if (isDraw(match)) {
    return 'draw';
  } else {
    return 'scheduled';
  }
};

export const getMatchStatusClass = (status: string): string =>
  status.toLowerCase();

export const areMatchesInPlay = (matches: IMatch[]): boolean => {
  // Match is live when status is either in play or paused.
  const liveStatuses = ['IN_PLAY', 'PAUSED'];

  return matches.some((m: IMatch) => liveStatuses.includes(m.status));
}
