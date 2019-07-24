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
import {
  filterMatches,
  areMatchesInPlay
} from '../../components/Matches/matchesHelpers';
import { Text } from '../../components/Text/Text';
import './matches-view.scss';
import { Error } from '../../components/Error/Error';
import { useOutsideClick } from '../../utils/hooks';

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
  const [filter, setFilter] = React.useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const dropdownRef = React.useRef(null);
  const matchesToShow =
    filter !== 'All' ? filterMatches(matches, filter, activeTeam) : matches;

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const getMatchCount = (): string =>
    matchesToShow.length === 1 ? '1 match' : `${matchesToShow.length} matches`;

  return (
    <Query<IMatchesQuery, IMatchesQueryVariables>
      query={MATCHES_QUERY}
      variables={{ id }}
      pollInterval={30000}>
      {({ loading, error, data, stopPolling }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;

        // Prevent refetching if no matches are live.
        if (!areMatchesInPlay(data.matches.matches)) {
          stopPolling();
        }

        return (
          <React.Fragment>
            <div className='matches-header-section'>
              <div ref={dropdownRef}>
                <Dropdown
                  label='Filter'
                  options={filterOptions}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onItemSelect={option => setFilter(option)}
                  isOpen={isDropdownOpen}
                  value={filter}
                />
              </div>
              <Text>{getMatchCount()}</Text>
            </div>
            {setMatches(data.matches.matches)}
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
