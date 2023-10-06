import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./cartSlice";
import { BookContext } from "./BookContext";

const BookDetailsPage = () => {
  const { selectedBook } = useContext(BookContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (selectedBook) => {
    dispatch(addItemToCart(selectedBook));
    setAddedToCart(true);
  };

  if (!selectedBook) {
    return null;
  }

  const { title, author, genre, description, coverImage } = selectedBook;

  return (
    <div className="book-details">
      <img src={coverImage} alt={title} />
      <h2>Title: {title}</h2>
      <h3>Author: {author.name}</h3>
      <p>Genre: {genre}</p>
      <p>Description: {description}</p>

      {addedToCart || cart.some((item) => item.id === selectedBook.id) ? (
        <Link to="/cart">Go to Cart</Link>
      ) : (
        <button onClick={() => handleAddToCart(selectedBook)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default BookDetailsPage;
