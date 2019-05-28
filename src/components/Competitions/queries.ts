import { gql } from 'apollo-boost';

export interface ICompetition {
  id: number;
  name: string;
  code: string;
}

export interface ICompetitions {
  count: number;
  competitions: ICompetition[];
}

export interface ICompetitionsQuery {
  competitions: ICompetitions;
}

export const COMPETITIONS_QUERY = gql`
  {
    competitions {
      count
      competitions {
        id
        name
        code
      }
    }
  }
`;
