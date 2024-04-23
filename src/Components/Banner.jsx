import React from "react";
import mainImg from "../assets/bannerImg.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className='container max-w-[1320px] mx-auto flex justify-between bg-[#e4f0d0] pb-[100px] p-[20px]'>
        <div className=' w-[500px] h-[500px] bg-deepGreen mt-20 rounded-md text-white shadow-2xl shadow-[#03312e] animate__animated animate__backInRight animate__delay-2s'>
          <div
            data-aos='zoom-in'
            data-aos-duration='2000'
            className='border-black ml-10 mr-5'
          >
            <div className='flex gap-3 mt-4'>
              <img
                className='w-[90px] h-[90px] rounded-[50%] '
                src={mainImg}
                alt='bannerimg'
              />
              <h2 className='mt-5 font-poppins ml-4'>
                MD. Wasim Mahamud -<br />
                MERN Stack Mentor of CIT.
              </h2>
            </div>
            <p className='mt-4 text-justify pb-[10px] text-white font-poppins'>
              This course is designed with a group of quality web-developer from
              "Creative It Institute" and it's success ratio is expected to be
              very satisfactory. To ensure learners highest success this course
              begins it's journey from the very basics of web-development
              fundamentals. "Creative It" ensures 100% outcomes in the following
              wed - design components - Html, Css, Bootstrap, Javascript,
              Tailwind and React Js. So, regular practice and 100% dedication
              can bring you success in web-development sector.
            </p>

            <button className='mt-3 bg-[#4fab63] p-[12px] rounded-md hover:bg-[#2ba84a] hover:border-[2px] font-poppins'>
              More Info
            </button>

            <div className='flex gap-3 mt-[20px]'>
              <FaGoogle className='bg-[#248232] p-[4px] w-[23px] h-[23px] rounded-[6px]' />
              <FaFacebook className='bg-[#248232] p-[4px] w-[23px] h-[23px] rounded-[6px]' />
              <FaLinkedinIn className='bg-[#248232] p-[4px] w-[23px] h-[23px] rounded-[6px]' />
              <FaTwitter className='bg-[#248232] p-[4px] w-[23px] h-[23px] rounded-[6px]' />
            </div>
          </div>
        </div>

        <div>
          <h1
            data-aos='zoom-in'
            data-aos-duration='2000'
            className="font-poppins text-bold mt-40 text-3xl ml-20 text-[#00241b]	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#03312e] after:rounded-[5px] after:absolute after:bottom-[7px] after:right-[225px] relative animate__animated animate__backInDown animate__delay-3s"
          >
            Esfdr-2304 batch is designed with <br />
            following components
          </h1>
          <div
            data-aos='flip-left'
            data-aos-duration='3000'
            data-aos-easing='ease-in-cubic'
            className='grid grid-rows-3 grid-flow-col gap-5 w-[700px] mt-10 font-poppins'
          >
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              HTML
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              CSS
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              BOOTSTRAP
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              JAVASCRIPT
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              FIGMA CONVERT
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              GIT & GITHUB
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              TAILWIND
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              REACT
            </div>
            <div className='bg-[#f8ffe5] border-2	border-black text-center rounded-md p-2 hover:bg-red-700 hover:text-white transition-[0.6s]'>
              CAREER GUIDLINE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
