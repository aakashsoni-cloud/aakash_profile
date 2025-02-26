import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TicTacToe from './index';

describe('TicTacToe Component', () => {
  test('initial state', () => {
    const { getByText } = render(<TicTacToe />);
    expect(getByText(/Player turn:  X/i)).toBeInTheDocument();
  });

  test('player toggle', () => {
    const { getByText } = render(<TicTacToe />);
    const playerTurn = getByText(/Player turn:  X/i);
    fireEvent.click(playerTurn);
    expect(getByText(/Player turn:  O/i)).toBeInTheDocument();
  });

  test('reset functionality', () => {
    const { getByText } = render(<TicTacToe />);
    fireEvent.click(getByText(/Reset/i));
    expect(getByText(/Player turn:  X/i)).toBeInTheDocument();
  });

  test('board size', () => {
    const { container } = render(<TicTacToe size={4} />);
    expect(container.querySelectorAll('.board-row').length).toBe(4);
  });
});
