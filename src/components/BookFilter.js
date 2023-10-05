import React from 'react';

const BookFilter = ({ filters, onChange }) => {
  return (
    <form className="book-filter">
      <input
        type="text"
        name="genre"
        placeholder="Filter by genre"
        value={filters.genre}
        onChange={onChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Filter by author"
        value={filters.author}
        onChange={onChange}
      />

      <button type="submit">Filter</button>
    </form>
  );
};

export default BookFilter;
