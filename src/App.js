import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='inner'>
        <div className='content'>
          <h1 className='title'>DragDropContext</h1>
          <div className='card_list'>
            <DragDropContext>
              <Droppable droppableId='droppable'>
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Draggable draggableId='draggable-1' index={1}>
                      {(provided) => (
                        <div
                          className='card'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          item1
                        </div>
                      )}
                    </Draggable>

                    <Draggable draggableId='draggable-2' index={2}>
                      {(provided) => (
                        <div
                          className='card'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          item2
                        </div>
                      )}
                    </Draggable>

                    <Draggable draggableId='draggable-3' index={3}>
                      {(provided) => (
                        <div
                          className='card'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          item3
                        </div>
                      )}
                    </Draggable>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
