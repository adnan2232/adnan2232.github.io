import {React,useReducer,useRef, useState} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import {emailjs_constant} from '../../env'

function formReducer(state,action){
  switch(action.type){
    case 'change':{
      return {
        ...state,
        ...action.newChange
      }
    }
    case 'submit':{
      return {
        ...state,
        ...action.newChange
      }
    }
    default:{
      throw Error('option not found')
    }
  }
}


const Contact = () => {

  const formRef = useRef();
  const [form,dispatch] = useReducer(formReducer,{
    name:'',
    email:'',
    message:'',
  });

  const [loading,setLoading] = useState(false);

  function handleChange(e){
    const {name,value} = e.target;
    dispatch({
      type:'change',
      newChange:{[name]:value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault();

    setLoading(true);

    try{
      const response = await emailjs.send(
        emailjs_constant.service_id,
        emailjs_constant.template_id,
        {
          from_name:form.name,
          to_name:'Adnan',
          from_email:form.email,
          to_email:'aa2232786@gmail.com',
          message:form.message
        },
        emailjs_constant.public_key
      );
  
      setLoading(false);
      dispatch({
        type:'submit',
        newChange:{
          name:'',
          email:'',
          message:''
        }
      })
      alert(`Thank you for reaching me out. I will get back to you as soon as possible`);
    }
    catch(err){
      console.log(error);
      setLoading(false);
      alert('Something went wrong');
    }
    

  }
  return (
    <div className='xl:mt-12 xl:flex-row
      flex-col-reverse flex gap-10 overflow-hidden w-full justify-center
    '>
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>

        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>

            <input type='text' name='name' value={form.name}
              onChange={handleChange} placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium
              '
            >
            </input>
          </label>

          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>

            <input type='email' name='email' value={form.email}
              onChange={handleChange} placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium
              '
            >
            </input>
          </label>

          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>

            <textarea rows={7}  name='message' value={form.message}
              onChange={handleChange} placeholder="Let me know if you have something to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium
              '
            >
            </textarea>
          </label>

          <div className='flex justify-center items-center'>
          <button className='bg-tertiary py-3 px-8 outline-none
            w-fit text-white font-bold shadow-md shadow-primary
            rounded-xl hover:shadow-indigo-500/40 hover:shadow-md
          '
            onClick={handleSubmit}
          >
              {loading?'Sending...':'Send'}
          </button>
          </div>
          
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      > 
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default Contact