import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('decrease price when handleDecreasePrice is called', () => {
  render(<Counter />);
  
  // Get the decrease button
  const decreaseButton = screen.getByText(/decrease/i);
  
  // Get the price element
  const priceElement = screen.getByTestId('price');
  
  // Get the initial price value
  const initialPrice = parseInt(priceElement.textContent);
  
  // Click the decrease button
  fireEvent.click(decreaseButton);
  
  // Get the updated price value
  const updatedPrice = parseInt(priceElement.textContent);
  
  // Assert that the price has decreased by 1
  expect(updatedPrice).toBe(initialPrice - 1);
});

test('show error message when price is already 0', () => {
  render(<Counter />);
  
  // Set the price to 0
  const priceElement = screen.getByTestId('price');
  priceElement.textContent = '0';
  
  // Get the decrease button
  const decreaseButton = screen.getByText(/decrease/i);
  
  // Click the decrease button
  fireEvent.click(decreaseButton);
  
  // Get the error message element
  const errorMessageElement = screen.getByText(/không thể giảm nữa/i);
  
  // Assert that the error message is displayed
  expect(errorMessageElement).toBeInTheDocument();
});