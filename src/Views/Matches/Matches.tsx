import * as React from 'react';
import { Query } from 'react-apollo';
import {
  IMatchesQuery,
  IMatchesQueryVariables,
  IMatch
} from '../../models/matches';
import { MATCHES_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { MatchInfo } from '../../components/Matches/MatchInfo';

interface IMatchesProps {
  id: number;
  activeTeam: string;
}

export const Matches: React.FC<IMatchesProps> = ({ id, activeTeam }) => {
  return (
    <Query<IMatchesQuery, IMatchesQueryVariables>
      query={MATCHES_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <React.Fragment>
            {data &&
              data.matches.matches.map((m: IMatch) => (
                <React.Fragment key={m.id}>
                  <MatchInfo match={m} activeTeam={activeTeam}/>
                </React.Fragment>
              ))}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
