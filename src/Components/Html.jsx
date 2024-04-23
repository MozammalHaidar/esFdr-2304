import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

const Html = () => {
  return (
    <div className='max-w-[1320px] mx-auto pt-20 pb-20 bg-lightPink flex justify-between p-[20px]'>
      <ul className='ml-5 mt-[150px] text-[#00241b] leading-[28px] text-[17px] font-poppins'>
        <h2
          className="mb-[30px] ml-[60px] text-3xl	after:content-[''] after:w-[45px]
         after:h-1 after:bg-[#bf3100] after:rounded-[5px] after:absolute after:bottom-[5px] after:right-[120px] relative "
        >
          <FaHandPointRight className='absolute top-1 left-[-50px] text-orange-700' />
          Main features of Html concepts
        </h2>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Html is the structure element of a website.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          We can only see the body part of a Html file in our website.
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          Html consists a series of element to tell the browser how to display
          the content.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          An Html elements is defined by a start tag,some content,and an end
          tag.{" "}
        </li>
        <li className='flex'>
          <FaCircleCheck className='mr-2 mt-1' />
          All Html elements can have attributes for additional info about the
          elements.{" "}
        </li>
      </ul>
      <div className='w-[500px] h-[510px] bg-[#344e41] rounded-[20px] text-white shadow-2xl shadow-[#03312e]'>
        <div className='ml-[20px] mr-[20px]'>
          <FaHtml5 className='w-[70px] h-[85px] mt-[25px] ml-[40%] mb-[10px] text-[#c4fff9] animate__animated animate__pulse animate__infinite	infinite' />
          <p className='text-justify font-poppins'>
            Html works on different types of tags. We need to set Id or Class in
            a tag to call it to use style/function in it. It has some block tags
            and some inline tags. A block tag contains total space of it's line
            where as an inline tag does not occupy total space of it's line it
            only takes it's required space. To make an inline tag into a block
            tag we can use br/div tag. (Display:block) property is used to make
            an inline tag into a block tag. Div (division) is a mostly used tag
            in html. Some important tags of Html are as follows-Heading,
            Paragraph, Image, Table tag, Form tag, Video, audio, Br, Nav,
            Footer, Iframe, Anchor, Span, Input, Button etc.
          </p>
          <button className='w-[100px] h-[50px] p-[5px] bg-[#5bba6f] mt-[25px]  rounded-[7px] hover:bg-[#2ba84a] text-bold hover:border-[2px]'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html;
