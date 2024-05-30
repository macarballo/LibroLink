import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./new_release.css";

function New_Release() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=orderBy=newest"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data: " + response.status);
        }
        const data = await response.json();
        const firstTenBooks = data.items.slice(0, 10).map((book) => ({
          id: book.id,
          title: book.volumeInfo.title,
          thumbnail:
            book.volumeInfo.imageLinks?.thumbnail ||
            "placeholder-image-url.jpg",
          authors: book.volumeInfo.authors.join(", ") || "Unknown Author",
          availability:
            book.saleInfo.saleability === "FOR_SALE"
              ? "Available"
              : "Not Available",
        }));
        setBooks(firstTenBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBooks();
  }, []);
  const handleBookClick = (bookId) => {
    // Navigate to book info page with book ID
    navigate(`/book-info/${bookId}`);
  };

  return (
    <div className="new-release-container">
      <h3 className="new-release-style-caption"><br></br>New Releases</h3>
      <div className="grid-container">
        {books.map((book, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleBookClick(book.id)}
          >
            <img
              src={book.thumbnail}
              alt={`Cover of ${book.title}`}
              className="book-cover"
            />
            <div className="book-info">
              <h4 className="book-title-style">{book.title}</h4>
              <p className="book-author-style">by {book.authors}</p>
              <p className="book-availability-style">{book.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New_Release;
