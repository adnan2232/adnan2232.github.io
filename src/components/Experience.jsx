import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import { useState } from 'react';
import { close, intern_cert } from '../assets';

const ExperienceCard = ({experience})=>{

  return (
    <>
    <VerticalTimelineElement
      contentStyle={{
        background:'#1d1836', color:'#fff'
      }}
      contentArrowStyle={{
        borderRight:'7px solid #232631'
      }}
      date={experience.date}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className='flex justify-center items-center h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
          <h3
            className='text-whtie text-[23px]'
          >
            {experience.title}
          </h3>

        <div className='flex felx-col justify-between'>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{margin:'0px'}}
          >
            {experience.company_name}
          </p>
          
          <div>
            <a href={intern_cert}
              className='text-secondary font-bold italic underline cursor-pointer'
              target='_blank'
            >
              Certificate
            </a>
          </div>
          
        </div>
        
      </div>

      <ul
        className='mt-5 list-disc ml-5 space-y-2'
      > 
        {experience.points.map((point,index)=>{
          return (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px]
              pl-1 tracking-wider
              '
            >
              {point}
            </li>
          );
          })}

      </ul>
    </VerticalTimelineElement>
    </>
  );
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>
          Internship
        </h2>
      </motion.div>

      <div
        className='mt-20 flex flex-col'
      >
        <VerticalTimeline>
          {experiences.map((experience,index)=>{
            return (<ExperienceCard 
              key={index} experience={experience}
            />);
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience