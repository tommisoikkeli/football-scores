import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { TeamInfo } from './TeamInfo';
import { ITeam } from '../../models/team';

const testTeam1: ITeam = {
  id: 1,
  name: 'FC Test',
  crestUrl: 'cresturl',
  tla: 'FCT',
  founded: 2019,
  venue: 'Test Park',
  clubColors: 'Black / Red',
  squad: [
    {
      id: 11,
      name: 'Test Keeper',
      position: 'Goalkeeper',
      role: 'PLAYER',
      shirtNumber: 1
    },
    {
      id: 12,
      name: 'Test Defender',
      position: 'Defender',
      role: 'PLAYER',
      shirtNumber: 2
    },
    {
      id: 13,
      name: 'Test Midfielder',
      position: 'Midfielder',
      role: 'PLAYER',
      shirtNumber: 4
    },
    {
      id: 14,
      name: 'Lionel Messi',
      position: 'Attacker',
      role: 'PLAYER',
      shirtNumber: 10
    },
    {
      id: 15,
      name: 'Test Coach',
      position: '',
      role: 'COACH',
      shirtNumber: null
    }
  ]
};

const testTeam2: ITeam = {
  id: 2,
  name: 'FC Test',
  crestUrl: 'cresturl',
  tla: 'FCT',
  founded: 2019,
  venue: 'Test Park',
  clubColors: 'Black / Red',
  squad: []
};

describe('TeamInfo with squad', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<TeamInfo team={testTeam1} />);
  });

  it('renders team info correctly', () => {
    expect(
      wrapper
        .find('Text')
        .at(0)
        .text()
    ).toBe('FC Test (FCT)');
    expect(wrapper.find('TeamCrest').html()).toContain(testTeam1.crestUrl);
    expect(wrapper.find('.info-row').length).toBe(4);
    expect(wrapper.find('ColorBall').length).toBe(2);
    expect(
      wrapper
        .find('.info-row')
        .at(3)
        .text()
    ).toContain('Test Coach');
  });

  it('renders squad correctly', () => {
    expect(wrapper.find('.squad').length).toBe(1);
    const players = wrapper.find('.position-divider');
    expect(players.length).toBe(4);
    players.forEach((p: any, i: number) => {
      expect(p.text()).toContain(testTeam1.squad[i].name);
    });
  });

  it('adds goat when conditions are met', () => {
    const goat = '🐐';
    expect(wrapper.find('.player-info').at(3).text()).toContain(goat);
  });
});

describe('TeamInfo without squad', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<TeamInfo team={testTeam2} />);
  });

  it('does not render coach', () => {
    expect(wrapper.find('.info-row').length).toBe(3);
  });

  it('does not render players', () => {
    expect(wrapper.find('.squad').length).toBe(0);
  })
});
