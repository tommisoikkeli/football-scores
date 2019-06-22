import { ICompetition } from './competitions';
import { ISeason } from './standings';

export interface IMatch {
  id: number;
  competition: ICompetition;
  season: ISeason;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  homeTeam: IMatchTeam
  awayTeam: IMatchTeam;
  score: IScore;
}

interface IMatchTeam {
  id: number;
  name: string;
}

export interface IScore {
  winner: string;
  fullTime: IResult;
}

export interface IResult {
  homeTeam: number;
  awayTeam: number;
}

interface IMatches {
  matches: IMatch[];
}

export interface IMatchesQuery {
  matches: IMatches;
}

export interface IMatchesQueryVariables {
  id: number;
}
