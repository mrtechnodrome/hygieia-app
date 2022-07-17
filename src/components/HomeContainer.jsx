import React from 'react';
import delivery from'../img/delivery.png';
import heroBg from '../img/heroBg.png';
import { heropData } from '../utils/data';


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full overflow-x-hidden'id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-200 px-4 py-1 rounded-full'> 
      <p className='text-base text-orange-500 font-semibold'>Scheduled Delivery</p>
      <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
        <img src={delivery} className="w-full h-full object-contain" alt="delivery" />
      </div>
      </div> 
      <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingcolor '>
        The Automated Delivery of <span className='text-orange-600 text-[3rem] md:text-[5.5rem]'>All Your Monthly Essentials</span></p>
        <p className='text-base text-textcolor text-center md:text-left md:w-[95%]'>Eliminate the hassle of shopping at a supermarket after a long day. Your monthly groceries are delivered to your doorstep every week.</p>
        <button type='button' className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100" >Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        
        <img src={heroBg} className="ml-auto h-400 w-full lg:w-auto lg:h-650 top-16 right-16 " alt="background" />
        <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center py-4 gap-4 lg:px-32 flex-wrap'>
            {heropData&&heropData.map(n=>(
                <div key={n.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'>
                <img src={n.imageSrc} className="w-20 lg:w-40  -mt-10 lg:-mt-20  " alt="icecream" />
                <p className='text-base lg:text-xl font-semibold text-textcolor mt-2 lg:mt-4'>{n.name}</p>
                <p className=' text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                <p className='text-sm font-semibold text-headingcolor'><span className='text-xs text-red-600'>₹</span>{n.price}</p>
            </div>
            ))
            }

        </div> 
      </div>
    </section>
  )
}

export default HomeContainer