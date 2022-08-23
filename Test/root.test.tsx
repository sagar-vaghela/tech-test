import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

describe('root file render', () => {
    let container:any = null;

    beforeEach(() => {
      container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
    });
  
    test('should pass', () => {
      act(() => {
        require('../src/index');
      });

      expect(container.textContent).toBe('root');
      
    });
  });
