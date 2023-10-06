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

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button onClick={() => handleDecrement(book.id)}disabled={book.quantity === 1}>-</button>
            {getTotalBooksCount(book.id)}
            <button onClick={() => handleIncrement(book.id)}>+</button>
            <button onClick={() => handleRemoveFromCart(book.id)}>
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${total}</h3>
    </div>
  );
};

export default ShoppingCart;
