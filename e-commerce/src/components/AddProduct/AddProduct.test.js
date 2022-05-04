import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddProduct from './AddProduct';

describe('<AddProduct />', () => {
  test('it should mount', () => {
    render(<AddProduct />);
    
    const addProduct = screen.getByTestId('AddProduct');

    expect(addProduct).toBeInTheDocument();
  });
});