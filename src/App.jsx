import {BrowserRouter} from 'react-router-dom';
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from './components'
import {motion,useScroll} from 'framer-motion'
import { staggerContainer } from './utils/motion';
import {styles} from './styles'
import { IsMobile } from './customHook';
import { useContext } from 'react';

const SectionWrapper = ({Compo,idName})=>{

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{once:true, amount:0.25}}
      className={`${styles.padding}
        max-w-7xl mx-auto relative z-0
      `}
    >

      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Compo/>
    </motion.section>
  );
}

const App = ()=> {
  const  {scrollYProgress} = useScroll();
  const isMobile = useContext(IsMobile);
  return (
    <>
    
    <BrowserRouter>
      <motion.div style={{scaleX:scrollYProgress}}
        className='w-screen top-0 left-0 right-0 h-2 origin-left 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        fixed z-[100]'
      />
      
        <div className='relative z-0 bg-primary'>
            {!isMobile && <StarsCanvas/>}
   
            <Navbar/>
            <Hero/>    
        
          <SectionWrapper Compo={About} idName='about'/>
          <SectionWrapper Compo={Experience} idName='experience'/>
          <SectionWrapper Compo={Tech} idName='tech'/>
          <SectionWrapper Compo={Works} idName='work'/>
          <div className='relative z-0'>
            {isMobile && <StarsCanvas/>}
            <SectionWrapper Compo={Contact} idName='contact'/>
          </div>
          
            
        </div>
        
    </BrowserRouter>
    </>
  )
}

export default App
