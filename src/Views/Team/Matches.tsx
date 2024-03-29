import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
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
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const matchesToShow =
    filter !== 'All' ? filterMatches(matches, filter, activeTeam) : matches;

  const getMatchCount = (): string =>
    matchesToShow.length === 1 ? '1 match' : `${matchesToShow.length} matches`;

  const { loading, error, data, stopPolling } = useQuery<
    IMatchesQuery,
    IMatchesQueryVariables
  >(MATCHES_QUERY, { variables: { id }, pollInterval: 30000 });

  if (loading) return <Loading />;
  if (error) return <Error />;

  !matches.length && setMatches(data.matches.matches);

  // Prevent refetching if no matches are live.
  if (!areMatchesInPlay(data.matches.matches)) {
    stopPolling();
  }

  return (
    <React.Fragment>
      <div className='matches-header-section'>
        <div>
          <Dropdown
            label='Filter'
            options={filterOptions}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onItemSelect={option => setFilter(option)}
            isOpen={isDropdownOpen}
            value={filter}
            outsideClickHandler={() => setIsDropdownOpen(false)}
          />
        </div>
        <Text>{getMatchCount()}</Text>
      </div>
      {matchesToShow.map((m: IMatch) => (
        <React.Fragment key={m.id}>
          <MatchInfo match={m} activeTeam={activeTeam} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
