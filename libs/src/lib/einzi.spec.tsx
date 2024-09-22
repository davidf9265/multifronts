import { render } from '@testing-library/react';

import Einzi from './einzi';

describe('Einzi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Einzi />);
    expect(baseElement).toBeTruthy();
  });
});
