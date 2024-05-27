import Header from '../../components/header/Header';
import './book_info.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Book_info() {
  const { bookId } = useParams();
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const data = await response.json();
                console.log('Book details:', data); // Log the book details to console

                // Update state with book details
                setBookDetails({
                    title: data.volumeInfo.title,
                    authors: data.volumeInfo.authors || ['Unknown Author'],
                    description: data.volumeInfo.description || 'No description available',
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
            }
        };

        fetchBookDetails();
    }, [bookId]);

    if (!bookDetails) {
        return <div>Loading...</div>;
    }
  return (
    <div>
      <Header/>
      <div className="book-details">
            <img src={bookDetails.thumbnail} alt={`Cover of ${bookDetails.title}`} />
            <h2>{bookDetails.title}</h2>
            <p>Authors: {bookDetails.authors.join(', ')}</p>
            <p>Description: {bookDetails.description}</p>
            <p>Categories: {bookDetails.categories.join(', ')}</p>
            <p>Page Count: {bookDetails.pageCount}</p>
            <p>Publisher: {bookDetails.publisher}</p>
            <p>Published Date: {bookDetails.publishedDate}</p>
            <p>Language: {bookDetails.language}</p>
            <p><a href={bookDetails.previewLink} target="_blank" rel="noopener noreferrer">Preview</a></p>
            <p><a href={bookDetails.buyLink} target="_blank" rel="noopener noreferrer">Buy</a></p>
        </div>
    </div>
    
  );
}

export default  Book_info;

