import React from 'react';
import { useDirectory } from '../DirectoryProvider';
import createScript from './middleware/createScript';

const SaveScript = () => {
  const { state } = useDirectory();

  const handleSaveScript = async () => {
    const script = createScript(state.cards, state.deletedCards);

    console.log('script - ', script);

    const opts = {
      suggestedName: 'rename.sh',
      types: [
        {
          description:
            'A script for renaming many images at once according to some user-defined order',
          accept: { 'text/plain': ['.sh'] },
        },
      ],
    };

    const saveFn = (window as any).showSaveFilePicker;

    if (saveFn === undefined) return;

    try {
      const scriptBlob = new Blob([script]);
      const scriptFileHandle = await saveFn(opts);

      const writer = await scriptFileHandle.createWritable();
      await writer.write(scriptBlob);
      await writer.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="saveScript" onClick={handleSaveScript}>
      SAVE SCRIPT
    </button>
  );
};

export default SaveScript;
