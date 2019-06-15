import { gql } from 'apollo-boost';

export const TEAM_QUERY = gql`
  query TeamQuery($id: Int) {
    team(id: $id) {
      id
      crestUrl
      founded
      name
      tla
      venue
      squad {
        id
        name
        position
        role
      }
    }
  }
`;
