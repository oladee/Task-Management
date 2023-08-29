import crossIcon from "../assets/icon-cross.svg";
function TodoItem({taskName}) {
  // let checking = document.getElementById('checking')
  // function handleClick(){
    
  // }
  return (
    <div className="flex list-none px-4 py-2 bg-gray-800  text-white rounded-t mt-6 justify-between items-center">
      <input type="checkbox" name={taskName}id="checking" />
      <label htmlFor={taskName}>{taskName}</label>
    </div>
  );
}

export default TodoItem;
