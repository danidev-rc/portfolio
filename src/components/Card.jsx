import React from "react";

export default function Card({ title, description, tags, image, icon, link }) {
  return (
    <div className='flex items-center bg-white/30 backdrop-blur-md p-4 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105'>
      <img
        src={image}
        alt={title}
        className='w-32 h-32 object-cover rounded-lg mr-4'
      />
      <div className='flex flex-col justify-between'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
          {title}
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='flex items-center gap-1 bg-indigo-600 text-white text-sm font-semibold px-2 py-1 rounded'
            >
              {tag.icon}
              {tag.name}
            </span>
          ))}
        </div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-600 dark:text-indigo-400 font-semibold hover:underline'
        >
          Ver repositorio
        </a>
      </div>
    </div>
  );
}
