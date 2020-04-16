import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Wrapper from '../';

describe('Wrapper Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('Render', () => {
    it('should render without crashing', () => {
      act(() => {
        render(<Wrapper />, container);
      });
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot', () => {
      act(() => {
        render(<Wrapper />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
