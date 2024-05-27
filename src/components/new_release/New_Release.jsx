import React, { useEffect, useState } from 'react';
import './new_release.css';

function New_Release() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(
                    'https://www.googleapis.com/books/v1/volumes?q=orderBy=newest'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data: ' + response.status);
                }
                const data = await response.json();
                const firstTenBooks = data.items.slice(0, 10).map(book => ({
                    title: book.volumeInfo.title,
                    thumbnail: book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url.jpg',
                    authors: book.volumeInfo.authors.join(', ') || 'Unknown Author',
                    availability: book.saleInfo.saleability === 'FOR_SALE' ? 'Available' : 'Not Available'
                }));
                setBooks(firstTenBooks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchBooks();
    }, []);

    return (
        <div className='new-release-container'>
            <h3 className='new-release-style-caption'>New Releases</h3>
            <div className='grid-container'>
                {books.map((book, index) => (
                    <div key={index} className='grid-item'>
                        <img src={book.thumbnail} alt={`Cover of ${book.title}`} className='book-cover' />
                        <div className='book-info'>
                            <h4 className='book-title-style'>{book.title}</h4>
                            <p className='book-author-style'>by {book.authors}</p>
                            <p className='book-availability-style'>{book.availability}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default New_Release;
