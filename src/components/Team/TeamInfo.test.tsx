import * as React from 'react';
import { mount } from 'enzyme';
import { TeamInfo } from './TeamInfo';

const testTeam1 = {
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
      id: 11,
      name: 'Test Defender',
      position: 'Defender',
      role: 'PLAYER',
      shirtNumber: 2
    },
    {
      id: 11,
      name: 'Test Midfielder',
      position: 'Midfielder',
      role: 'PLAYER',
      shirtNumber: 4
    },
    {
      id: 11,
      name: 'Test Attacker',
      position: 'Attacker',
      role: 'PLAYER',
      shirtNumber: 10
    },
    {
      id: 11,
      name: 'Test Coach',
      position: '',
      role: 'COACH',
      shirtNumber: null
    }
  ]
};

describe('TeamInfo', () => {
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
    const players = wrapper.find('.position-divider');
    expect(players.length).toBe(4);
    players.forEach((p: any, i: number) => {
      expect(p.text()).toContain(testTeam1.squad[i].name);
    });
  });
});
