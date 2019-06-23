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
import { Dropdown, IDropdownOption } from '../../components/Dropdown/Dropdown';
import {
  isHomeTeamWin,
  isHomeTeamActiveTeam,
  isAwayTeamWin,
  isAwayTeamActiveTeam,
  isDraw
} from '../../components/Matches/matchesHelpers';
import { Text } from '../../components/Text/Text';
import './matches-view.scss';

interface IMatchesProps {
  id: number;
  activeTeam: string;
}

const filterOptions: IDropdownOption[] = [
  {
    label: 'All',
    value: 'All'
  },
  {
    label: 'Wins',
    value: 'Wins'
  },
  {
    label: 'Draws',
    value: 'Draws'
  },
  {
    label: 'Losses',
    value: 'Losses'
  }
];

export const Matches: React.FC<IMatchesProps> = ({ id, activeTeam }) => {
  const [matches, setMatches] = React.useState<IMatch[]>([]);
  const [filteredMatches, setFilteredMatches] = React.useState<IMatch[]>([]);
  const [isFilterActive, setIsFilterActive] = React.useState<boolean>(false);
  const matchesToShow = isFilterActive ? filteredMatches : matches;

  const filterMatches = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let filteredMatches: IMatch[] = [];
    const { value } = event.target;

    value === 'All' ? setIsFilterActive(false) : setIsFilterActive(true);

    // Wins.
    // Return matches where active team is the winning team (home or away).
    if (value === 'Wins') {
      filteredMatches = matches.filter((m: IMatch) => {
        if (isHomeTeamWin(m)) {
          return isHomeTeamActiveTeam(m, activeTeam);
        }
        if (isAwayTeamWin(m)) {
          return isAwayTeamActiveTeam(m, activeTeam);
        }
        return false;
      });
    }

    // Losses.
    // Return matches where active team is the losing team (home or away).
    if (value === 'Losses') {
      filteredMatches = matches.filter((m: IMatch) => {
        if (isHomeTeamWin(m)) {
          return !isHomeTeamActiveTeam(m, activeTeam);
        }
        if (isAwayTeamWin(m)) {
          return !isAwayTeamActiveTeam(m, activeTeam);
        }
        return false;
      });
    }

    // Draws.
    if (value === 'Draws') {
      filteredMatches = matches.filter((m: IMatch) => isDraw(m));
    }

    setFilteredMatches(filteredMatches);
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
                onChange={event => filterMatches(event)}
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
