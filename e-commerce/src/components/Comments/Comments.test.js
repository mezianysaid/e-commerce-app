import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from './Comments';

describe('<Comments />', () => {
  test('it should mount', () => {
    render(<Comments />);
    
    const comments = screen.getByTestId('Comments');

    expect(comments).toBeInTheDocument();
  });
});