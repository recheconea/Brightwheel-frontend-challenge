import React, { createContext, useState, useEffect } from 'react';
import searchApiService from '../services/searchApi';

export const SearchContext = createContext({
  searchTerm: '',
  searchResults: [],
  setSearchTerm: () => {},
  setSearchResults: () => {},
  starred: 0,
  setStarred: () => {},
});

/* eslint-disable react/prop-types */
export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [starred, setStarred] = useState(0);

  useEffect(async () => {
    // do stuff
    const results = await searchApiService.doSearch(searchTerm);
    setSearchResults(results);
    const allStarred = await searchApiService.getAllStarred();
    setStarred(allStarred.length);
  }, [searchTerm]);

  const context = {
    searchTerm,
    searchResults,
    setSearchResults,
    setSearchTerm,
    starred,
    setStarred,
  };
  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
};
