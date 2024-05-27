import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Book_info from './pages/book_info/Book_info.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book-info" element={<Book_info/>} />
      </Routes>
    </Router>
  );
}

export default App;
