import React, { useContext } from 'react';
import { BookContext } from './BookContext';  

const BookDetailsPage = () => {
  const { selectedBook } = useContext(BookContext);  

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
    </div>
  );
};

export default BookDetailsPage;