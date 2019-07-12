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
  homeTeam: IMatchTeam;
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

interface ILatestMatch {
  latestMatch: IMatch[];
}

interface INextMatch {
  nextMatch: IMatch[];
}

export interface IMatchesQuery {
  matches: IMatches;
}

export interface IMatchesQueryVariables {
  id: number;
}

export interface ILatestMatchQuery {
  latestMatch: IMatches;
}

export interface ILatestMatchQueryVariables {
  id: number;
}

export interface INextMatchQuery {
  nextMatch: IMatches;
}

export interface INextMatchQueryVariables {
  id: number;
}

export enum MatchStatus {
  FINISHED = 'FINISHED',
  SCHEDULED = 'SCHEDULED',
  POSTPONED = 'POSTPONED',
  CANCELED = 'CANCELED',
  PAUSED = 'PAUSED',
  IN_PLAY = 'IN_PLAY'
}
