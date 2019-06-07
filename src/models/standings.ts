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
  standings: IStandings[];
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
