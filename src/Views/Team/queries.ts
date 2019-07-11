import { gql } from 'apollo-boost';

export const TEAM_QUERY = gql`
  query TeamQuery($id: Int) {
    team(id: $id) {
      id
      area {
        id
        name
      }
      crestUrl
      founded
      name
      tla
      venue
      clubColors
      squad {
        id
        name
        position
        role
        shirtNumber
      }
    }
  }
`;

export const MATCHES_QUERY = gql`
  query MatchesQuery($id: Int) {
    matches(id: $id) {
      matches {
        id
        competition {
          id
          name
        }
        season {
          id
          startDate
          endDate
        }
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
