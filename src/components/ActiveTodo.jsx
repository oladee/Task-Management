import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ActiveTodo = ({ lightMode, task, setTask }) => {

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    const items = [...task];
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    setTask(items);
  };

  return (
    <div>
    {task.length > 0 || task.completed === false ? 
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="task">
    {(provided) => (
      <div
        className="task"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {task.map((x, index) => {
          if (x.completed === false)
          return (
            <Draggable
              key={x.id}
              draggableId={x.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
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
          );
        })}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  </DragDropContext>
: (
        <p className="text-[#777a92] text-center pt-2">
          No items on the list <hr className="mt-2" />
        </p>
      )}
 </div>
  );
};

export default ActiveTodo;
