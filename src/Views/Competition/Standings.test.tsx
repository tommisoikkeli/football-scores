import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { Standings } from './Standings';
import { BrowserRouter as Router } from 'react-router-dom';
import wait from 'waait';
import { STANDINGS_QUERY } from './queries';
import { act } from 'react-dom/test-utils';

const mocks = [
  {
    request: {
      query: STANDINGS_QUERY,
      variables: {
        id: 2014
      }
    },
    result: {
      data: {
        standings: {
          competition: {
            id: 2014,
            name: 'Primera Division',
            code: 'PD',
            area: {
              id: 2224,
              name: 'Spain'
            }
          },
          season: {
            id: 123,
            startDate: '2019-08-18',
            endDate: '2020-05-17',
            currentMatchday: 3
          },
          standings: [
            {
              type: 'TOTAL',
              stage: 'REGULAR_SEASON',
              group: '',
              table: [
                {
                  position: 1,
                  team: {
                    id: 81,
                    name: 'FC Barcelona',
                    crestUrl:
                      'http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg'
                  },
                  points: 87,
                  playedGames: 38,
                  goalsFor: 90,
                  goalsAgainst: 36,
                  goalDifference: 54,
                  won: 26,
                  draw: 9,
                  lost: 3
                },
                {
                  position: 2,
                  team: {
                    id: 78,
                    name: 'Club Atlético de Madrid',
                    crestUrl:
                      'http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg'
                  },
                  points: 76,
                  playedGames: 38,
                  goalsFor: 55,
                  goalsAgainst: 29,
                  goalDifference: 26,
                  won: 22,
                  draw: 10,
                  lost: 6
                }
              ]
            }
          ]
        }
      }
    }
  }
];

describe('Standings', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Standings id={2014} />
        </MockedProvider>
      </Router>
    );
  });

  it('renders loading state', () => {
    expect(wrapper.find('Loading').length).toBe(1);
  });

  it('renders data', async () => {
    await act(async () => {
      await wait(0);
    });
    wrapper.update();
    expect(wrapper.find('StandingsTable').length).toBe(1);
    expect(
      wrapper
        .find('Text')
        .at(1)
        .text()
    ).toBe('Season 2019 - 2020');
  });
});
