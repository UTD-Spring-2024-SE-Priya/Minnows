import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostPage from './PostPage';

describe('PostPage', () => {
  test('post button is clickable', () => {
    // Render the PostPage component
    const { getByText } = render(<PostPage />);
    
    // Mock the function to be called on click
    const mockFunction = jest.fn();
    const button = getByText('Post');
    button.onclick = mockFunction;

    // Simulate a click event on the post button
    fireEvent.click(button);

    // Check if the mock function was called
    expect(mockFunction).toHaveBeenCalled();
  });
});
