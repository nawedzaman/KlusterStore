import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p>{book.genre}</p>
    </div>
  );
};

export default Book;