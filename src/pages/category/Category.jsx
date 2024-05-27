import { useState } from 'react';
import './category.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Categories from '../../components/categories/Categories';

function Category() {
  return (
    <div>
      <Header/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default Category;