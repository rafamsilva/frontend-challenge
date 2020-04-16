import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import { store } from '../../../store';

import Header from '../';

describe('Header Component', () => {
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
        render(
          <Router>
            <Header showSearchBar={false} />
          </Router>,
          container,
        );
      });
    });

    it('should render without search bar', () => {
      act(() => {
        render(
          <Router>
            <Header showSearchBar={false} />
          </Router>,
          container,
        );
      });

      expect(container.querySelector("[data-testid='search-bar']")).toBeNull();
    });

    it('should render with search bar', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Router>
              <Header showSearchBar={true} />
            </Router>
          </Provider>,
          container,
        );
      });

      expect(container.querySelector("[data-testid='search-bar']")).toBeDefined();
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot without search bar', () => {
      act(() => {
        render(
          <Router>
            <Header showSearchBar={false} />
          </Router>,
          container,
        );
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot with search bar', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Router>
              <Header showSearchBar={true} />
            </Router>
          </Provider>,
          container,
        );
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
