import * as React from 'react';
import { shallow } from 'enzyme';
import { StandingsTable } from './StandingsTable';
import { ITeamStanding } from './queries';

const testTable: ITeamStanding[] = [
  {
    position: 1,
    team: {
      id: 65,
      name: 'Manchester City FC',
      crestUrl:
        'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
    },
    playedGames: 2,
    won: 2,
    draw: 0,
    lost: 0,
    points: 6,
    goalsFor: 8,
    goalsAgainst: 1,
    goalDifference: 7
  },
  {
    position: 2,
    team: {
      id: 64,
      name: 'Liverpool FC',
      crestUrl: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg'
    },
    playedGames: 2,
    won: 2,
    draw: 0,
    lost: 0,
    points: 6,
    goalsFor: 6,
    goalsAgainst: 0,
    goalDifference: 6
  },
  {
    position: 3,
    team: {
      id: 61,
      name: 'Chelsea FC',
      crestUrl: ''
    },
    playedGames: 2,
    won: 2,
    draw: 0,
    lost: 0,
    points: 6,
    goalsFor: 6,
    goalsAgainst: 2,
    goalDifference: 4
  }
];

const FALLBACK_CREST: string = '/images/crest.png';

describe('StandingsTable', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<StandingsTable standings={testTable} />)
  });

  it('renders table correctly', () => {
    expect(wrapper.find('.standings-table')).toBeTruthy();
    expect(wrapper.find('td').at(0).text()).toBe('1');
    expect(wrapper.find('td').at(1).text()).toContain('Manchester City FC');
  });

  it('renders team crests correctly', () => {
    expect(wrapper.find('TeamCrest').at(0).html()).toContain(testTable[0].team.crestUrl);
    expect(wrapper.find('TeamCrest').at(2).html()).toContain(FALLBACK_CREST);
  });
});
