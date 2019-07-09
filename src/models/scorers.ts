import { ICompetition } from './competitions';
import { ISeason } from './standings';
import { IPlayer, ITeam } from './team';

export interface IScorers {
  competition: ICompetition;
  season: ISeason;
  scorers: IScorer[];
}

export interface IScorer {
  player: IPlayer;
  team: ITeam;
  numberOfGoals: number;
}

export interface IScorersQuery {
  scorers: IScorers;
}

export interface IScorersQueryVariables {
  id: number;
}
