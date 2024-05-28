import React from 'react';
import { useNavigate } from 'react-router-dom';
import './interests.css'; 

function Interests() {
    const navigate = useNavigate();

    const handleInterestClick = (category) => {
        navigate(`/category#${category.toLowerCase()}`);
    };

    return (
        <div className="interests-container">
            <div className="interests-caption">
                <h2>What interests you?</h2>
            </div>
            <div className="interests">
                <div className="interest-section">
                    <div className="row-1">
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Fiction')}>Fiction</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Non-Fiction')}>Non-Fiction</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Science')}>Science</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('History')}>History</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Biography')}>Biography</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Children')}>Children</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Thriller')}>Thriller</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Fantasy')}>Fantasy</button>
                    </div>
                    <div className="row-2">
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Romance')}>Romance</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Mystery')}>Mystery</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Self Help')}>Self Help</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Health')}>Health</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Cookbooks')}>Cookbooks</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('SciFi')}>SciFi</button>
                        <button className="interest-btn-style" onClick={() => handleInterestClick('Business')}>Business</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;