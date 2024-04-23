import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";

const Target = () => {
  
  return (
    <div className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink flex justify-between p-[20px]'>
      <ul className='ml-5 mt-[150px] font-poppins leading-[30px]'>
        <h2
          className="mb-[30px] ml-[60px] text-3xl	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#bf3100] after:rounded-[5px] after:absolute after:bottom-[0px] after:right-[-45px] relative"
        >
          <FaHandPointRight className='absolute top-1 left-[-50px] text-orange-700' />{" "}
          Main features of React concepts
        </h2>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          React is a JavaScript library for building user interfaces.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          React is used to build single-page applications.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          React allows us to create reusable UI components.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          To work fast React creates a VIRTUAL DOM in memory.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          React only changes what needs to be changed!{" "}
        </li>
      </ul>
      <div className='w-[500px] h-[510px] bg-[#585123] rounded-[20px] text-white shadow-md shadow-[#03312e]'>
        <div className='ml-[20px] mr-[20px]'>
          <FaReact className='w-[90px] h-[100px] ml-[40%] mb-[6px] text-green-500 animate__animated animate__pulse animate__infinite	infinite' />
          <p className='text-justify font-poppins'>
            To use React in production, we need npm and Node.js installed in our
            PC. Now we need to open a terminal/git bash/cmd to work on it. In
            terminal we need to command cd+folder name to enter in that folder
            and then we need to write npm create vite@latest to install react in
            our project folder. Then we need to select react and then
            javascript.After that we need to install npm in our project file and
            then command npm run dev to get lacalhost to run our project in
            browser. We also need some handy software to install such as:
            react-icons,react-bootstrap,tailwind css to work smoothly in our
            project. Finally we should go through all the file and folder to get
            a clear idea of react working area.{" "}
          </p>
          <button className='w-[100px] h-[50px] bg-[#383315] mt-[15px] rounded-[7px] hover:bg-[#7a7139] hover:border-[2px] text-bold'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Target;
