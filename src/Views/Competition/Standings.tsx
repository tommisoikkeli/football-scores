import * as React from 'react';
import { Query } from 'react-apollo';
import { Loading } from '../../components/Loading/Loading';
import { StandingsTable } from '../../components/StandingsTable/StandingsTable';
import { Text } from '../../components/Text/Text';
import { GroupsTable } from '../../components/StandingsTable/GroupsTable';
import {
  IStandings,
  IStandingsQuery,
  IStandingsQueryVariables
} from '../../models/standings';
import { STANDINGS_QUERY } from './queries';
import { Error } from '../../components/Error/Error';

interface IStandingsProps {
  id: number;
}

export const Standings: React.FC<IStandingsProps> = ({ id }) => {
  const hasGroups = (standings: IStandings[]): boolean => standings.length > 1;

  const isTableEmpty = (standings: IStandings[]): boolean =>
    standings.length === 0;

  const getSeason = (startDate: Date, endDate: Date): string => {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    if (startYear === endYear) {
      return `${startYear}`;
    }
    return `Season ${startYear} - ${endYear}`;
  };

  return (
    <Query<IStandingsQuery, IStandingsQueryVariables>
      query={STANDINGS_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;
        return (
          <React.Fragment>
            <Text>{data.standings.competition.name}</Text>
            <Text>
              {getSeason(
                new Date(data.standings.season.startDate),
                new Date(data.standings.season.endDate)
              )}
            </Text>
            {!isTableEmpty(data.standings.standings) &&
            !hasGroups(data.standings.standings) ? (
              <StandingsTable standings={data.standings.standings[0].table} />
            ) : (
              !isTableEmpty(data.standings.standings) && (
                <GroupsTable groups={data.standings.standings} />
              )
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
