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
  GET_IMAGE_HANDLES = 'GET_IMAGE_HANDLES',
}

export type DirectoryAction = {
  type: DirectoryTypeEnum.GET_IMAGE_HANDLES;
  payload: { images: File[] };
};

export type DirectoryReducer = (
  state: DirectoryState,
  action: DirectoryAction
) => DirectoryState;

export interface ShowDirectoryProps {
  dispatch: DirectoryDispatch;
}
