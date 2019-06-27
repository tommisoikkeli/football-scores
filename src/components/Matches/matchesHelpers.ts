import { IMatch, MatchStatus } from '../../models/matches';

export const isHomeTeamWin = (match: IMatch): boolean =>
  match.score.winner === 'HOME_TEAM';

export const isAwayTeamWin = (match: IMatch): boolean =>
  match.score.winner === 'AWAY_TEAM';

export const isDraw = (match: IMatch): boolean => match.score.winner === 'DRAW';

export const isHomeTeamActiveTeam = (
  match: IMatch,
  activeTeam: string
): boolean => match.homeTeam.name === activeTeam;

export const isAwayTeamActiveTeam = (
  match: IMatch,
  activeTeam: string
): boolean => match.awayTeam.name === activeTeam;

export const filterWins = (matches: IMatch[], activeTeam: string): IMatch[] => {
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

export const filterLosses = (
  matches: IMatch[],
  activeTeam: string
): IMatch[] => {
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

export const filterDraws = (matches: IMatch[]): IMatch[] => {
  return matches.filter((m: IMatch) => isDraw(m));
};

export const filterByStatus = (
  matches: IMatch[],
  status: MatchStatus
): IMatch[] => {
  return matches.filter((m: IMatch) => m.status === status);
};

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
