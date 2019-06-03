import { gql } from 'apollo-boost';

export interface ITeam {
  id: number;
  name: string;
  crestUrl: string;
  founded: number;
  tla: string;
  venue: string;
}

export interface ITeams {
  count: number;
  teams: ITeam[];
}

export interface ITeamsQuery {
  teams: ITeams;
}

export interface ITeamsQueryVariables {
  id: number;
}

export const TEAMS_QUERY = gql`
  query Teams($id: Int) {
    teams(id: $id) {
      count
      teams {
        id
        name
        venue
        founded
        crestUrl
        tla
      }
    }
  }
`;
