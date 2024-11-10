/* eslint-disable react/prop-types */
import { FiGithub } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

export default function Card({
  title,
  description,
  tags,
  image,
  code,
  preview,
}) {
  return (
    <div className='flex items-center backdrop-blur-md p-4 gap-10 '>
      <img
        src={image}
        alt={title}
        className='w-64 h-52 object-cover rounded-lg mr-4 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl'
      />
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col justify-between w-full'>
          <h2 className='text-2xl font-bold  mb-2'>{title}</h2>
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='flex items-center gap-1 text-white text-sm font-semibold px-2 py-1 rounded-full cursor-pointer'
                style={{ backgroundColor: tag.background }}
              >
                {tag.icon}
                {tag.name}
              </span>
            ))}
          </div>
          <p className='mb-4'>{description}</p>
          <div className='flex justify-center gap-4 w-full mt-4 md:mt-0 md:w-auto md:justify-start'>
            <a
              href={code}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 px-4 py-2 text-base text-white transition bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black w-full'
            >
              <FiGithub />
              Code
            </a>
            <a
              href={preview}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 px-4 py-2 text-base text-white transition bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black w-full'
            >
              <FaEye />
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
