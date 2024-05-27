import { useState } from 'react';
import './search_result.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Search_result_component from '../../components/search_resut_component/Search_result_component';

function Search_result() {
  return (
    <div>
      <Header/>
      <Search_result_component/>
      <Footer/>
    </div>
  );
}

export default Search_result;