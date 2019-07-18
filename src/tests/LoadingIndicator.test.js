import React from 'react';
import { mount } from 'enzyme';
import LoadingIndicator from '../components/LoadingIndicator';

describe('LoadingIndicator', () => {

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

})