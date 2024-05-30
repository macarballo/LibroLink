import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import './book_info.css';

function Book_info() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stripHTMLTags = (str) => {
    if (!str) return '';
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBookDetails({
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors || ['Unknown Author'],
          description: stripHTMLTags(data.volumeInfo.description) || 'No description available',
          thumbnail: data.volumeInfo.imageLinks?.thumbnail,
          categories: data.volumeInfo.categories || ['Unknown Category'],
          pageCount: data.volumeInfo.pageCount,
          publisher: data.volumeInfo.publisher,
          publishedDate: data.volumeInfo.publishedDate,
          language: data.volumeInfo.language,
          previewLink: data.volumeInfo.previewLink,
          buyLink: data.saleInfo.buyLink
        });
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Failed to load book details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="book-details">
        <img src={bookDetails.thumbnail} alt={`Cover of ${bookDetails.title}`} />
        <h2>{bookDetails.title}</h2>
        <p>Authors: {bookDetails.authors.join(', ')}</p>
        <p className="description">Description: {bookDetails.description}</p>
        <p>Categories: {bookDetails.categories.join(', ')}</p>
        <p>Page Count: {bookDetails.pageCount}</p>
        <p>Publisher: {bookDetails.publisher}</p>
        <p>Published Date: {bookDetails.publishedDate}</p>
        <p>Language: {bookDetails.language}</p>
        <div className="button-container">
          {bookDetails.previewLink && 
            <a href={bookDetails.previewLink} target="_blank" rel="noopener noreferrer" className="button preview">Preview</a>}
          {bookDetails.buyLink && 
            <a href={bookDetails.buyLink} target="_blank" rel="noopener noreferrer" className="button">Buy</a>}
        </div>
      </div>
    </div>
  );
}

export default Book_info;
