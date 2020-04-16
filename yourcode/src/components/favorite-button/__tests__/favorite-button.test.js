import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import FavoriteButton from '../';

describe('FavoriteButton Component', () => {
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
        render(<FavoriteButton />, container);
      });
    });

    it('should render liked button', () => {
      act(() => {
        render(<FavoriteButton active={true} />, container);
      });

      expect(container.querySelector("[data-testid='liked-icon']")).toBeDefined();
      expect(container.querySelector("[data-testid='unliked-icon']")).toBeNull();

      expect(container.querySelector("[data-testid='text']").textContent).toBe('Added');
    });

    it('should render unliked button', () => {
      act(() => {
        render(<FavoriteButton />, container);
      });

      expect(container.querySelector("[data-testid='unliked-icon']")).toBeDefined();
      expect(container.querySelector("[data-testid='liked-icon']")).toBeNull();

      expect(container.querySelector("[data-testid='text']").textContent).toBe('Add to favourites');
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot active', () => {
      act(() => {
        render(<FavoriteButton active={true} />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot not active', () => {
      act(() => {
        render(<FavoriteButton />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
