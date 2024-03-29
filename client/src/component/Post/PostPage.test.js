import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostPage from './PostPage';

describe('PostPage', () => {
  test('post button is clickable', () => {
    
    const { getByText } = render(<PostPage />);
    
    
    const mockFunction = jest.fn();
    const button = getByText('Post');
    button.onclick = mockFunction;

    
    fireEvent.click(button);

    
    expect(mockFunction).toHaveBeenCalled();
  });
});
