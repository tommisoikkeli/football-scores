import { ICompetition } from "./competitions";
import { ITeam } from "./team";

export interface ITeamStanding {
  position: number;
  team: ITeam;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface IStandingsTypes {
  competition: ICompetition;
  season: ISeason;
  standings: IStandings[];
}

export interface ISeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

export interface IStandings {
  type: string;
  stage: string;
  group: string;
  table: ITeamStanding[];
}

export interface IStandingsQuery {
  standings: IStandingsTypes;
}

export interface IStandingsQueryVariables {
  id: number;
}

export interface IStandingsIndicators {
  competition: string;
  indicators: IIndicators[];
  topPositions: IPosition;
  lowerTopPositions: IPosition;
  bottomPositions: IPosition;
  midPositions?: IPosition;
  upperBottomPositions?: IPosition;
}

interface IPosition {
  positions: number[];
}

export interface IIndicators {
  qualification: string;
  color: string;
}
