import { gql } from 'apollo-boost';
import { ITeam } from '../Teams/queries';
import { ICompetition } from '../Competitions/queries';

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

export const STANDINGS_QUERY = gql`
  query Standings($id: Int) {
    standings(id: $id) {
      competition {
        id
        name
        code
        area {
          id
          name
        }
      }
      standings {
        type
        stage
        group
        table {
          position
          team {
            id
            name
            crestUrl
          }
          points
          playedGames
          goalsFor
          goalsAgainst
          goalDifference
          won
          draw
          lost
        }
      }
    }
  }
`;
