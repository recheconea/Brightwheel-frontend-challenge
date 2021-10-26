import React, { useState, useContext } from 'react';
import { SearchContext } from '../../store/searchContext';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchContext = useContext(SearchContext);

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      searchContext.setSearchTerm(event.target.value);
    }
  };
  return (
    <div className="search-bar">
      <input type="text" value={searchTerm} placeholder="Search..." onChange={handleTermChange} />
    </div>
  );
};

export default Search;
