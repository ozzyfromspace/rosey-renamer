import React from 'react';
import Card from '../Card';

const App = () => {
  return (
    <div className="app">
      <header>
        <button className="showDirectory">SHOW DIRECTORY</button>
        <button className="saveScript">SAVE SCRIPT</button>
      </header>

      <Card />
    </div>
  );
};

export default App;
