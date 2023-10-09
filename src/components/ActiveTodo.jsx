import TodoItem from "./TodoItem"
const ActiveTodo = ({lightMode, task, setTask}) => {
  return (
    <div>
      {task.map((x,index) => {
              if(x.completed === false){
                return(
                  <TodoItem taskName={x.title} id={x.id} key={x.id} lightMode={lightMode} completed={x.completed} task={task} setTask={setTask}/> 
                )
              }
              
            })}
    </div>
  )
}

export default ActiveTodo
