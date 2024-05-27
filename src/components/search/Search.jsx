import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        const formattedQuery = query.split(' ').join('+');
        console.log(query);
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data: ' + response.status);
            }
            const data = await response.json();
            const results = data.items.map(book => ({
                title: book.volumeInfo.title,
                thumbnail: book.volumeInfo.imageLinks?.thumbnail,
                authors: book.volumeInfo.authors || ['Unknown Author'],
                availability: book.saleInfo.saleability === 'FOR_SALE' ? 'Available' : 'Not Available'
            }));
            console.log(results);
            navigate('/search-result', { state: { books: results } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div className="search">
            <div className="search-bar">
                <div className="logos-container">
                    <img className="brown-logo-only-style" src='brown-logo-only.png' alt="LibroLink Logo" />
                    <img className="brown-logo-text-only-style" src='brown-logo-text-only.png' alt="LibroLink Logo" />
                </div>

                <div className="search-bar-container">
                    <input type="text" placeholder="Search by Book Title / Author / Publisher / ISBN" className="search-input" value={query} onChange={handleInputChange}/>
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="search-title-container">
                <h1 className="search-title">
                    Elevating Community Library Management with Comprehensive Digital Integration
                </h1>
            </div>
        </div>
    );
}

export default Search;
