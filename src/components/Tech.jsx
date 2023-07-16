import React, { useContext } from 'react';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { IsMobile } from '../customHook';
import {motion,useMotionValue,useTransform} from 'framer-motion'
import {styles} from '../styles.js'
import {textVariant, fadeIn, slideIn} from '../utils/motion';

const HorizontalCards = ({techs}) => {

  const width = window.innerWidth/2;
  const padding = 10;
  const size = 150;

  function getWidth(techs) {
    const totalWidth = techs.length * width;
    const totalPadding = (techs.length - 1) * padding;
    const totalScroll = totalWidth + totalPadding;
    return totalScroll;
}


  const scrollX = useMotionValue(0);
  const scale = useTransform(scrollX, [0, 100], [0, 1]);
  const opacity = useTransform(scrollX, [0, 100], [0, 1]);
  return (<>
    <motion.div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        position: "absolute",
        top: "35%",
        marginTop: 15,
        left: "40%",
        marginLeft: -50,
        scale: scale,
        opacity: opacity
      }}
      
    />
    <motion.div
      style={{
        width: width+size,
        height: 150,
        borderRadius: 30,
        overflow: "hidden",
        position: "relative",
        transform: "translateZ(0)",
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className='auto-scroller'
        style={{
          height: 150,
          width: getWidth(techs),
          x: scrollX,
          "--speed": '50s'
        }}
        drag="x"
        dragConstraints={{
          left: -getWidth(techs) + size,
          right: 0
        }}
      >
        {techs.map((tech,index) => {
          return (
            <motion.div
              className='flex justify-center items-center green-pink-gradient'
              style={{
                width: width,
                height: 150,
                borderRadius: 20,
                backgroundColor: "#fff",
                float: "left",
                marginRight:
                  index !== techs.length - 1 ? 10 : 0
              }}
              key={index}
            >
              <img src={tech.icon} className='h-20'/>
            </motion.div>
          );
        })}

      </motion.div>
    </motion.div>
  </>);
}

const Tech = () => {
  const isMobile = useContext(IsMobile);
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>Skills.</h2>

      </motion.div>
      <div className='flex flex-row flex-wrap gap-10 justify-center -md:mt-20'>
        {!isMobile ?
          technologies.map((tech, index) => {
            return (
              <div className='w-28 h-28' key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            );
          })
          :
          <motion.div variants={slideIn('right','spring','0.1','2')}>
            <HorizontalCards techs={technologies} />
          </motion.div>

        }
      </div>
    </>
  )
}

export default Tech