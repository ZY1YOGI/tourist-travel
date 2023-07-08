// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiFillStar } from 'react-icons/ai'

interface ICard {
  img: string;
  title: string;
  region: string;
  rate: string;
  review: string
}


export default function card({ img, title, region, rate, review }: ICard) {
  return (
    <SwiperSlide className='w-60 rounded-t-3xl'>
      <img src={img} alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
      <div className='text-center mt-1.5'>
        <h2 className='text-3xl tracking-widest'>{title}</h2>
        <h3>{region}</h3>
      </div>
      <div className='flex items-center justify-center mt-3 space-x-3'>
        <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />{rate}</span>
        <h3>{review} review</h3>
      </div>
    </SwiperSlide>
  )
}
