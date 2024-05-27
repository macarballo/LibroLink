import React from 'react';
import './header.css';

function Header() {
  return (
    <>
    <header className="header">
        <nav className="navigation">
            <a href="/">Home</a>
            <a href="#category">Category</a>
            <a href="#mybooks">My Books</a>
        </nav>
    </header>
    </>
  );
}

export default Header;
