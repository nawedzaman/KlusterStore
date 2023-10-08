import React from "react";
import Book from "./Book";
const Modal = ({ isOpen, onRequestClose, author, books }) => {
    console.log(books);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Books by {author}</h2>
              <button onClick={onRequestClose} className="close-button">
                Close
              </button>
            </div>
            <div className="modal-content">
              
                {books.map((book) => (
                 <Book  key={book.id} book={book}/>
                ))}
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
