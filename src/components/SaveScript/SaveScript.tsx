import React from 'react';
import { useDirectory } from "../DirectoryProvider";
import createScript from './middleware/createScript';

const SaveScript = () => {
  const { cards } = useDirectory();

  const handleSaveScript = async () => {
    const script = createScript(cards);

    console.log('script - ', script);

    const opts = {
      suggestedName: 'rename.sh',
      types: [{
        description: 'A script for renaming many images at once according to some user-defined order',
        accept: {'text/plain': ['.sh']},
      }],
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
  }

  return <button className="saveScript" onClick={handleSaveScript} >SAVE SCRIPT</button>;
};

export default SaveScript;
