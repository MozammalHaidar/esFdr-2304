import React from "react";
import project1 from "../assets/banner1.png";
import project2 from "../assets/banner2.png";
import project3 from "../assets/banner3.png";
import project4 from "../assets/banner4.png";
import project5 from "../assets/banner5.png";
import project6 from "../assets/banner6.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";

const Last = () => {
  return (
    <>
      <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-easing='ease-in-cubic'
        className='max-w-[1320px] mx-auto pt-20 pb-10 bg-lightRed '
      >
        <div className='flex justify-between p-[20px]'>
          <div className='text-white pl-[100px]'>
            <ul>
              <h4 className='mb-2 text-bold text-xl'>Core Contents</h4>
              <li className='hover:text-red-700 transition-[0.6s]'>Html</li>
              <li className='hover:text-red-700 transition-[0.6s]'>Css</li>
              <li className='hover:text-red-700 transition-[0.6s]'>
                JavaScript
              </li>
              <li className='hover:text-red-700 transition-[0.6s]'>Tailwind</li>
              <li className='hover:text-red-700 transition-[0.6s]'>React</li>
            </ul>
          </div>
          <div className=''>
            <ul className='text-white pr-[240px]'>
              <h4 className='mb-2 text-bold text-xl'>Addional Contents</h4>
              <li className='hover:text-red-700 transition-[0.6s]'>
                Bootstrap
              </li>
              <li className='hover:text-red-700 transition-[0.6s]'>Figma</li>
              <li className='hover:text-red-700 transition-[0.6s]'>
                Git & Github
              </li>
              <li className='hover:text-red-700 transition-[0.6s]'>
                24/7 Support
              </li>
              <li className='hover:text-red-700 transition-[0.6s]'>
                Career Guidline
              </li>
            </ul>
          </div>
          <div className='mr-[70px] p-2'>
            <h4 className='text-white text-center mb-2 text-bold text-xl'>
              Projects Work
            </h4>
            <div className='grid grid-rows-2 grid-flow-col gap-2 mt-5'>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project2}
                  alt=''
                />
              </div>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project1}
                  alt=''
                />
              </div>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project6}
                  alt=''
                />
              </div>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project3}
                  alt=''
                />
              </div>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project4}
                  alt=''
                />
              </div>
              <div>
                {" "}
                <img
                  className='w-[70px] h-[70px] border-2	border-[#ffffff] '
                  src={project5}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-3 mt-5 text-white ml-[115px]'>
          <FaGoogle className='bg-[#38040e] hover:bg-red-700 rounded-[50%] w-[30px] h-[30px] p-[5px]' />
          <FaYoutube className=' bg-[#38040e] hover:bg-red-700 rounded-[50%] w-[30px] h-[30px] p-[5px]' />
          <FaFacebook className=' bg-[#38040e] hover:bg-red-700 rounded-[50%] w-[30px] h-[30px] p-[5px]' />
          <FaLinkedinIn className=' bg-[#38040e] hover:bg-red-700 rounded-[50%] w-[30px] h-[30px] p-[5px]' />
          <FaTwitter className=' bg-[#38040e] hover:bg-red-700 rounded-[50%] w-[30px] h-[30px] p-[5px]' />
        </div>
        <div className='flex ml-[78%] text-3xl '>
          "
          <LiaStarSolid className='text-white' />
          <LiaStarSolid className='text-white' />
          <LiaStarSolid className='text-white' />
          <LiaStarSolid className='text-white' />
          <LiaStarSolid className='text-white' />
        </div>
        "
      </div>
      <div className='max-w-[1320px] mx-auto text-white text-center pt-[10px] pb-[20px] border-t border-[#fff] bg-[#250902]'>
        <h2 className='mt-2 text-bold'>
          © 2024 All rights reserved by{" "}
          <span className='text-red-700 text-bold'>esFdr-2304.</span>
        </h2>
      </div>
    </>
  );
};

export default Last;
