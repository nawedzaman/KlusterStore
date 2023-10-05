import React, { useState, useEffect } from "react";
import Author from "./Author";
import bookData from "../data/book-data.json";

const AuthorsPage = () => {
  const [authorsData, setAuthorsData] = useState([]);

  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    const authors = [...new Set(bookData.map((book) => book.author.name))];
    setAuthorsData(authors);
  }, []);
  const handleAuthorClick = (event) => {
    setSelectedAuthor(event.target.textContent);
  };
  const getBooksByAuthor = (author) => {
    return bookData.filter(book => book.author.name === author);
  };
  return (
    <>
      <div>
        <h1>Authors</h1>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h2>All Authors</h2>
            {authorsData === null ? (
              <h1>Loading...</h1>
            ) : (
              authorsData.map((author) => (
                <Author
                  key={author.index}
                  author={author}
                  onAuthorClick={handleAuthorClick}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div>
       <ul>
       {selectedAuthor?<ul>
                          {getBooksByAuthor(selectedAuthor).map((book, i) => (
                            <li key={i}>{book.title}</li>
                          ))}
                        </ul>:null}
        </ul> 
      </div>
    </>
  );
};

export default AuthorsPage;
