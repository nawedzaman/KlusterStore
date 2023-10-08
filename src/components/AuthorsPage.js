import React, { useState, useEffect } from "react";
import Author from "./Author";
import bookData from "../data/book-data.json";
import Book from "./Book";
import Modal from "react-modal";
import "./Author.css";
const AuthorsPage = () => {
  const [authorsData, setAuthorsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    const uniqueAuthors = new Map(); // Use a Map to store unique authors by name

    bookData.forEach((book) => {
      const authorName = book.author.name;
      const authorImage = book.author.image;
      const autthorDesc = book.author.description;

      if (!uniqueAuthors.has(authorName)) {
        uniqueAuthors.set(authorName, {
          name: authorName,
          image: authorImage,
          description: autthorDesc,
        });
      }
    });

    // Extract unique author data from the Map
    const authors = Array.from(uniqueAuthors.values());
    setAuthorsData(authors);
  }, []);
  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setIsModalOpen(true);
  };
  const getBooksByAuthor = (author) => {
    return bookData.filter((book) => book.author.name === author);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAuthor(null);
  };
  return (
    <>
      <div className="author-container">
        <h1>Authors</h1>
        <div className="author-list">
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
         <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Books Modal"
      className="modal-content" 
      overlayClassName="modal-overlay"
    >
      {selectedAuthor && (
        <>
          <div className="modal-header">
            {/* <h3>Books by {selectedAuthor.name}</h3> */}
            <button onClick={closeModal} className="close-button">
              &#215;
            </button>
          </div>
          <ul>
            {getBooksByAuthor(selectedAuthor.name).map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ul>
        </>
      )}
    </Modal>
    </>
  );
};

export default AuthorsPage;
