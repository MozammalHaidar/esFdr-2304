import React from "react";
import person1 from "../assets/image-1.jpg";
import person2 from "../assets/image-2.jpg";
import person3 from "../assets/image-3.jpg";
import person4 from "../assets/image-4.jpg";
import person5 from "../assets/image-5.jpg";
import person6 from "../assets/image-6.jpg";
import { LiaStarSolid } from "react-icons/lia";

const Team = ({ paragraph }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='500'
      data-aos-easing='ease-in-cubic'
      className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink relative w-[100%] text-center'
    >
      <div className='bg-white w-[280px] h-[70px] inline-block rounded-md shadow-sm shadow-[#03312e] relative'>
        <h2
          className="text-center text-bold text-[32px] w-[280px] h-[70px] text-[#780000] mb-[70px]  after:content-[''] after:w-[100%]          
          after:h-1 after:bg-green-700 after:rounded-[5px] after:absolute after:bottom-0 after:left-0"
        >
          Team members
        </h2>
      </div>
      <div className='grid grid-rows-2 grid-flow-col gap-[60px] mt-[70px] ml-[40px]'>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e]  transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person1}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Montu Mia
            </h3>
          </div>
          <p className='mt-1 text-justify'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
          </div>
        </div>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e] transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person2}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Sadia Hossain
            </h3>
          </div>
          <p className='mt-1 text-justify'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
          </div>
        </div>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e] transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person3}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Nazmul Hassan
            </h3>
          </div>
          <p className='mt-1 text-justify text-[#780000]'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
          </div>
        </div>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e] transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person4}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Saykhul Alam
            </h3>
          </div>
          <p className='mt-1 text-justify text-[#780000]'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
            <LiaStarSolid className='text-red-700 w-5 h-5' />
          </div>
        </div>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e] transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person5}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Shuvo Islam
            </h3>
          </div>
          <p className='mt-1 text-justify'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
          </div>
        </div>
        <div className='ml-2 w-[330px] h-[330px] p-[10px] rounded-xl shadow-md shadow-[#03312e] first-line:transition duration-500 hover:scale-125'>
          <div className='flex'>
            <img
              className='w-[100px] h-[100px] rounded-md'
              src={person6}
              alt=''
            />
            <h3 className='ml-[6px] mt-[35px] text-[18px] text-bold'>
              Riajul Hasan
            </h3>
          </div>
          <p className='mt-1 text-justify'>{paragraph}</p>
          <div className='flex gap-1 text-justify mt-3 ml-[32%]'>
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
            <LiaStarSolid className='text-green-700 w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
