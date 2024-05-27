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
                    thumbnail: book.volumeInfo.imageLinks?.thumbnail,
                    authors: book.volumeInfo.authors || ['Unknown Author'],
                    availability: book.saleInfo.saleability === 'FOR_SALE' ? 'Available' : 'Not Available'
                }));
                console.log(firstTenBooks); // Log the first ten results
                setBooks(firstTenBooks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchBooks();
    }, []);

    //for new releases, ang above function is to get the first 10 books
    //as in recently uploaded, but di guro ganun ka relevant sa person 
    //but still ehe
    return (
        <>
        <div className='new-release-style'>
            <div className='new-release-style-caption'> 
                <h3>New Releases</h3>
            </div>
        </div>
    </>
    );
}

export default New_Release;
