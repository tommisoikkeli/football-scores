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

interface IFixturesProps {
  id: number;
}

export const Fixtures: React.FC<IFixturesProps> = ({ id }) => {
  const [matches, setMatches] = React.useState<IMatch[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const matchesToShow = filter
    ? matches.filter((m: IMatch) => m.matchday === parseInt(filter))
    : matches;

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
    Array.from(new Set(matches.map(m => `${m.matchday}`)));

  return (
    <Query<IFixturesQuery, IFixturesQueryVariables>
      query={FIXTURES_QUERY}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>Error</div>;

        return (
          <div className='fixtures'>
            {!matches.length && setMatches(data.fixtures.matches)}
            {!filter && setFilter('1')}
            <Dropdown
              options={getDropdownOptions(data.fixtures.matches)}
              label='Matchday'
              onChange={event => setFilter(event.target.value)}
            />
            {getFixtures(matchesToShow, data.fixtures.competition)}
          </div>
        );
      }}
    </Query>
  );
};
