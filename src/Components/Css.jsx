import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";

const Css = () => {
  
  return (
    <div className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink flex justify-between p-[20px]'>
      <ul className='mr-[150px] mt-[150px] text-[#00241b] leading-[30px] text-[17px] ml-[10px] font-poppins'>
        <h2
          className="mb-[30px] ml-[60px] text-3xl	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#bf3100] after:rounded-[5px] after:absolute after:bottom-[5px] after:right-[-50px] relative"
        >
          <FaHandPointRight className='absolute top-1 left-[-50px] text-orange-700' />{" "}
          Main features of Css concepts
        </h2>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          CSS is the language we use to style an HTML document.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          CSS describes how HTML elements should be displayed.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          CSS controls the layout of multiple pages all at once.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />A CSS rule consists of a
          selector and a declaration block.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          To make our website responsive we must need a css file.{" "}
        </li>
      </ul>
      <div className='w-[500px] h-[510px] bg-[#61483c] rounded-[20px] text-white shadow-2xl shadow-[#181a19]'>
        <div className='ml-[20px] mr-[10px]'>
          <IoLogoCss3 className='w-[90px] h-[100px] mt-[15px] ml-[40%] mb-[5px] text-[#d8e2dc]  animate__animated animate__heartBeat animate__infinite	infinite' />
          <p className='text-justify font-poppins'>
            At first, we must connect external css file with html file. To put
            style we need three important things-selectors, properties and
            values. We can style in three ways inline, internal and external.
            Some important property of Css are as follows: Height, Width,
            Margin, padding, border, background-color, text-color, font-size,
            position, spacing, hovering, adding shape, font-family etc. After
            that, we need to use values to related property to get desired
            style. We need to use seperate name in each tag or we can use
            class/id to avoid selection problem. Id is used to give a unique
            name to any tag and class is used to give seperate name to many tag
            at the same time.
          </p>
          <button className='w-[100px] h-[50px] bg-[#896350] mt-[28px] rounded-[7px] hover:bg-[#523628] text-bold hover:border-[2px]'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Css;
