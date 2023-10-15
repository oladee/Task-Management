import TodoItem from "./TodoItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const AllTodoItems = ({ task, lightMode, setTask }) => {
  const handleDrop = (result) => {
    if (!result.destination) {
      return;
    }

    const newTask = [...task];
    const [reorderedItem] = newTask.splice(result.source.index, 1);
    newTask.splice(result.destination.index, 0, reorderedItem);
    setTask(newTask);
  };

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <div>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef}>
              {task.map((x, index) => (
                <Draggable key={x.id} draggableId={x.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem
                        taskName={x.title}
                        id={x.id}
                        key={x.id}
                        lightMode={lightMode}
                        completed={x.completed}
                        task={task}
                        setTask={setTask}
                      />
                    </div>
                )}
                </Draggable>
           ) )}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
export default AllTodoItems;