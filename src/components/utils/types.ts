export interface ImageData {
  imageSrc: string;
  imageAlt: string;
  originalName: string;
  currentName: string;
}

export interface CardProps {
  imageData: ImageData;
  isLocked: boolean;
  isEditMode: boolean;
  onEditStart: () => void;
  onEditEnd: () => void;
}

export interface DirectoryProps {
  children: React.ReactNode;
}

export interface DirectoryState {
  value: null;
}

export enum DirectoryTypeEnum {
  someKey = 'some value',
}

export type DirectoryAction = {
  type: DirectoryTypeEnum.someKey;
  payload: 'hi';
};

export type DirectoryReducer = (
  state: DirectoryState,
  action: DirectoryAction
) => DirectoryState;
