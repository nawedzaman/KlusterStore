import React, { useState, useEffect } from "react";
import Author from "./Author";
import bookData from "../data/book-data.json";
import "./Author.css";
const AuthorsPage = () => {
  const [authorsData, setAuthorsData] = useState([]);

  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    const uniqueAuthors = new Map(); // Use a Map to store unique authors by name

    bookData.forEach((book) => {
      const authorName = book.author.name;
      const authorImage = book.author.image;

      if (!uniqueAuthors.has(authorName)) {
        uniqueAuthors.set(authorName, { name: authorName, image: authorImage });
      }
    });

    // Extract unique author data from the Map
    const authors = Array.from(uniqueAuthors.values());
    setAuthorsData(authors);
  }, []);
  const handleAuthorClick = (event) => {
    console.log(event.target.textContent)
    setSelectedAuthor(event.target.textContent);
  };
  const getBooksByAuthor = (author) => {
    return bookData.filter((book) => book.author.name === author);
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
          {selectedAuthor ? (
            <ul>
              {getBooksByAuthor(selectedAuthor).map((book, i) => (
                <li key={i}>{book.title}</li>
              ))}
            </ul>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default AuthorsPage;
