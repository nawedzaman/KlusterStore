import React, { useState, useEffect } from "react";
import bookData from "../data/book-data.json";
import Book from "./Book";
import BookFilter from "./BookFilter";
import "./Book.css";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    genres: [],
    authors: [],
  });
  console.log(bookData);
  // Fetch the list of books from the backend API
  useEffect(() => {
    setBooks(bookData);
  }, []);

  // Handle filter changes
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  // Get the filtered list of books
  const filteredBooks = books.filter((book) => {
    const genreMatch =
      filters.genres.length === 0 || filters.genres.includes(book.genre);
    const authorMatch =
      filters.authors.length === 0 ||
      filters.authors.includes(book.author.name);

    return genreMatch && authorMatch;
  });
  console.log(books);
  return (
    <div className="books-container">
      <div className="books-page">
        <h1>Books</h1>
        <div className="book-content">
          <BookFilter
            books={books}
            filters={filters}
            onChange={handleFilterChange}
          />

          {books === null ? (
            <h1>Loading...</h1>
          ) : (
            <div className="book-list">
              {filteredBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
