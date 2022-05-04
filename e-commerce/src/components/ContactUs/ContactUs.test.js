import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactUs from './ContactUs';

describe('<ContactUs />', () => {
  test('it should mount', () => {
    render(<ContactUs />);
    
    const contactUs = screen.getByTestId('ContactUs');

    expect(contactUs).toBeInTheDocument();
  });
});