import { gql } from 'apollo-boost';

export const COMPETITIONS_QUERY = gql`
  query Competitions {
    competitions {
      count
      competitions {
        id
        name
        code
        area {
          id
          name
        }
      }
    }
  }
`;

export const LATEST_MATCH_QUERY = gql`
  query LatestMatchQuery($id: Int) {
    latestMatch(id: $id) {
      matches {
        id
        competition {
          id
          name
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
          fullTime {
            homeTeam
            awayTeam
          }
        }
      }
    }
  }
`;

export const NEXT_MATCH_QUERY = gql`
  query NextMatchQuery($id: Int) {
    nextMatch(id: $id) {
      matches {
        id
        competition {
          id
          name
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
          fullTime {
            homeTeam
            awayTeam
          }
        }
      }
    }
  }
`;
