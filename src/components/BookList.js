import React from 'react';

const BookList = (props) => {
  const { books } = props;



  return (
    <ul>
      {books.map((book) => (
        <li key={book?.id}>
          <h3>{book?.title}</h3>
          <h4>{book?.author}</h4>
          <p>{book?.genre}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;