import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsList from './ProductsList';

describe('<ProductsList />', () => {
  test('it should mount', () => {
    render(<ProductsList />);
    
    const productsList = screen.getByTestId('ProductsList');

    expect(productsList).toBeInTheDocument();
  });
});