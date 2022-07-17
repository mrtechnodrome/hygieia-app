import React from 'react';
import logo from '../img/logo.png';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config';
import {MdShoppingBasket,MdAdd,MdLogout } from "react-icons/md";
import avatar from '../img/avatar.png';
import {Link} from 'react-router-dom';
import { async } from '@firebase/util';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from "react";
import { Container } from 'postcss';


export const Header = () => {

  const firebaseAuth=getAuth(app);
  const provider=new GoogleAuthProvider();
  const[{user},dispatch]=useStateValue();
  const [isMenu,setIsMenu] = useState(false);
    const login =async () => {
        if (!user){
          const {user: {refreshToken,providerData},
      }= await signInWithPopup(firebaseAuth,provider);
        dispatch({
          type:actionType.SET_USER,
          user:providerData[0],
        });
        localStorage.setItem('user',JSON.stringify(providerData[0]));
        }else{
          setIsMenu(!isMenu);
        }
    };
    const logout=()=>{
      setIsMenu(false)
      localStorage.clear()
      dispatch({
        type:actionType.SET_USER,
        user:null
      })
    }
  return (
    <header div className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16'>
{/* desktop & tablet */}
            {/* logo */}
          <div className='hidden md:flex w-full h-full items-center justify-between bg-primary'>
            <Link to={"/"} className='flex items-center gap-0.5  '>
           <img src={logo} className=" w-8 object-cover "alt='logo' />
           <p className="text-headingcolor text-xl font-bold">ygieia</p>
           </Link>
           {/* categories */}
           <div className='flex justify-center items-center gap-8 '>
           <motion.ul
           
          className='flex content-center gap-8 justify-content-center'>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Categories</li>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Best Sellers</li>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Deals & coupons</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Offers</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>All New</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Customer Support</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>About us</li>
            </motion.ul>
            
            {/* cart logo */} 
           <div className='relative flex-items-center justify-center'>
           <MdShoppingBasket className='text-text-Color text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-3 w-4 h-4 rounded-full bg-cartnumbg flex items-center justify-center'>
            <p className='text-sm text-white font-semibold'>2</p>
            </div>
            </div>
            {/* avatar  */}
            <div className='relative'>
            <motion.img
            whileTap={{scale:0.6}}
            src= {user?user.photoURL:avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' 
            alt="userprofile"
            onClick={login} />
           {
            isMenu &&(
              <motion.div 
              initial={{opacity:0, scale:0.6}}
              animate={{opacity:1, scale:1}}
              exit={{opacity:0, scale:0.6}}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
              {
                user && user.email==='krishna15112002@gmail.com' &&(
                  <Link to={'/createItem'}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-125 transition-all duration-100 ease-in-out text-textcolor text-base" onClick={()=>setIsMenu(false)}>New Item <MdAdd /></p></Link>
                

                )
              }
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-125 transition-all duration-100 ease-in-out text-textcolor text-base" onClick={logout}>logout<MdLogout /></p>

            </motion.div>
            )
           }
            </div>
            </div>
            </div>
      
{/* mobile */}
<div className='flex items-center justify-between md:hidden w-full h-full bg-primary'>


           <div className='relative flex-items-center justify-center'>
           <MdShoppingBasket className='text-text-Color text-3xl cursor-pointer' />
            <div className='absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartnumbg flex items-center justify-center'>
            <p className='text-sm text-white font-semibold'>2</p>
            </div>
            </div>
            <Link to={"/"} className='flex items-center gap-0.5  '>
           <img src={logo} className=" w-8 object-cover "alt='logo' />
           <p className="text-headingcolor text-xl font-bold">ygieia</p>
           </Link>
           <div className='relative'>
            <motion.img
            whileTap={{scale:0.6}}
            src= {user?user.photoURL:avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' 
            alt="userprofile"
            onClick={login} />
           {
            isMenu &&(
              <motion.div 
              initial={{opacity:0, scale:0.6}}
              animate={{opacity:1, scale:1}}
              exit={{opacity:0, scale:0.6}}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
              {
                user && user.email==='krishna15112002@gmail.com' &&(
                  <Link to={'/createItem'}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-125 transition-all duration-100 ease-in-out text-textcolor text-base " onClick={()=>setIsMenu(false)}>New Item <MdAdd /></p></Link>
                

                )
              }

            <ul
            className='flex flex-col '>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>Categories</li>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>Best Sellers</li>
           <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>Deals & Offers</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>All New</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>Customer Support</li>
            <li className='text-base text-headingcolor style={{cursor:"pointer"}} hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-125' onClick={()=>setIsMenu(false)}>About us</li>
            </ul>
                <p className="m-2 p-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textcolor text-base justify-center bg-slate-200" 
                onClick={logout}>logout<MdLogout /></p>

            </motion.div>
            )
           }
            </div>

</div>
    </header>
  )
}
export default Header;
