import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemCart from './ItemCart';

describe('<ItemCart />', () => {
  test('it should mount', () => {
    render(<ItemCart />);
    
    const itemCart = screen.getByTestId('ItemCart');

    expect(itemCart).toBeInTheDocument();
  });
});