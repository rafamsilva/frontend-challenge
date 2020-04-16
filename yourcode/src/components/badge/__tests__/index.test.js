import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Badge from '../';
import { ReactComponent as ImdbLogo } from '../../../assets/images/logo-imdb.svg';

describe('Badge Component', () => {
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

  it('should render without crashing', () => {
    act(() => {
      render(<Badge value="10" />, container);
    });
  });

  it('should render without an icon', () => {
    act(() => {
      render(<Badge value="10" />, container);
    });

    expect(container.querySelector("[data-testid='icon']")).toBeNull();
    expect(container.querySelector("[data-testid='text']").textContent).toBe('10');
  });

  it('should render with an icon', () => {
    act(() => {
      render(<Badge value="10" icon={<ImdbLogo alt="IMDB Logo" title="IMDB Logo" />} />, container);
    });

    expect(container.querySelector("[data-testid='icon']")).toBeTruthy();
    expect(container.querySelector("[data-testid='text']").textContent).toBe('10');
  });

  describe('Should match snapshot', () => {
    it('should match snapshot without icon', () => {
      act(() => {
        render(<Badge value="10" />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot with icon', () => {
      act(() => {
        render(<Badge value="10" icon={<ImdbLogo alt="IMDB Logo" title="IMDB Logo" />} />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
