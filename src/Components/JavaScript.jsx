import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";

const JavaScript = () => {
  return (
    <div className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink flex justify-between p-[20px]'>
      <ul className='ml-5 mt-[150px] font-poppins leading-[30px]'>
        <h2
          className="mb-[30px] ml-[60px] text-3xl	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#bf3100] after:rounded-[5px] after:absolute after:bottom-[5px] after:right-[-15px] relative"
        >
          <FaHandPointRight className='absolute top-1 left-[-50px] text-orange-700' />{" "}
          Main features of JS concepts
        </h2>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          JavaScript is the world's most popular programming language.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          JavaScript is the programming language of the Web.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          JavaScript is easy to learn.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          JS can change html contents,html attributes values,html style.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          JS can hide or show any element of html.{" "}
        </li>
      </ul>
      <div className='w-[500px] h-[510px] bg-[#633d23] rounded-[20px] text-white shadow-md shadow-[#03312e]'>
        <div className='ml-[20px] mr-[20px]'>
          <TbBrandJavascript className='w-[90px] h-[100px] ml-[40%] text-[#fbba72]  animate__animated animate__pulse animate__infinite	infinite' />
          <p className='text-justify font-poppins'>
            We need to be causious to coonect JS file with HTML file in our
            projects. To learn JS effectively we Should follow w3schools.com or
            JS.Info websites. In learning JS our focus should be firstly on
            variables and then on data types. After that we need to focus on
            various operators, and JS loop (for loop/while loop) demands us
            extra care in learning JS. Besides, JS function is very important to
            be expert in JS while we cannot avoid JS scope to gain efficiency in
            JS development. We must focus on Methods of JS such as- array
            method, map method etc. to be expert in Js. We should also have a
            clear idea about the use of Array and Objects of JS. Finally, I want
            to say we need to know the way to use console, element and browser
            for efficient JS practice.{" "}
          </p>
          <button className='w-[100px] h-[50px] bg-[#896350] mt-[10px] rounded-[7px] hover:bg-[#78503c] text-bold hover:border-[2px]'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
