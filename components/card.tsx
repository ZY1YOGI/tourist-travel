import Image from 'next/image';
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
    <div className='w-60 rounded-t-3xl'>
      <Image src={img} alt={title} className='shadow-2xl p-0.5 rounded-lg shadow-gray-900' width={500} height={500} data-aos="zoom-in" data-aos-duration="1250"/>
      <div className='text-center mt-1.5'>
        <h2 className='text-3xl tracking-widest' data-aos="fade-up" data-aos-duration="750">{title}</h2>
        <h3>{region}</h3>
      </div>
      <div className='flex items-center justify-center mt-3 space-x-3 shadow-2xl shadow-indigo-500'>
        <span className='flex px-3 bg-gray-300 rounded-lg' data-aos="fade-right" data-aos-duration="500"><AiFillStar color='FFC700' size={25} />{rate}</span>
        <h3>{review} review</h3>
      </div>
    </div>
  )
}
