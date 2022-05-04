import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboar from './Dashboar';

describe('<Dashboar />', () => {
  test('it should mount', () => {
    render(<Dashboar />);
    
    const dashboar = screen.getByTestId('Dashboar');

    expect(dashboar).toBeInTheDocument();
  });
});