import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search_result_component.css';

function Search_result_component() {
    const location = useLocation();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Check if location state exists and has books data
        if (location.state && location.state.books) {
            setBooks(location.state.books);
            setQuery(location.state.query); // Set the search query
        }
    }, [location.state]);

    const handleBookClick = (bookId) => {
        // Navigate to book info page with book ID
        navigate(`/book-info/${bookId}`);
    };

    const handleBack = () => {
        window.history.back(); // Go back to previous route
    };

    return (
        <div className="search-result">
            {/* Show number of results and the search query */}
            <h2 className="search-result-count">Here's what we have!</h2>
            <div className="grid-container">
                {books.map((book, index) => (
                    <div key={index} className='grid-item' onClick={() => handleBookClick(book.id)}>
                        <img src={book.thumbnail} alt={`Cover of ${book.title}`} className='book-cover' />
                        <div className='book-info'>
                            <h4 className='book-title-style'>{book.title}</h4>
                            <p className='book-author-style'>by {book.authors}</p>
                            <p className='book-availability-style'>{book.availability}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="back-button" onClick={handleBack}>Back</button>
        </div>       
    );
}

export default Search_result_component;