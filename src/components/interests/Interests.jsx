import React from 'react';
import './interests.css'; 

function Interests() {
    return (
        <div className="interests-container">
            <div className="interests-caption">
                <h2>What interests you?</h2>
            </div>
            <div className="interests">
                <div className="interest-section">
                    <h3>Fiction Books</h3>
                    <div className="row-1"> 
                        <button className="interest-btn-style">Drama</button>
                        <button className="interest-btn-style">Horror</button>
                    </div>

                    <div className="row-2">
                        <button className="interest-btn-style">Mystery</button>
                        <button className="interest-btn-style">Sci-Fi</button>
                    </div>     
                </div>
                <div className="interest-section">
                    <h3>Non - Fiction Books</h3>
                    <div className="row-1">
                        <button className="interest-btn-style">Art</button>
                        <button className="interest-btn-style">Biography</button>
                    </div>
                    <div className="row-2">
                        <button className="interest-btn-style">Sports</button>
                        <button className="interest-btn-style">Travel</button>
                    </div>
                
                </div>
                <div className="interest-section">
                    <h3>Genres</h3>
                    <div className="row-1">
                        <button className="interest-btn-style">Blues</button>
                        <button className="interest-btn-style">Classical</button>
                        <button className="interest-btn-style">Folk</button>
                        <button className="interest-btn-style">Hip-Hop</button>
                    </div>
                    
                    <div className="row-2">
                        <button className="interest-btn-style">Rap</button>
                        <button className="interest-btn-style">Reggae</button>
                        <button className="interest-btn-style">Rock</button>
                        <button className="explore-button">Explore</button>
                    </div> 
                </div>
            </div>
            
        </div>
    );
}

export default Interests;
