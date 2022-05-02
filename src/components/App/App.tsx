import React from 'react';
import Cards from '../Cards/Cards';
import DirectoryProvider from '../DirectoryProvider';
import ShowDirectory from '../ShowDirectory/ShowDirectory';

const App = () => {
  return (
    <div className="app">
      <DirectoryProvider>
        <header>
          <ShowDirectory />
          <button className="saveScript">SAVE SCRIPT</button>
        </header>
        <Cards />
      </DirectoryProvider>
    </div>
  );
};

export default App;
