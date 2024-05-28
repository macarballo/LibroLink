import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './categories.css';
import Footer from '../footer/Footer';

function Categories() {
    const navigate = useNavigate();
    const location = useLocation();
    const categories = [
        { key: 'newReleases', query: 'orderBy=newest' },
        { key: 'fiction', query: 'subject:fiction&orderBy=newest' },
        { key: 'cookbooks', query: 'subject:cookbooks&orderBy=newest' },
        { key: 'children', query: 'subject:children&orderBy=newest' },
        { key: 'nonFiction', query: 'subject:nonfiction' },
        { key: 'science', query: 'subject:science' },
        { key: 'mathematics', query: 'subject:mathematics' },
        { key: 'history', query: 'subject:history' },
        { key: 'biography', query: 'subject:biography' },
        { key: 'thriller', query: 'subject:thriller' },
        { key: 'fantasy', query: 'subject:fantasy' },
        { key: 'romance', query: 'subject:romance' },
        { key: 'mystery', query: 'subject:mystery' },
        { key: 'selfHelp', query: 'subject:self-help' },
        { key: 'health', query: 'subject:health' },
        { key: 'scienceFiction', query: 'subject:science-fiction' },
        { key: 'business', query: 'subject:business' }
    ];
    
    const [booksByCategory, setBooksByCategory] = useState({});

    useEffect(() => {
        async function fetchBooks() {
            for (const category of categories) {
                try {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category.query}&maxResults=10`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${category.key}: ${response.status}`);
                    }
                    const data = await response.json();
                    const formattedBooks = data.items.map(book => ({
                        id: book.id,
                        title: book.volumeInfo.title,
                        thumbnail: book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url.jpg',
                        authors: book.volumeInfo.authors?.join(', ') || 'Unknown Author',
                        availability: book.saleInfo.saleability === 'FOR_SALE' ? 'Available' : 'Not Available'
                    }));
                    setBooksByCategory(prev => ({ ...prev, [category.key]: formattedBooks }));
                } catch (error) {
                    console.error('Error fetching books:', error);
                }
            }

            const hash = location.hash.replace('#', '');
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1000);
            }
        }
        fetchBooks();
    }, [location.hash]);

    return (
        <div className='categories-container'>
            {categories.map(category => (
                <Section key={category.key} title={toTitleCase(category.key.replace(/([A-Z])/g, ' $1').trim())} books={booksByCategory[category.key] || []} navigate={navigate} />
            ))}
            <Footer/>
        </div>
    );
}

function Section({ title, books, navigate }) {
    const handleBookClick = (bookId) => {
        navigate(`/book-info/${bookId}`);
    };

    return (
        <div id={title.toLowerCase()} className='categories-section-container'>
            <h3 className='categories-style-caption'>{title}</h3>
            <div className='categories-grid-container'>
                {books.map((book, index) => (
                    <div key={index} className='categories-grid-item' onClick={() => handleBookClick(book.id)}>
                        <img src={book.thumbnail} alt={`Cover of ${book.title}`} className='categories-book-cover' />
                        <div className='categories-book-info'>
                            <h4>{book.title}</h4>
                            <p>by {book.authors}</p>
                            <p>{book.availability}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default Categories;