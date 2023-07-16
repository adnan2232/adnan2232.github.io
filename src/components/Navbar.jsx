import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {

  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false);

  return (
    <nav 
    className={
      `${styles.paddingX}
      w-full flex items-center
      py-2 md:py-5 fixed top-0 z-20
      bg-primary bg-opacity-100
      `
      }
    >
      <div className='w-full flex justify-between
      items-center max-w-20xl mx-auto'>
        <Link
          to="/" 
          className='flex items-center gap-2'
          onClick={()=>{
            setActive('');
            window.scrollTo(0,0);
          }}       
        >
            <img src={logo} alt='logo'
            className='w-16 h-16 object-cover'></img>
            <p className='text-white text-[18px]
            font-bold cursor-pointer'>
              Adnan Shaikh
            </p>
        </Link>
          <div className='-md:hidden mx-2 md:font-bold md:text-lg text-sm color-red'>
            Under Construction
          </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>{
            return (
            <li key={link.id} className={`
            ${active === link.title? 'text-white':'text-secondary'} 
            hover:text-white text-[18px]
            font-medium cursor-pointer
            `}
            onClick={()=>{
              setActive(link.title)
            }}>
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
            )
          })}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end item-center'>
          <img
          src={toggle?close:menu}
          alt='menu'
          className="w-[28px] h-[28px] object-containe cursor-pointer"
          onClick={()=> setToggle(!toggle)}
          />
          
          <div className={
            `${toggle?'flex':'hidden'}
            p-6 black-gradient absolute
            top-20 right-0 mx-4 my-2 
            min-w-[140px] z-10 rounded-xl
            `
            }>
              <ul className='list-none flex sm:hidden flex-col gap-2'>
                {navLinks.map((link)=>{
                  return (
                  <li key={link.id} className={`
                  ${active === link.title? 'text-white':'text-secondary'} 
                  hover:text-white text-[14px]
                  font-medium font-poppins cursor-pointer
                  `}
                  onClick={()=>{
                    setActive(link.title)
                    setToggle(!toggle)
                  }}>
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                  )
                })}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar