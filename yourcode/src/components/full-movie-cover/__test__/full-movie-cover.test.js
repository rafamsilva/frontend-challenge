import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import FullMovieCover from '../';

describe('FullMovieCover Component', () => {
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
        render(<FullMovieCover />, container);
      });
    });

    it('should render without image', () => {
      act(() => {
        render(<FullMovieCover />, container);
      });

      expect(container.querySelector("[data-testid='image']")).toBeNull();
    });

    it('should render with image', () => {
      act(() => {
        render(<FullMovieCover image="http://www.fillmurray.com.br/100/100" />, container);
      });

      expect(container.querySelector("[data-testid='image']")).toBeDefined();
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot without image', () => {
      act(() => {
        render(<FullMovieCover />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot with image', () => {
      act(() => {
        render(<FullMovieCover image="http://www.fillmurray.com.br/100/100" />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
