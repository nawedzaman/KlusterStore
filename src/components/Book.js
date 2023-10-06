import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { BookContext } from './BookContext'; 

const Book = ({ book }) => {
  const { selectBook } = useContext(BookContext);

  const navigate = useNavigate();
  const routeChange = () => {
    selectBook(book)
    let path = `/book/${encodeURIComponent(book.title)}`;
    navigate(path, { state: { book } });
  };
  return (
    <div className="book" onClick={routeChange}>
      <img src={book?.coverImage} alt={book?.title} />
      <h3>{book?.title}</h3>
      <h3>${book?.price}</h3>
      <h4>{book?.author?.name}</h4>
      <p>{book?.genre}</p>
    </div>
  );
};

export default Book;