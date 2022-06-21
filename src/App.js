import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

function App() {
  return (
    <div>
      <h1>Drag and Drop</h1>
      <DragDropContext>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Draggable draggableId='draggable' index={0}>
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
