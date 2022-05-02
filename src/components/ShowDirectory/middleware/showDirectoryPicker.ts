import { CardProps } from '../../utils/types';

const showDirectoryPicker = async (): Promise<CardProps[] | null> => {
  const pickerFn = (window as any).showDirectoryPicker as unknown;

  if (typeof pickerFn === 'function') {
    try {
      const dirHandle = await pickerFn();

      for await (const imageHandle of dirHandle.values()) {
        console.log(imageHandle);
      }

      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return [];
};

export default showDirectoryPicker;
