import { ICompetition } from "./competitions";
import { IMatch } from "./matches";

interface IFixtures {
  competition: ICompetition;
  matches: IMatch[];
}

export interface IFixturesQuery {
  fixtures: IFixtures;
}

export interface IFixturesQueryVariables {
  id: number;
}
