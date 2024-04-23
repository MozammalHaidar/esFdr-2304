import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoFigma } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TfiSupport } from "react-icons/tfi";
import { RiGuideFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "tomato" }}
      onClick={onClick}
    />
  );
}
const SliderSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id='slider2'
      data-aos='fade-up'
      data-aos-duration='500'
      data-aos-easing='ease-in-cubic'
      className='container max-w-[1320px] mx-auto bg-lightWhite pt-[50px]'
    >
      <div className='w-[600px] h-[240px] pt-[20px] mb-[50px] mx-auto  shadow-md shadow-[#3e3e3e] rounded-xl animate__animated animate__backInUp animate__delay-2s'>
        <h2 className='text-center text-bold text-[26px] text-[#780000] '>
          Additional Contents
        </h2>
        <p className='text-justify w-[550px] mx-auto mt-4 text-[#132a13] font-poppins'>
          CIT includes some extra contents in esFdr-2304 course module to cover
          up total demand of web development process.These contents such as-
          Bootstrap, Git & Github, Figma Convert, 24/7 Support, Career Guidline,
          Exploring Real Projects etc. are very essential for a confident web
          developer.
        </p>
      </div>

      <Slider {...settings} className='pt-[20px] pb-[100px]'>
        <div className='w-[100px] h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl '>
          <div className='flex font-poppins'>
            <BiLogoFigma className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-pink-700 bg-[#ffcad4] rounded-md' />
            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[15px] text-[#780000]'>
              Figma Convert
            </h3>
          </div>
          <p className='m-[15px] text-start text-[#780000] mt-[15px] font-poppins'>
            To do any remote jobs /out-sourcing in web designing, we may be
            asked to convert a Figma file into Html and Css. In that case, we
            need a clear concept about Figma conversion process. CIT included
            this section in their FDR courses.
          </p>
          <button className='bg-[#fec4b0] rounded-md p-[6px] ml-[15px] mt-[5px] font-poppins'>
            More Info
          </button>
        </div>
        <div className='w-[100px] h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl font-poppins'>
          <div className='flex'>
            <FaBootstrap className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-[#fff] bg-[#346c34] rounded-md' />
            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[5px] text-[#132a13]'>
              Bootstrap
            </h3>
          </div>
          <p className='m-[15px] text-start text-[#00241b]'>
            To work rapidly and efficiently we need framework, and Bootstrap is
            one of the most famous css frame-work for this task. It's also
            popular for it's responsive feature. And CIT is determined to ensure
            a smooth practice on Bootstrap in FDR course.
          </p>
          <button className='bg-[#6b7f6b] rounded-md p-[6px] ml-[15px] mt-[10px]'>
            More Info
          </button>
        </div>
        <div className='w-[100px] h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl font-poppins'>
          <div className='flex'>
            <FaGithubSquare className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-[#fff] bg-[#a44a3f] rounded-md' />
            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[5px] text-[#132a13]'>
              Git & Github
            </h3>
          </div>
          <p className='m-[15px] text-start'>
            To store our projects work and to work in collaboration we need a
            reliable plateform and Github is always ready for this task. We can
            also show our projects to our clients in taking decision. CIT offers
            a clear concept about Git & Github in FDR-course.
          </p>
          <button className='bg-[#ffd0aa] rounded-md p-[6px] ml-[15px] mt-[10px]'>
            More Info
          </button>
        </div>
        <div className='w-[100px] h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl font-poppins'>
          <div className='flex'>
            <TfiSupport className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-[#fff] bg-[#2d4739] rounded-md' />
            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[5px] text-[#132a13]'>
              24/7 Support
            </h3>
          </div>
          <p className='m-[15px] text-start'>
            To face problems or to stuck in errors is very natural for a beginer
            developer. To ease their situation and to make them feel relief CIT
            provides 24/7 support to it's learners. This initiative is always
            helpful and effective for future developers.{" "}
          </p>
          <button className='bg-[#6b7f6b] rounded-md p-[6px] ml-[15px] mt-[10px]'>
            More Info
          </button>
        </div>
        <div className='h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl font-poppins'>
          <div className='flex'>
            <RiGuideFill className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-[#fff] bg-[#6a2f3a] rounded-md' />

            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[5px] text-[#132a13]'>
              Career Guidline
            </h3>
          </div>

          <p className='m-[15px] text-start'>
            Only class activities and project works cannot ensure students
            success. Proper guidline works as a touchstone in teaching process.
            An expert guide is always a torch bearer for his followers. CIT is
            also very sensitive about this fact.
          </p>
          <button className='bg-[#ad2e24] rounded-md p-[6px] ml-[15px] mt-[10px]'>
            More Info
          </button>
        </div>
        <div className='w-[100px] h-[340px] bg-[#fff] shadow-md shadow-[#000] rounded-xl font-poppins'>
          <div className='flex'>
            <GoProjectSymlink className='w-[75px] h-[75px] p-[5px] mt-[30px] ml-[15px] text-[#fff] bg-[#015a22] rounded-md' />
            <h3 className='pt-[25px] text-[24px] mt-[25px] ml-[5px] text-[#132a13]'>
              Real Project Work
            </h3>
          </div>
          <p className='m-[15px] text-start'>
            Bookish and lecture based learning is an out-dated method which can
            bring less success for learners. Learning with practical project
            work can bring optimum results. In designing course module CIT
            emphasizes on the value of project works.
          </p>
          <button className='bg-[#2b9348] rounded-md p-[6px] ml-[15px] mt-[10px]'>
            More Info
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlick;
