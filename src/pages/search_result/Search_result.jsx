import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Search_result_component from '../../components/search_result_component/Search_result_component';
import './search_result.css';

function Search_result() {
  return (
    <div className="search-result-page">
      <Header />
      <div className="search-result-content">
        <div className="search-title">Here's what we have!</div>
        <Search_result_component />
      </div>
      <Footer />
    </div>
  );
}

export default Search_result;
