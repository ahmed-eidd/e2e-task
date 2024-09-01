import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartProvider, { cartContext } from './CartProvider';
import { Product } from './types';

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product',
  price: 100,
};

describe('CartProvider', () => {
  test('should initialize with an empty cart', () => {
    render(
      <CartProvider>
        <cartContext.Consumer>
          {(value) => <div data-testid="cart-length">{value.cart.length}</div>}
        </cartContext.Consumer>
      </CartProvider>,
    );
    const cartLength = screen.getByTestId('cart-length');
    expect(cartLength).toHaveTextContent('0');
  });

  test('should add a product to the cart', async () => {
    render(
      <CartProvider>
        <cartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart(mockProduct)}>Add</button>
              <div data-testid="cart-length">{value.cart.length}</div>
            </>
          )}
        </cartContext.Consumer>
      </CartProvider>,
    );
    const addButton = screen.getByText('Add');
    
    await act(async () => {
      addButton.click();
    });

    const cartLength = screen.getByTestId('cart-length');
    expect(cartLength).toHaveTextContent('1');
  });

  test('should remove a product from the cart', async () => {
    render(
      <CartProvider>
        <cartContext.Consumer>
          {(value) => (
            <>
              <button onClick={() => value.addToCart(mockProduct)}>Add</button>
              <button onClick={() => value.removeFromCart(mockProduct)}>
                Remove
              </button>
              <div data-testid="cart-length">{value.cart.length}</div>
            </>
          )}
        </cartContext.Consumer>
      </CartProvider>,
    );
    const addButton = screen.getByText('Add');
    const removeButton = screen.getByText('Remove');
    
    await act(async () => {
      addButton.click(); // Add the product
    });

    await act(async () => {
      removeButton.click(); // Remove the product
    });

    const cartLength = screen.getByTestId('cart-length');
    expect(cartLength).toHaveTextContent('0');
  });
});
