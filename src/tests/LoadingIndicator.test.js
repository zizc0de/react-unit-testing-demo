import React from 'react';
import { mount } from 'enzyme';
import LoadingIndicator from '../components/LoadingIndicator';

describe('Test LoadingIndicator component', () => {

  describe('when loading is false', () => {
    it('should render children', () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={false}>
          <div>Hello World</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual('<div>Hello World</div>');
    })
  })

  describe('when loading is true', () => {
    it('should render loading indicator', () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={true}>
          <div>Hello World</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual('<div>Loading...</div>');
    })
  })

})