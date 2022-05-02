import React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import Card from '../Card/index';
import { useDirectory } from '../DirectoryProvider/DirectoryProvider';
import { DirectoryTypeEnum } from '../utils/types';

const Cards = () => {
  const { cards, dispatch } = useDirectory();

  const handleDragEnd = (result: DropResult) => {
    console.log(result);
    const sourceIndex = result.source?.index;
    const destinationIndex = result.destination?.index;

    if (sourceIndex === undefined || destinationIndex === undefined) return;

    dispatch({
      type: DirectoryTypeEnum.REORDER_CARDS,
      payload: {
        destinationIndex,
        sourceIndex,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-area">
        {(provided) => (
          <div
            className="cards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <React.Fragment>
              {cards.map(({ cardId, ...CardData }, index) => (
                <Draggable draggableId={cardId} index={index} key={cardId}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Card {...CardData} key={cardId} />
                    </div>
                  )}
                </Draggable>
              ))}
              <div>{provided.placeholder}</div>
            </React.Fragment>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Cards;
