import React, { useContext } from 'react';
import { SearchContext } from '../../store/searchContext';
import AnimalResultItem from '../AnimalResultItem';
import ProductResultItem from '../ProductResultItem';
import CompaniesResultItem from '../CompaniesResultItem';
import searchApiService from '../../services/searchApi';

const ResultsList = () => {
  const searchContext = useContext(SearchContext);

  const handleClick = (item, index) => {
    searchApiService.setStarred({ ...item, starred: !item.starred });
    const aux = [...searchContext.searchResults];
    aux[index] = { ...item, starred: !item.starred };
    searchContext.setSearchResults(aux);
    searchContext.setStarred(item.starred ? searchContext.starred - 1 : searchContext.starred + 1);
  };

  const renderItem = (item, index) => {
    switch (item.type) {
      case 'company':
        return (<CompaniesResultItem {...item} onClick={() => handleClick(item, index)} />);
      case 'product':
        return (<ProductResultItem {...item} onClick={() => handleClick(item, index)} />);
      case 'animal':
        return (<AnimalResultItem {...item} onClick={() => handleClick(item, index)} />);

      default:
        return null;
    }
  };
  return (
    <div className="results-list">
      <ul>
        {searchContext.searchResults.map((result, index) => (
          <li key={result.id}>{renderItem(result, index)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
