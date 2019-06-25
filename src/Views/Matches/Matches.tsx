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
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { filterMatches } from '../../components/Matches/matchesHelpers';
import { Text } from '../../components/Text/Text';
import './matches-view.scss';

interface IMatchesProps {
  id: number;
  activeTeam: string;
}

const filterOptions: string[] = [
  'All',
  'Wins',
  'Draws',
  'Losses',
  'Finished',
  'Upcoming'
];

export const Matches: React.FC<IMatchesProps> = ({ id, activeTeam }) => {
  const [matches, setMatches] = React.useState<IMatch[]>([]);
  const [filteredMatches, setFilteredMatches] = React.useState<IMatch[]>([]);
  const [isFilterActive, setIsFilterActive] = React.useState<boolean>(false);
  const matchesToShow = isFilterActive ? filteredMatches : matches;

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    
    // If selection is 'All', show all matches, otherwise filtered results.
    setIsFilterActive(value !== 'All' ? true : false);
    setFilteredMatches(filterMatches(matches, value, activeTeam));
  };

  const getMatchCount = (): string =>
    matchesToShow.length === 1 ? '1 match' : `${matchesToShow.length} matches`;

  return (
    <Query<IMatchesQuery, IMatchesQueryVariables>
      query={MATCHES_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <React.Fragment>
            <div className='matches-header-section'>
              <Dropdown
                onChange={event => onSelectChange(event)}
                label='Filter'
                options={filterOptions}
              />
              <Text>{getMatchCount()}</Text>
            </div>
            {data && !matches.length && setMatches(data.matches.matches)}
            {matchesToShow.map((m: IMatch) => (
              <React.Fragment key={m.id}>
                <MatchInfo match={m} activeTeam={activeTeam} />
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
