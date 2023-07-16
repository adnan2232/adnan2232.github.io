import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import { useEffect, useState } from 'react';

const TypeWriter =  ({text,delay,incrementComplete,currentComplete})=>{
  
  const [currentTxt, setCurrentText] = useState('');
  const [currentIdx,setCurrentIdx] = useState(0);


  useEffect(()=>{
    let timeOut;
    
    if(text.length>currentIdx){
      timeOut = setTimeout(()=>{
        setCurrentText(currentTxt=>currentTxt+text[currentIdx]);
        setCurrentIdx(currentIdx=>currentIdx+1);
      },delay)
    }
    else if (typeof incrementComplete !== 'undefined') incrementComplete(currentComplete+1);


    return ()=>clearTimeout(timeOut);
  },[currentIdx])

  return <>{currentTxt}</>
}

const Hero = () => {

  const [totalComplete,setTotalComplete] = useState(0);

  return (
    
    <section className='w-full h-screen mx-auto'>
      <div className={
        `${styles.paddingX}
        absolute inset-0
        top-[120px] max-w-7xl 
        flex flex-row ml-5
        items-start gap-5
        `
      }>
        <div className='flex flex-col justify-center
        items-center mt-5'>

          <div className='bg-[#915eff] w-5 h-5 rounded-full'/>
          <div className='w-1 md:h-80 h-40 violet-gradient'/>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} lg:leading-normal -md:text-xl -md:mt-5 w-full`}>
            <TypeWriter text="Hello, it's me " delay={100} 
            incrementComplete={setTotalComplete} currentComplete={totalComplete}/>
            <span className='text-[#915eff]'>
              
              {totalComplete>0 && 
              <TypeWriter text="Adnan " delay={100} 
              incrementComplete={setTotalComplete} currentComplete={totalComplete}/>
              }
            </span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2 text-left w-3/4 -md:1/4`}>
              {totalComplete>1 && 
              <TypeWriter text="I am a dedicated computer engineer possess strong background in web development, statistics, machine learning, and deep learning."
              delay={5} 
              isComplete={(totalComplete=>setTotalComplete(totalComplete+1))}/>
              }
          </p>
        </div>
      </div>


      <ComputersCanvas/>
      <div
        className='relative
        ball-motion
        w-full flex justify-center
        items-center flex-auto
        '
      >
        <a href='#about'>
          <div
            className='
              w-[40px] h-[60px] 
             rounded-3xl border-4 border-secondary
             flex justify-center items-center p-2
            '
          >
            <motion.div
              animate = {{
                y:[0,30,0]
              }}
              transition = {{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className='w-5 h-5 rounded-full bg-secondary mb-7'
            />
          </div>
        </a>
      </div>
     
      
    </section>
  )
}

export default Hero