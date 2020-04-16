import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Logo from '../';

describe('Logo Component', () => {
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
        render(<Logo />, container);
      });
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot', () => {
      act(() => {
        render(<Logo />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
