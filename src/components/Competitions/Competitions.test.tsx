import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { COMPETITIONS_QUERY } from './queries';
import { mount } from 'enzyme';
import { Competitions } from './Competitions';
import wait from 'waait';

const mocks = [
  {
    request: {
      query: COMPETITIONS_QUERY
    },
    result: {
      data: {
        competitions: {
          count: 2,
          competitions: [
            {
              id: 2001,
              name: 'UEFA Champions League',
              code: 'CL',
              area: {
                id: 1,
                name: 'Europe'
              }
            },
            {
              id: 2021,
              name: 'Premier League',
              code: 'PL',
              area: {
                id: 2,
                name: 'England'
              }
            }
          ]
        }
      }
    }
  }
];

describe('Competitions', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Competitions />
      </MockedProvider>
    );
  });

  it('renders loading state', () => {
    expect(wrapper.text()).toBe('Loading..');
  });

  it('renders data correctly', async () => {
    await wait(0);
    wrapper.update();
    expect(wrapper.find('.competition-card').length).toBe(2);
  });
});
