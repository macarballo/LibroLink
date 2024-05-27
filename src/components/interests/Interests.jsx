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
                    <div className="row-1"> 
                        <button className="interest-btn-style">Fiction</button>
                        <button className="interest-btn-style">Non-Fiction</button>
                        <button className="interest-btn-style">Science</button>
                        <button className="interest-btn-style">History</button>
                        <button className="interest-btn-style">Biography</button>
                        <button className="interest-btn-style">Children</button>
                        <button className="interest-btn-style">Thriller</button>
                        <button className="interest-btn-style">Fantasy</button>
                    </div>

                    <div className="row-2">
                        <button className="interest-btn-style">Romance</button>
                        <button className="interest-btn-style">Mystery</button>
                        <button className="interest-btn-style">Self Help</button>
                        <button className="interest-btn-style">Health</button>
                        <button className="interest-btn-style">Cookbooks</button>
                        <button className="interest-btn-style">SciFi</button>
                        <button className="interest-btn-style">Business</button>
                    </div>     
                </div>
            </div>
            
        </div>
    );
}

export default Interests;
