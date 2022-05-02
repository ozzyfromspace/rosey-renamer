import React from 'react';
import Card from '../Card';
import { useDirectory } from '../DirectoryProvider';

const App = () => {
  const {} = useDirectory();

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
