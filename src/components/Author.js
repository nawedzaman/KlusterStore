import React from 'react';

const Author = ({ author,onAuthorClick }) => {
  console.log(author)
  return (
    <div className="author" onClick={onAuthorClick}>
      <img src={author?.image} alt={author?.title} />
      <h3>{author.name}</h3>
    </div>
  );
};

export default Author;