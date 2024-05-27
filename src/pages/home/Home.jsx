import { useState } from 'react';
import Header from '../../components/header/Header';
import './home.css';
import Search from '../../components/search/Search';
import Interests from '../../components/interests/Interests';
import New_Release from '../../components/new_release/New_Release';

function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <Interests/>
      <New_Release/>
    </div>
  );
}

export default Home;

