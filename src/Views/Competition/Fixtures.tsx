import * as React from 'react';
import { Query } from 'react-apollo';
import { IFixturesQuery, IFixturesQueryVariables } from '../../models/fixtures';
import { FIXTURES_QUERY } from './queries';
import { Loading } from '../../components/Loading/Loading';
import { IMatch } from '../../models/matches';
import { MatchInfo } from '../../components/Matches/MatchInfo';
import './fixtures.scss';
import { ICompetition } from '../../models/competitions';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import {
  removeUnderScores,
  capitalize,
  addUnderScores,
  truncate
} from '../../utils/stringUtils';
import { Error } from '../../components/Error/Error';
import { Text } from '../../components/Text/Text';
import { areMatchesInPlay } from '../../components/Matches/matchesHelpers';
import { useOutsideClick } from '../../utils/hooks';

interface IFixturesProps {
  id: number;
}

export const Fixtures: React.FC<IFixturesProps> = ({ id }) => {
  const [matches, setMatches] = React.useState<IMatch[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const dropdownRef = React.useRef(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const getMatchesToShow = (): IMatch[] => {
    if (filter) {
      return matches.filter((m: IMatch) =>
        m.matchday !== null
          ? m.matchday === +filter
          : m.stage === addUnderScores(filter.toUpperCase())
      );
    }
    return matches;
  };

  const getFixtures = (
    matches: IMatch[],
    competition: ICompetition
  ): JSX.Element[] => {
    return matches.map((m: IMatch) => (
      <React.Fragment key={m.id}>
        <MatchInfo match={m} competition={competition} />
      </React.Fragment>
    ));
  };

  const getDropdownOptions = (matches: IMatch[]): string[] =>
    // Get unique matchdays.
    Array.from(
      new Set(
        matches.map(m =>
          m.matchday !== null
            ? `${m.matchday}`
            : `${capitalize(removeUnderScores(m.stage))}`
        )
      )
    );

  return (
    <Query<IFixturesQuery, IFixturesQueryVariables>
      query={FIXTURES_QUERY}
      variables={{ id }}
      pollInterval={60000}>
      {({ loading, error, data, stopPolling }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;

        // Prevent refetching if no matches are live.
        if (!areMatchesInPlay(data.fixtures.matches)) {
          stopPolling();
        }

        if (!data.fixtures.matches.length) {
          return <Text>Fixtures not yet available.</Text>;
        }

        return (
          <div className='fixtures'>
            {setMatches(data.fixtures.matches)}
            {!filter && setFilter(getDropdownOptions(data.fixtures.matches)[0])}
            <div ref={dropdownRef}>
              <Dropdown
                label='Matchday'
                options={getDropdownOptions(data.fixtures.matches)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onItemSelect={option => setFilter(option)}
                isOpen={isDropdownOpen}
                value={truncate(filter, 16)}
              />
            </div>
            {matches.length && getFixtures(getMatchesToShow(), data.fixtures.competition)}
          </div>
        );
      }}
    </Query>
  );
};
