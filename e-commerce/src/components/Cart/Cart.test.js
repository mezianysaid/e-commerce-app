import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';

describe('<Cart />', () => {
  test('it should mount', () => {
    render(<Cart />);
    
    const cart = screen.getByTestId('Cart');

    expect(cart).toBeInTheDocument();
  });
});