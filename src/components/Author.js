import React from 'react';

const Author = ({ author,onAuthorClick }) => {
  return (
    <div className="book" onClick={onAuthorClick}>
      <img src={author?.coverImage} alt={author?.title} />
      <h3>{author?.name}</h3>
    </div>
  );
};

export default Author;