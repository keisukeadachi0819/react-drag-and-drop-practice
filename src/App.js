import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const [cards, setCard] = useState([
    { id: 1, title: "item0" },
    { id: 2, title: "item1" },
    { id: 3, title: "item2" }
  ]);

  const onDragEnd = (e) => {
    // console.log(e);
    // console.log(e.source.index);
    // console.log(e.destination.index);

    // 移動するカードのインデックスを格納
    const removed = cards.splice(e.source.index, 1);
    console.log(removed);
    // 移動後に配置する場所に追加
    cards.splice(e.destination.index, 0, removed[0]);
  };

  return (
    <div className='container'>
      <div className='inner'>
        <div className='content'>
          <h1 className='title'>DragDropContext</h1>
          <div className='card_list'>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='droppable'>
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {cards.map((card, index) => (
                      <Draggable draggableId={card.title} index={index} key={card.id}>
                        {(provided) => (
                          <div
                            className='card'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {card.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
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
