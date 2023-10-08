import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from "./cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeItemFromCart(bookId));
  };

  const handleIncrement = (bookId) => {
    dispatch(incrementQuantity(bookId));
  };

  const handleDecrement = (bookId) => {
    dispatch(decrementQuantity(bookId));
  };

  const getTotalBooksCount = (bookId) => {
    const book = cart.find((item) => item.id === bookId);
    return book ? book.quantity : 0;
  };

  const total = cart.reduce((acc, book) => acc + book.price * book.quantity, 0);

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, book) => {
      return total + book.price * book.quantity;
    }, 0);
    // Apply a 10% discount if the total price is greater than $100
    return totalPrice > 100 ? totalPrice * 0.9 : totalPrice;
  };

  const finalTotal = calculateTotalPrice(); // Calculate the final total after discount

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Your Cart</h2>
        {cart.length === 0 && <p> Cart is Empty </p>}
        <ul className="cart-list">
          {cart.map((book) => (
            <li key={book.id} className="cart-item">
              <div className="item-details">
                <span className="item-title">{book.title}</span>
                <span className="item-price">${book.price}</span>
              </div>
              <div className="item-actions">
                <button
                  onClick={() => handleDecrement(book.id)}
                  disabled={book.quantity === 1}
                >
                  -
                </button>
                {getTotalBooksCount(book.id)}
                <button onClick={() => handleIncrement(book.id)}>+</button>
                <button onClick={() => handleRemoveFromCart(book.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {cart?.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-total">
            <span>Total Price:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="discount-applied">
            <span>Discount Applied:</span>
            <span>
              {total.toFixed(2) !== finalTotal.toFixed(2)
                ? "-$" + (total - finalTotal).toFixed(2)
                : "$0.00"}
            </span>
          </div>
          <div className="final-total">
            <span>Final Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <div className="checkout-button-class">
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
