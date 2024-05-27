import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search_result_component.css';

function Search_result_component() {
    const location = useLocation();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    React.useEffect(() => {
        if (location.state && location.state.books) {
            setBooks(location.state.books);
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
            <div className="search-result-bar">
                <div className="logos-searchresult-container">
                    <img className="brown-logo-only-style" src='brown-logo-only.png' alt="LibroLink Logo" />
                    <img className="brown-logo-text-only-style" src='brown-logo-text-only.png' alt="LibroLink Logo" />
                </div>

                <div className='grid-container'>
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
        </div>
    );
}

export default Search_result_component;
