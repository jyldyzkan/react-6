import React from 'react';
import {Route ,Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';


const App = () => {
  return (
      <>
        <Routes>
          <Route path={'/'} element = {<HomePage />} />
          <Route path={'/search'} element={<SearchPage/>} />
        </Routes>
      </>
  );
}

export default App;