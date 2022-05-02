const showDirectoryPicker = async (): Promise<File[] | null> => {
  const pickerFn = (window as any).showDirectoryPicker as unknown;

  if (typeof pickerFn === 'function') {
    try {
      const dirHandle = await pickerFn();
      const imagePromises: Promise<File>[] = [];

      for await (const imageHandle of dirHandle.values()) {
        const filePart = imageHandle.name.split('.');
        const filePartLen = filePart.length;

        if (filePartLen === 1) continue;

        const fileExt = filePart[filePartLen - 1];

        const extensions = ['jpeg'];
        const isImage =
          imageHandle.kind === 'file' && extensions.includes(fileExt);

        if (isImage) {
          const imagePromise = imageHandle.getFile() as Promise<File>;
          imagePromises.push(imagePromise);
        }
      }

      const images = await Promise.all(imagePromises);
      return images;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
};

export default showDirectoryPicker;
