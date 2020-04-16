import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Blockquote from '../';

describe('Blockquote Component', () => {
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
        render(<Blockquote title="Plot" />, container);
      });
    });

    it('should render with text', () => {
      act(() => {
        render(<Blockquote title="Plot" text="Hello World!" />, container);
      });

      expect(container.querySelector("[data-testid='title']").textContent).toBeDefined();
      expect(container.querySelector("[data-testid='title']").textContent).toBe('Plot');

      expect(container.querySelector("[data-testid='text']").textContent).toBeDefined();
      expect(container.querySelector("[data-testid='text']").textContent).toBe('Hello World!');

      expect(container.querySelector("[data-testid='list']")).toBeNull();
    });

    it('should render with list', () => {
      act(() => {
        render(<Blockquote title="Directors" list={['Darwin', 'Rafael']} />, container);
      });

      expect(container.querySelector("[data-testid='title']").textContent).toBeDefined();
      expect(container.querySelector("[data-testid='title']").textContent).toBe('Directors');

      expect(container.querySelector("[data-testid='list']")).toBeDefined();
      expect(container.querySelector("[data-testid='list']").children).toHaveLength(2);

      expect(container.querySelector("[data-testid='text']")).toBeNull();
    });
  });

  describe('Snapshot', () => {
    it('should match snapshot with text', () => {
      act(() => {
        render(<Blockquote title="Plot" text="Hello World!" />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });

    it('should match snapshot with list', () => {
      act(() => {
        render(<Blockquote title="Directors" list={['Darwin', 'Rafael']} />, container);
      });

      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
