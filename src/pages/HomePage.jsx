import { motion } from "framer-motion";
import {
  FiMail,
  MdOutlineWorkOutline,
  FaCodeBranch,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  DiDjango,
  BiLogoPostgresql,
  RiSupabaseFill,
  SiExpress,
  CiLinkedin,
} from "../assets/icons";
import { Button, Card } from "../components";
import { bestMovie, biblioteca, inventory } from "../assets/images/images";
import "@fontsource-variable/onest";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='bg-[var(--bg-color)] text-[var(--text-color)]'>
      <motion.section
        id='home'
        className='section py-12 md:py-32 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
        initial='hidden'
        whileInView='visible'
        variants={fadeIn}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex w-full gap-14 items-center'>
          <div className='max-w-xl'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Hola, soy Dante Rodríguez
            </h1>
            <p className='mt-8 text-xl md:text-lg'>
              Técnico en{" "}
              <strong className='text-[var(--primary-color)]'>
                Diseño y Desarrollo de Software
              </strong>
              , con experiencia en el desarrollo de aplicaciones web. Me encanta
              aprender nuevas tecnologías y compartir mis conocimientos con la
              comunidad. Actualmente estoy en busca de un trabajo como
              desarrollador web, donde pueda seguir aprendiendo y creciendo
              profesionalmente.
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
          <img
            src='https://avatars.githubusercontent.com/u/89816411?v=4'
            alt='Dante Rodríguez'
            className='w-60 h-60 rounded-full mt-8'
          />
        </div>
      </motion.section>

      <motion.div
        className='py-16'
        initial='hidden'
        whileInView='visible'
        variants={fadeIn}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section
          id='experience'
          className='section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
        >
          <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3'>
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
                Realicé un proyecto de desarrollo web, con el uso de Html, Css y
                JavaScript en una empresa que brinda servicios informáticos.
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
                Realicé una página web con React, TailwindCss y Vercel, para un
                proyecto del Instituto Tecnológico Tecsup, relacionado con
                estacionamientos.
              </p>
            </li>
          </ol>
        </section>
      </motion.div>

      <motion.div
        className='py-16'
        initial='hidden'
        whileInView='visible'
        variants={fadeIn}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section
          id='projects'
          className='section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'
        >
          <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3'>
            <FaCodeBranch className='hover:transform hover:scale-110 transform origin-center transition-transform duration-500 ease-in-out cursor-pointer' />
            Proyectos
          </h2>
          <div>
            <Card
              title='Best Movie - A beautiful movie website.'
              description='Esta pagina fue creada en mi primer ciclo de estudios, esta página web similar a Netflix, fue creada con HTML, CSS y JavaScript.'
              tags={[
                { name: "HTML", icon: <FaHtml5 />, background: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt />, background: "#1572B6" },
                {
                  name: "JavaScript",
                  icon: <FaJsSquare />,
                  background: "#c49617",
                },
              ]}
              image={bestMovie}
              code='https://github.com/danidev-rc/best-movie.git'
              preview='https://danidev-rc.github.io/best-movie/'
            />
            <Card
              title='Django-based API.'
              description='Esta API fue creada para aprender Django; gracias a este proyecto gané un concurso en mi institución.'
              tags={[
                { name: "Django", icon: <DiDjango />, background: "#048c32" },
                { name: "HTML", icon: <FaHtml5 />, background: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt />, background: "#1572B6" },
              ]}
              image={biblioteca}
              code='https://github.com/danidev-rc/Biblioteca-Django.git'
              preview='https://biblioteca-django.herokuapp.com/'
            />
            <Card
              title='Inventory Manager.'
              description='Este proyecto fue creado para titulación, es un sistema de inventario con NodeJs, Express, React, Supabase y PostgreSQL.'
              tags={[
                { name: "NodeJs", icon: <FaNodeJs />, background: "#048c32" },
                { name: "Express", icon: <SiExpress />, background: "#717d7e" },
                { name: "React", icon: <FaReact />, background: "#17a1f2" },
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
              image={inventory}
              code='https://github.com/danidev-rc/gestor-inventario.git'
              preview='https://gestor-inventario.vercel.app/'
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
