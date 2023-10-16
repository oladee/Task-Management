import {NavLink} from "react-router-dom"
const Footer = ({ lightMode, task, setTask }) => {
  const normal =
    "flex px-4 py-4 placeholder-white-500  rounded-b justify-between items-center text-[14px]";
  const normal2 = 'flex md:hidden justify-center border-t-[12px]  py-4'

    const newList = [...task] 
    const itemsLeft = newList.filter(x => x.completed === false)

    const handleClearComplete = ()=> {
      let newlist = newList.filter(x => x.completed !== true)
      setTask(newlist)
    }
  return (
    <div>
      <div
        className={
          lightMode
            ? `bg-white text-black ${normal} `
            : `${normal} bg-gray-800 text-gray-400`
        }
      >
        <p>{itemsLeft.length} item left</p>
        <div className="hidden md:flex ">
          <NavLink to="/" className="focus:text-blue-500 hover:text-blue-500 cursor-pointer">All</NavLink>
          <NavLink to="/active" className="mx-2 focus:text-blue-500 hover:text-blue-500 cursor-pointer">Active</NavLink>
          <NavLink to="/completed" className="focus:text-blue-500 hover:text-blue-500 cursor-pointer" >Completed</NavLink>
        </div>
        <p onClick={handleClearComplete} >Clear Completed</p>
      </div>
      <div className={lightMode ? `${normal2} border-t-gray-200 text-gray-400 `: `${normal2} border-t-gray-200 text-gray-400` }>
        <NavLink to="/" className="focus:text-blue-500 hover:text-blue-500 cursor-pointer">All</NavLink>
        <NavLink to="/active" className="mx-3 focus:text-blue-500 hover:text-blue-500 cursor-pointer">Active</NavLink>
        <NavLink to="/completed" className="focus:text-blue-500 hover:text-blue-500 cursor-pointer">Completed</NavLink>
      </div>
    </div>
  );
};

export default Footer;