const showDirectoryPicker = async (): Promise<File[] | null> => {
  const pickerFn = (window as any).showDirectoryPicker as unknown;

  if (typeof pickerFn === 'function') {
    try {
      const dirHandle = await pickerFn({ startIn: 'documents' });
      const imagePromises: Promise<File>[] = [];

      for await (const imageHandle of dirHandle.values()) {
        const fileParts = imageHandle.name.split('.');

        if (fileParts.length === 1) continue;

        const fileExt = fileParts.pop().toLowerCase();

        const extensions = [
          'jpeg',
          'jpg',
          'webp',
          'png',
          'tif',
          'tiff',
          'bmp',
          'gif',
        ];

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
