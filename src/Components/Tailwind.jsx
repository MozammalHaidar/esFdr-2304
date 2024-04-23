import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHandPointRight } from "react-icons/fa";

const Tailwind = () => {
  
  return (
    <div className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink flex justify-between p-[20px]'>
      <ul className='ml-5 mt-[150px] mr-[100px] font-poppins leading-[30px]'>
        <h2
          className="mb-[30px] ml-[40px] text-3xl	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#bf3100] after:rounded-[5px] after:absolute after:bottom-[0px] after:right-[-45px] relative"
        >
          <FaHandPointRight className='absolute top-1 left-[-50px] text-orange-700' />{" "}
          Main features of Tailwind concepts
        </h2>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Tailwind is the fastest and most advanced CSS framework.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Tailwind works in html file and saves our work time.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Tailwind has the most reliable documentation set-up.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Tailwind is easy to learn and use in our projects.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Tailwind gives us opportunity to customize any style with less coding.{" "}
        </li>
      </ul>
      <div className='w-[500px] h-[510px] bg-[#07393c] rounded-[20px] text-white shadow-lg shadow-indigo-500/40'>
        <div className='ml-[20px] mr-[20px]'>
          <SiTailwindcss className='w-[90px] h-[100px] ml-[40%] text-[#ebf5df] animate__animated animate__heartBeat animate__infinite	infinite' />
          <p className='text-justify font-poppins'>
            Tailwind CSS works by scanning all of our HTML files, JavaScript
            components, and any other templates for class names, generating the
            corresponding styles and then writing them to a static CSS file. To
            use tailwind in our project at first we need to go vite to install
            tailwind in our project. Then in terminal we need to command-npm
            install -D tailwindcss postcss autoprefixer , And then we need to
            command-npx tailwindcss init -p in terminal. After that we need to
            configure our template paths. To do this we need add-(
            "./index.html", "./src/**/*.....", in our tailwind.config.js file.)
            And then, we need to add some tailwind directives-(@tailwind base;
            @tailwind components; @tailwind utilities; ). Finally, our project
            is ready to work with tailwind.
          </p>
          <button className='w-[100px] h-[50px] bg-[#346a41] rounded-[7px] mt-[10px] hover:bg-[#2ba84a] text-bold hover:border-[2px]'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
