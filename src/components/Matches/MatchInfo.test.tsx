import * as React from 'react';
import { IMatch } from '../../models/matches';
import { mount } from 'enzyme';
import { MatchInfo } from './MatchInfo';
import { BrowserRouter as Router } from 'react-router-dom';

const match: IMatch = {
  id: 1,
  competition: {
    id: 11,
    name: 'Test League'
  },
  season: {
    id: 111,
    endDate: '2019-06-01',
    startDate: '2018-06-26'
  },
  utcDate: '2018-09-18T19:00:00Z',
  status: 'FINISHED',
  matchday: 1,
  stage: 'REGULAR_SEASON',
  group: 'Regular season',
  homeTeam: {
    id: 1111,
    name: 'FC Test'
  },
  awayTeam: {
    id: 2222,
    name: 'FC Spec'
  },
  score: {
    winner: 'HOME_TEAM',
    fullTime: {
      homeTeam: 3,
      awayTeam: 1
    }
  }
};

describe('MatchInfo', () => {
  it('renders correct information', () => {
    const wrapper = mount(
      <Router>
        <MatchInfo match={match} activeTeam='FC Test' />
      </Router>
    );
    expect(wrapper.find('.match-info-container').hasClass('win')).toBeTruthy();
    expect(wrapper.find('.match-status').text()).toEqual('FINISHED');
    expect(wrapper.find('.match-info-header').text()).toContain('Test League');
    expect(wrapper.find('.match-info-header').text()).toContain('Matchday 1');
    expect(wrapper.find('.score-block').text()).toEqual('3-1');
    expect(wrapper.find('.team-name').at(0).hasClass('winner')).toBeTruthy();
  });
});
