import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Book_info from './pages/book_info/Book_info.jsx';
import Search_result_component from './components/search_resut_component/Search_result_component.jsx';
import Search from './components/search/Search.jsx';
import Categories from './components/categories/Categories.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-info/:bookId" element={<Book_info />} />
        <Route path="/search-result" element={<Search_result_component />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Categories/>} />
      </Routes>
    </Router>
  );
}

export default App;
