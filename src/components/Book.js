import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext'; 

const Book = ({ book }) => {
  const { selectBook } = useContext(BookContext);
  return (
    <div className="book">
      <img src={book?.coverImage} alt={book?.title} />
      <h3>{book?.title}</h3>
      <h4>{book?.author?.name}</h4>
      <p>{book?.genre}</p>
      <Link to={`/book/${encodeURIComponent(book.title)}`} onClick={() => selectBook(book)}>
            View Details
          </Link>
    </div>
  );
};

export default Book;