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
      season {
        id
        startDate
        endDate
        currentMatchday
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

export const FIXTURES_QUERY = gql`
  query FixturesQuery($id: Int) {
    fixtures(id: $id) {
      count
      competition {
        id
        name
      }
      matches {
        id
        utcDate
        status
        matchday
        stage
        group
        homeTeam {
          id
          name
        }
        awayTeam {
          id
          name
        }
        score {
          winner
          fullTime {
            homeTeam
            awayTeam
          }
        }
      }
    }
  }
`;
