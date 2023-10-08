import React from "react";
import "./Author.css";

const Author = ({ author, onAuthorClick }) => {
  const handleAuthorClick = () => {
    onAuthorClick(author);
  };
  return (
    <div className="author-card" onClick={handleAuthorClick}>
      <div className="author-image">
        <img src={author?.image} alt={author?.name} />
      </div>
      <div className="author-info">
        <h3>{author?.name}</h3>
        <p>{author?.description}</p>
      </div>
    </div>
  );
};

export default Author;
