import React, { useContext } from 'react';
import { SearchContext } from '../../store/searchContext';
import Search from '../Search';

const Header = () => {
  const searchContext = useContext(SearchContext);
  return (
    <header className="main-header">
      <div>
        <span>Brightweel Frontend test</span>
      </div>
      <div>
        <Search />
      </div>
      <div>
        STARRED RESULTS:
        {' '}
        {searchContext.starred}
        {' '}
      </div>
    </header>
  );
};

export default Header;
