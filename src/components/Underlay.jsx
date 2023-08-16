import React from "react";
import desktopDark from "../assets/bg-desktop-dark.jpg";
import desktopLight from "../assets/bg-desktop-light.jpg";
import mobileDark from "../assets/bg-mobile-dark.jpg";
import mobileLight from "../assets/bg-mobile-light.jpg";
import Sun from "../assets/icon-sun.svg";
import Form from "./Form";
import TaskList from "./TaskList";
const Underlay = () => {
  var srcst1 = desktopDark + " 1024w, " + mobileDark + " 375w";
  var size = "(min-width: 1024px) 1024px, 375px";
  return (
    <div className="h-screen">
      <div className="h-[30%]">
        <img
          className="w-full h-full object-cover"
          src={desktopDark}
          alt="Fine background"
          sizes={size}
          srcSet={srcst1}
        />
      </div>
      <div className="bg-gray-900 h-[70%] absolute w-full bottom-0">
        <div className="w-[90%] md:w-[55%] mx-auto relative top-[-10rem] flex flex-col justify-center items-center">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-4xl text-white font-extrabold whitespace-nowrap">
              T O D O
            </h1>
            <img src={Sun} alt="sun" className="object-contain h-8 ml-2"></img>
          </div>
          <div className=" items-center w-full justify-between" >
            <Form />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underlay;
