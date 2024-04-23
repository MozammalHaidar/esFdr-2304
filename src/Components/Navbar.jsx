import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='max-w-[1320px] mx-auto h-[65px] bg-black text-white shadow-xl shadow-white'>
      <div className='flex justify-between'>
        {/* <img className='w-[110px] h-[55px]' src={logo} alt='logo' /> */}
        <h2 className='ml-3 mt-4 text-orange-700 text-[20px] text-bold'>
          esFdr-2304
        </h2>
        <ul className='flex gap-5 text-center mt-2.5 text-bold font-poppins'>
          <li
            className="bg-black hover:text-white  py-[5px] px-[7px] rounded-[5px] after:content-[''] after:w-0          
          after:h-1 after:bg-red-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0 hover:after:w-[100%] after:duration-300 relative"
          >
            Html
          </li>
          <li
            className="bg-black hover:text-white  py-[5px] px-[7px] rounded-[5px] after:content-[''] after:w-0
         after:h-1 after:bg-red-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0 hover:after:w-[100%] after:duration-300 relative"
          >
            Css
          </li>
          <li
            className="bg-black hover:text-white  py-[5px] px-[7px] rounded-[5px] after:content-[''] after:w-0
         after:h-1 after:bg-red-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0 hover:after:w-[100%] after:duration-300 relative"
          >
            Javascript
          </li>
          <li
            className="bg-black hover:text-white  py-[5px] px-[7px] rounded-[5px] after:content-[''] after:w-0
         after:h-1 after:bg-red-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0 hover:after:w-[100%] after:duration-300 relative"
          >
            Tailwind
          </li>
          <li
            className="bg-black hover:text-white  py-[5px] px-[7px] rounded-[5px] after:content-[''] after:w-0
         after:h-1 after:bg-red-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0 hover:after:w-[100%] after:duration-300 relative"
          >
            React
          </li>
        </ul>
        <form action='' className='mt-2.5 mr-2.5'>
          <input
            className='w-[220px] h-[40px] bg-orange-700 rounded-md font-bold font-poppins'
            placeholder='  Search'
            type='text'
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
