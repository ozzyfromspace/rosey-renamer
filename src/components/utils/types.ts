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
}

export interface DirectoryProps {
  children: React.ReactNode;
}

export type DirectoryDispatch = React.Dispatch<DirectoryAction>;

export type DirectoryState = CardProps[];

export interface DirectoryProviderValue {
  cards: CardProps[];
  dispatch: DirectoryDispatch;
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
