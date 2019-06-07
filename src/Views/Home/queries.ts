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
