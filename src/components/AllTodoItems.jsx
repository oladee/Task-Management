import TodoItem from "./TodoItem"

const AllTodoItems = ({task, lightMode, setTask}) => {
  return (
    <div>
      {task.map((x,index) => {
              console.log(x)
              return(
                <TodoItem taskName={x.title} id={x.id} key={x.id} lightMode={lightMode} completed={x.completed} task={task} setTask={setTask}/> 
              )
            })}
    </div>
  )
}

export default AllTodoItems
