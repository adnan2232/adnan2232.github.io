import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 700
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative object-cover"
      >

        <div className='flex flex-col h-full gap-3'>
          <img
            src={project.image}
            alt={project.name}
            className='w-full rounded-2xl h-[230px] object-cover'
          />
          <div
            className='absolute inset-0 h-full flex justify-end m-6 card-img_hover'
          >
            <a href={project.source_code_link} target='_blank'
              className='rounded-full black-gradient w-8 h-8
              flex justify-center items-center cursor-pointer
              '
            >
              <img src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              >
              </img>
            </a>
          </div>

          <div className='mt-2'>
            <h3
              className='text-white font-bold text-[24px]'
            >{project.name}</h3>
            <p
              className='mt-2 text-secondary text-[14px]'
            >{project.description}</p>
          </div>

          <div
            className='flex justify-start flex-wrap gap-2'
          >
            {project.tags.map((tag, index) => {
              return (
                <p key={tag.name}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              );
            })}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>

      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Something about projects
        </motion.p>
      </div>

      <div className='mt-20 flex flex-row flex-wrap gap-7 justify-center'>
        {
          projects.map((project, index) => {
            return (<ProjectCard project={project} index={index} key={`project-${index}`} />)
          })
        }
      </div>
    </>
  )
}

export default Works