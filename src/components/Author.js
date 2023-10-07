import React from 'react';

const Author = ({ author,onAuthorClick }) => {
  return (
    <div className="author-data" onClick={onAuthorClick}>
      <img src={author?.image} alt={author?.title} />
      <h3>{author.name}</h3>
    </div>
  );
};

export default Author;