import { FiMail } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function HomePage() {
  return (
    <div>
      <section className='section py-12 md:py-32 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
        <div className='max-w-xl '>
          <h1 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white'>
            Hola, soy Dante Rodríguez
          </h1>
          <p className='mt-4 text-gray-600 dark:text-gray-300'>
            Tecnico en{" "}
            <strong className=' text-indigo-600 dark:text-indigo-400'>
              Diseño y Desarrollo de Software
            </strong>
            , con experiencia en el desarrollo de aplicaciones web. Me encanta
            aprender nuevas tecnologías y compartir mis conocimientos con la
            comunidad.
          </p>
          <nav className='flex flex-wrap gap-4 mt-8'>
            <a className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>
              <FiMail />
              Contáctame
            </a>
            <a className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>
              <CiLinkedin />
              LinkedIn
            </a>
          </nav>
        </div>
      </section>
      <div className='space-y-24'>
        <ol>
          <li></li>
        </ol>
      </div>
    </div>
  );
}
