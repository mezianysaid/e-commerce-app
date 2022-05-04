import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductInfo from './ProductInfo';

describe('<ProductInfo />', () => {
  test('it should mount', () => {
    render(<ProductInfo />);
    
    const productInfo = screen.getByTestId('ProductInfo');

    expect(productInfo).toBeInTheDocument();
  });
});