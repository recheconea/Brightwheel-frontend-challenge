import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import { SearchContextProvider } from './store/searchContext';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </SearchContextProvider>
    </div>
  );
}

export default App;
