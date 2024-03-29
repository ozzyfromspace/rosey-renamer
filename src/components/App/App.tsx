import React from 'react';
import BaseName from '../BaseName';
import Cards from '../Cards/Cards';
import DirectoryProvider from '../DirectoryProvider';
import SaveScript from '../SaveScript';
import ShowDirectory from '../ShowDirectory/ShowDirectory';

const App = () => {
  return (
    <div className="app">
      <DirectoryProvider>
        <header><div style={{marginBottom: '0.5rem'}}>Remember, click, not drag.</div>
          <ShowDirectory />
          <SaveScript />
          <BaseName />
        </header>
        <Cards />
      </DirectoryProvider>
    </div>
  );
};

export default App;
