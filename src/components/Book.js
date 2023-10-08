import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from './BookContext';
import './Book.css'; // Import the CSS file for styling

const Book = ({ book }) => {
  const { selectBook } = useContext(BookContext);

  const navigate = useNavigate();
  const routeChange = () => {
    selectBook(book);
    let path = `/book/${encodeURIComponent(book.title)}`;
    navigate(path, { state: { book } });
  };

  return (
    <div className="custom-card" onClick={routeChange}>
      <div className="custom-card-image">
        <img src={book?.coverImage} alt={book?.title} />
      </div>
      <div className="custom-card-details">
        <h3>{book?.title}</h3>
        <p>${book?.price}</p>
        <p>{book?.author?.name}</p>
        <p>{book?.genre}</p>
      </div>
    </div>
  );
};

export default Book;