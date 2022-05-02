export interface ImageData {
  imageSrc: string;
  imageAlt: string;
  originalName: string;
  currentName: string;
}

export interface CardData {
  imageData: ImageData;
  isLocked: boolean;
  isEditMode: boolean;
  cardId: string;
  currentIndex: number | null;
}

export interface CardProps extends CardData {}

export interface DirectoryProps {
  children: React.ReactNode;
}

export type DirectoryDispatch = React.Dispatch<DirectoryAction>;

export type DirectoryState = CardData[];

export interface DirectoryProviderValue {
  cards: CardData[];
  dispatch: DirectoryDispatch;
}

export interface ReorderCardsPayload {
  destinationIndex: number;
  sourceIndex: number;
}

export interface ReorderCardsProps extends ReorderCardsPayload {
  cards: CardData[];
}

export enum DirectoryTypeEnum {
  GET_IMAGE_HANDLES = 'GET_IMAGE_HANDLES',
  REORDER_CARDS = 'REORDER_CARDS',
}

export type DirectoryAction =
  | {
      type: DirectoryTypeEnum.GET_IMAGE_HANDLES;
      payload: { images: File[] };
    }
  | {
      type: DirectoryTypeEnum.REORDER_CARDS;
      payload: ReorderCardsPayload;
    };

export type DirectoryReducer = (
  state: DirectoryState,
  action: DirectoryAction
) => DirectoryState;
