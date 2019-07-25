import React from 'react';
import { shallow } from 'enzyme';
import { Text } from './Text';

describe('Text', () => {
  it('renders text as expected', () => {
    const wrapper = shallow(<Text>Test text</Text>);
    expect(wrapper.find('.text-wrapper').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.text()).toBe('Test text');
  });
});
