import React, {useState} from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

 const Footer =() => {

  return (
    <div className='bg-[#0a192f] text-gray-300 flex justify-center '>
        Footer
    
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/cohenbenjamin-claude/'
        >
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href='https://github.com/BenjaminCohn'
        >
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href='mailto:Benjamin.cohen@eemi.com?subject=Hello&body=Message'
        >
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href='https://curriculumvitae-nine.vercel.app'
        >
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  </div>
  </div>
  )
}

export default Footer
