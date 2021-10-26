import Axios from 'axios';

const doSearch = async (query) => {
  try {
    const response = await Axios.get(`http://localhost:3001/search?name_like=${query}&_limit=10`);
    return response.data;
  } catch (error) {
    console.log('There was an error while searching: ', error);
    return [];
  }
};

const setStarred = async (item) => {
  try {
    const response = await Axios.patch(`http://localhost:3001/search/${item.id}`, item, { 'Content-Type': 'application/json' });
    return response.data;
  } catch (error) {
    console.log('There was an error while setting starred', error);
  }
  return null;
};

const getAllStarred = async () => {
  try {
    const response = await Axios.get('http://localhost:3001/search?starred=true');
    return response.data;
  } catch (error) {
    console.log('there was an error while fetching all starred', error);
    return null;
  }
};

export default {
  doSearch,
  setStarred,
  getAllStarred,
};
