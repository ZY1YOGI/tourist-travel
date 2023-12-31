import Image from 'next/image';
import { BiWorld } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import hero from '@/public/assets/img/hero.png'
import Navbar from './Navbar';

export default function header() {


  return (
    <header>
      <Navbar />
      <div className="flex items-center mt-3 ml-3 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] w-48 text-sm" data-aos="fade-up-right" data-aos-duration="750">
        <BiWorld size={22} />
        <h1>Explore The Marsa Alam</h1>
      </div>
      <section className="hero">
        <Image src={hero} className="hero-img" alt="Hero Marsa Alam Holiday logo" width={1080} height={1080} priority />
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up-right" data-aos-duration="1500">Travel with <br /> ma-holiday <br /> Fun is better <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
          <p className="hero-description" data-aos="fade-up" data-aos-duration="750">We always make our customer happy by providing <br /> as many choices as possible.</p>
          <div className="determine">
            <div className="flex items-center space-x-3">
              <CiLocationOn className="determine-icon" color="FF8888" />
              <div>
                <button className="flex items-center w-full text-gray-500 dark:text-gray-100">Location <MdOutlineKeyboardArrowDown size={20} /></button>
                <h2>Marsa Alam</h2>
              </div>
            </div>
            <span className="w-0.5 h-12 bg-gray-300"></span>
            <div className="flex items-center space-x-3">
              <CgCalendarDates className="determine-icon" color="FF8888" />
              <div>
                <button className="flex items-center w-full text-gray-500 dark:text-gray-100">Date <MdOutlineKeyboardArrowDown size={20} /></button>
                <h2>11 january 2024</h2>
              </div>
            </div>
            <button className="determine-search" data-aos="fade-right" data-aos-duration="750">
              <CiSearch className="determine-icon" data-aos="fade-up" data-aos-duration="1000" />
            </button>
          </div>
        </div>
      </section>
    </header>
  )
}
