import React from 'react';
import Card from '../Card';
import { useDirectory } from '../DirectoryProvider';
import ShowDirectory from '../ShowDirectory/ShowDirectory';

const App = () => {
  const { cards, dispatch } = useDirectory();

  return (
    <div className="app">
      <header>
        <ShowDirectory dispatch={dispatch} />
        <button className="saveScript">SAVE SCRIPT</button>
      </header>
      <div className="cards">
        {cards.map((cardProps, index) => (
          <Card
            {...cardProps}
            key={Math.floor(Math.random() * (index + 1) * 10000000000)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
