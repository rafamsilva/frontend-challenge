import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import NothingFound from '../';

describe('Nothing found Component', () => {
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
        render(<NothingFound />, container);
      });
    });

    it('should render with default values', () => {
      act(() => {
        render(<NothingFound />, container);
      });

      expect(container.querySelector("[data-testid='title']")).toBeDefined();
      expect(container.querySelector("[data-testid='title']").textContent).toBe('Don’t know what to search?');

      expect(container.querySelector("[data-testid='description']")).toBeDefined();
      expect(container.querySelector("[data-testid='description']").textContent).toBe('Here’s an offer you can’t refuse');
    });

    it('should render with passed values', () => {
      act(() => {
        render(<NothingFound terms="Darwin" />, container);
      });

      expect(container.querySelector("[data-testid='title']")).toBeDefined();
      expect(container.querySelector("[data-testid='title']").textContent).toBe('Sorry, nothing found!');

      expect(container.querySelector("[data-testid='description']")).toBeDefined();
      expect(container.querySelector("[data-testid='description']").textContent).toBe(
        `Sorry, nothing was found to term: \`Darwin\`. Try again with different terms`,
      );
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot default values', () => {
      act(() => {
        render(<NothingFound />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot passed values', () => {
      act(() => {
        render(<NothingFound terms="Darwin" />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
