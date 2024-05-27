import React from 'react';
import './search.css';

function Search() {
    return (
        <>
        <div className="search">
            <div className="search-bar">
                <div className="logos-container">
                    <img className="brown-logo-only-style" src='brown-logo-only.png' alt="LibroLink Logo" />
                    <img className="brown-logo-text-only-style" src='brown-logo-text-only.png' alt="LibroLink Logo" />
                </div>

                <div className="search-bar-container">
                    <input type="text" placeholder="Search by Book Title / Author / Publisher / ISBN" className="search-input"/>
                    <button className="search-button">Search</button>
                </div>
                
            </div>
            
            <div className="search-title-container">
                <h1 className="search-title">
                    Elevating Community Library Management with Comprehensive Digital Integration
                </h1>
            </div>
            
        </div>
        </>
    );
}

export default Search;
