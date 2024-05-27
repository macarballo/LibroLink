import React, {useState} from 'react';
import './search_result_component.css';

function Search_result_component() {
    return (
        <>
         <div className="search-result">
            <div className="search-result-bar">
                <div className="logos-searchresult-container">
                    <img className="brown-logo-only-style" src='brown-logo-only.png' alt="LibroLink Logo" />
                    <img className="brown-logo-text-only-style" src='brown-logo-text-only.png' alt="LibroLink Logo" />
                </div>

                <div className="search-bar-searchresult-container">
                    <input type="text" placeholder="Search by Book Title / Author / Publisher / ISBN" className="search-input"/>
                    <button className="search-button">Search</button>
                </div>
            </div>            
        </div>
        </>
    );
}

export default  Search_result_component;