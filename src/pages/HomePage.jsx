import { FiMail } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import {
  FaCodeBranch,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

import Button from "../components/Button";
import Card from "../components/Card";

import bestMovie from "../assets/best_movie.png";
import biblioteca from "../assets/biblioteca.png";

export default function HomePage() {
  return (
    <div className='bg-[var(--bg-color)] text-[var(--text-color)]'>
      <section
        id='home'
        className='section py-12 md:py-32 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
      >
        <div className='max-w-xl'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Hola, soy Dante Rodríguez
          </h1>
          <p className='mt-4'>
            Técnico en{" "}
            <strong className='text-[var(--primary-color)]'>
              Diseño y Desarrollo de Software
            </strong>
            , con experiencia en el desarrollo de aplicaciones web. Me encanta
            aprender nuevas tecnologías y compartir mis conocimientos con la
            comunidad.
          </p>
          <nav className='flex flex-wrap gap-4 mt-8'>
            <Button
              icon={<FiMail className='text-xl' />}
              text='Email'
              link=''
            />
            <Button
              icon={<CiLinkedin className='text-xl' />}
              text='LinkedIn'
              link='https://www.linkedin.com/in/dante-samuel-rodriguez-chambi-444041279/'
            />
          </nav>
        </div>
      </section>
      <div className='py-16'>
        <section
          id='experience'
          className='section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
        >
          <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 '>
            <MdOutlineWorkOutline className='hover:transform hover:scale-110 transform origin-center transition-transform duration-500 ease-in-out cursor-pointer' />
            Experiencia Laboral
          </h2>
          <ol className='relative border-s border-gray-200 dark:border-gray-700'>
            <li className='mb-10 ms-4'>
              <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                Marzo 2023
              </time>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-yellow-400'>
                Desarrollo Web
              </h3>
              <p className='mb-4 text-base font-normal'>
                Realize un proyecto de desarrollo web, con el uso de Html, Css y
                JavaScript en una empresa que brinda servicios informaticos.
              </p>
            </li>
            <li className='mb-10 ms-4'>
              <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                Marzo 2024
              </time>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-yellow-400'>
                Desarrollador Web Frontend
              </h3>
              <p className='mb-4 text-base font-normal'>
                Realize un pagina web con el uso de React, TailwindCss y Vercel,
                para un proyecto de el Instituto Tecnologico Tecsup, relacionado
                con los estacionamientos.
              </p>
            </li>
          </ol>
        </section>
      </div>
      <div className='py-16'>
        <section
          id='projects'
          className='section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
        >
          <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3'>
            <FaCodeBranch className='hover:transform hover:scale-110 transform origin-center transition-transform duration-500 ease-in-out cursor-pointer' />
            Proyectos
          </h2>
          <div>
            <Card
              title='Best Movie - A beautiful movie website.'
              description='Esta pagina fue creada en mi primer ciclo de estudios, esta pagina web similar a Netflix, fue creada con HTML, CSS y JavaScript.'
              tags={[
                {
                  name: "HTML",
                  icon: <FaHtml5 />,
                  background: "#E34F26",
                },
                {
                  name: "CSS",
                  icon: <FaCss3Alt />,
                  background: "#1572B6",
                },
                {
                  name: "JavaScript",
                  icon: <FaJsSquare />,
                  background: "#c49617",
                },
              ]}
              image={bestMovie}
              link='https://github.com/danidev-rc/best-movie.git'
            />
            <Card
              title='Django-based API.'
              description='Esta API fue creada con el fin de aprender a usar Django, gracias a la creación de esta API me permitió ganar un concurso de mi Institución.'
              tags={[
                {
                  name: "Django",
                  icon: <DiDjango />,
                  background: "#048c32",
                },
                {
                  name: "HTML",
                  icon: <FaHtml5 />,
                  background: "#E34F26",
                },
                {
                  name: "CSS",
                  icon: <FaCss3Alt />,
                  background: "#1572B6",
                },
              ]}
              image={biblioteca}
              link='https://github.com/danidev-rc/Biblioteca-Django.git'
            />
            <Card
              title='Inventory Manager.'
              description='Este proyecto fue creado con el fin de titulación, el proyecto consiste en un sistema de inventario, con el uso de NodeJs, Express, React, Supabase y PostgreSQL.'
              tags={[
                {
                  name: "NodeJs",
                  icon: <FaNodeJs />,
                  background: "#048c32",
                },
                {
                  name: "Express",
                  icon: <SiExpress />,
                  background: "#717d7e",
                },
                {
                  name: "React",
                  icon: <FaReact />,
                  background: "#17a1f2",
                },
                {
                  name: "Supabase",
                  icon: <RiSupabaseFill />,
                  background: "#000000",
                },
                {
                  name: "PostgreSQL",
                  icon: <BiLogoPostgresql />,
                  background: "#0633e8",
                },
              ]}
              image={biblioteca}
              link='https://github.com/danidev-rc/gestor-inventario.git'
            />
          </div>
        </section>
      </div>
    </div>
  );
}
