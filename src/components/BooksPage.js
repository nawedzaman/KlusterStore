import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookData from '../data/book-data.json';
import BookList from './BookList';
import BookFilter from './BookFilter';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    genre: '',
    author: '',
  });
console.log(bookData)
  // Fetch the list of books from the backend API
  useEffect(() => {
    setBooks(bookData);
  }, []);


  // Handle filter changes
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Get the filtered list of books
  const filteredBooks = books.filter((book) => {
    const genreMatch = filters.genre === '' || book.genre === filters.genre;
    const authorMatch = filters.author === '' || book.author === filters.author;

    return genreMatch && authorMatch;
  });
console.log(books)
  return (
   
    <div className="books-page">
      <h1>Books</h1>

      <BookFilter filters={filters} onChange={handleFilterChange} />
      
      {books===null ? (
        <h1>Loading...</h1>
      ) : (
       
         <BookList books={filteredBooks} />
      )} 
    </div>
  );
};

export default BooksPage;
