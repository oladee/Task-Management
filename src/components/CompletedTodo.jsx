import TodoItem from "./TodoItem"

const CompletedTodo = ({task, setTask, lightMode}) => {
  return (
    <div>
      {task.map((x,index) => {
              if(x.completed === true){
                return(
                  <TodoItem taskName={x.title} id={x.id} key={x.id} lightMode={lightMode} completed={x.completed} task={task} setTask={setTask}/> 
                )
              }
              
            })}
    </div>
  )
}

export default CompletedTodo
