import React, { useState, useEffect } from 'react';
import './Book.css'
const BookFilter = ({ books, filters, onChange }) => {
  const [genreExpanded, setGenreExpanded] = useState(false);
  const [authorExpanded, setAuthorExpanded] = useState(false);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [uniqueAuthors, setUniqueAuthors] = useState([]);

  useEffect(() => {
    // Extract unique genres and authors from bookData
    const genres = [...new Set(books.map(book => book.genre))];
    const authors = [...new Set(books.map(book => book.author.name))];
    setUniqueGenres(genres);
    setUniqueAuthors(authors);
  }, [books]);  

  const toggleGenre = () => {
    setGenreExpanded(prevExpanded => !prevExpanded);
  };

  const toggleAuthor = () => {
    setAuthorExpanded(prevExpanded => !prevExpanded);
  };

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    const updatedFilters = { ...filters };

    // Ensure the filter array exists for the given name
    updatedFilters[name] = updatedFilters[name] || [];

    if (checked) {
      // Add the value to the filter array
      updatedFilters[name] = [...updatedFilters[name], value];
    } else {
      // Remove the value from the filter array
      updatedFilters[name] = updatedFilters[name].filter(item => item !== value);
    }

    onChange(updatedFilters); // Use onChange to update filters
    console.log(updatedFilters)
  };

  return (
    <div className="sidebar">
      <h2>Refine by</h2>
      <ul>
        <li>
          Genre <button key="genreButton" onClick={toggleGenre}>{genreExpanded ? '-' : '+'}</button>
          {genreExpanded && (
            <ul className="genreMenu">
              {uniqueGenres.map((genre, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name="genres"
                      value={genre}
                      checked={(filters && filters.genres && filters.genres.includes(genre)) || false}
                      onChange={handleFilterChange}
                    />
                    {genre}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          Author <button key="authorButton" onClick={toggleAuthor}>{authorExpanded ? '-' : '+'}</button>
          {authorExpanded && (
            <ul className="authorMenu">
              {uniqueAuthors.map((author, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name="authors"
                      value={author}
                      checked={(filters && filters.authors && filters.authors.includes(author)) || false}
                      onChange={handleFilterChange}
                    />
                    {author}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default BookFilter;
