import { gql } from 'apollo-boost';

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
