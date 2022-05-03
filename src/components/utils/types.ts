export interface ImageData {
  imageSrc: string;
  imageAlt: string;
  originalName: string;
  currentName: string;
  fileExt: string;
}

export interface CardData {
  imageData: ImageData;
  isLocked: boolean;
  isEditMode: boolean;
  cardId: string;
}

export interface CardProps extends CardData {
  cardIndex: number;
}

export interface DirectoryProps {
  children: React.ReactNode;
}

export type DirectoryDispatch = React.Dispatch<DirectoryAction>;

export interface DirectoryState {
  cards: CardData[];
  selectedCardId: string | null;
  isCardSelected: boolean;
  sourceIndex: number | null;
  deletedCards: CardData[];
}

export interface DirectoryProviderValue {
  state: DirectoryState;
  dispatch: DirectoryDispatch;
}

export interface ReorderCardsPayload {
  destinationIndex: number;
  sourceIndex: number;
}

export interface SetBaseNamePayload {
  baseName: string;
}

export interface MoveCardPayload {
  sourceIndex: number | null;
  destinationIndex: number | null;
}

export interface DeleteCardPayload {
  cardId: string;
}

export interface ReorderCardsProps extends ReorderCardsPayload {
  cards: CardData[];
}

export enum DirectoryTypeEnum {
  GET_IMAGE_HANDLES = 'GET_IMAGE_HANDLES',
  REORDER_CARDS = 'REORDER_CARDS',
  SET_BASE_NAME = 'SET_BASE_NAME',
  MOVE_CARD = 'MOVE_CARD',
  DELETE_CARD = 'DELETE_CARD',
}

export type DirectoryAction =
  | {
      type: DirectoryTypeEnum.GET_IMAGE_HANDLES;
      payload: { images: File[] };
    }
  | {
      type: DirectoryTypeEnum.REORDER_CARDS;
      payload: ReorderCardsPayload;
    }
  | {
      type: DirectoryTypeEnum.SET_BASE_NAME;
      payload: SetBaseNamePayload;
    }
  | {
      type: DirectoryTypeEnum.MOVE_CARD;
      payload: MoveCardPayload;
    }
  | {
      type: DirectoryTypeEnum.DELETE_CARD;
      payload: DeleteCardPayload;
    };

export type DirectoryReducer = (
  state: DirectoryState,
  action: DirectoryAction
) => DirectoryState;
