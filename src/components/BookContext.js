import React, { useState, createContext } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const selectBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <BookContext.Provider value={{ selectedBook, selectBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
