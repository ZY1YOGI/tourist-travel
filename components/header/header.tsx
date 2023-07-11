'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa'
// import TagManager from 'react-gtm-module';
import Aos from "aos";
import { BiWorld } from 'react-icons/bi'
import { MdDarkMode, MdFlightTakeoff } from 'react-icons/md'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


export default function header() {
  const switchMenu = useRef<HTMLUListElement>(null)

  useEffect(() => {
    Aos.init({
      delay: 0,
      duration: 300,
    })
    // TagManager.initialize({ gtmId: 'GTM-NV54S9F' });
    const theme = localStorage.getItem("theme") ?? localStorage.setItem("theme", "light")
    if (theme === "light") {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    }

  })


  return (
    <header>
      <nav className="flex items-center justify-between py-3 px-[5%] relative sm:px-[6%] lg:px-[8%] md:py-5 border_gradient border-b-8">
        <div className="relative">
          <h1 className="font-museomoderno sm:text-lg md:text-2xl dark:text-white" data-aos="fade-right">MA-HOLIDAY</h1>
          <img src="/logo.svg" alt="TRAVEL TRIAL" className="absolute w-12 -right-7 -top-2" data-aos="fade-left" data-aos-duration="1500"/>
        </div>
        <ul className="navigation" ref={switchMenu}>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
          <button className='btn-theme' role="switch" id="switch-theme" aria-checked="true" onClick={() => localStorage.getItem('theme') === 'light' ? (document.documentElement.className = 'dark', document.documentElement.setAttribute('data-theme', 'dark'), localStorage.setItem('theme', 'dark')) : (document.documentElement.className = 'light', document.documentElement.setAttribute('data-theme', 'light'), localStorage.setItem('theme', 'light'))}>
            <MdDarkMode size={28} />
          </button>
        </ul>
        <button className="md:hidden" onClick={() => switchMenu.current?.classList.toggle('!flex')} role="switch">
          <FaBars size={25} className="block dark:text-white" />
        </button>
        <div className="text-sm sm:text-lg md:flex md:space-x-3 md:text-2xl sm:font-semibold">
          <button className="hidden md:block dark:text-white">Login</button>
          <button className="px-4 py-1.5 bg-[#2079FF] text-white rounded-3xl md:px-6 md:py-2.5">Sign up</button>
        </div>
      </nav>
      <div className="flex items-center mt-3 mb-1 ml-3 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] w-36 text-xs" data-aos="fade-up-right" data-aos-duration="750">
        <BiWorld size={22} />
        Explore the World
      </div>
      <section className="hero">
        <Image src="/hero.svg" className="hero-img" alt="Hero" width={1080} height={1080} priority={true}/>
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up-right" data-aos-duration="1500">Travel with <br /> purpose, make a <br /> difference in the <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
          <p className="hero-description" data-aos="fade-up" data-aos-duration="750">We always make our customer happy by providing <br /> as many choices as possible.</p>
          <div className="determine">
            <div className="flex items-center space-x-3">
              <CiLocationOn className="determine-icon" color="FF8888" />
              <div>
                <button className="flex items-center text-gray-500 dark:text-gray-100">Location <MdOutlineKeyboardArrowDown size={20} /></button>
                <h2>Alexandria</h2>
              </div>
            </div>
            <span className="w-0.5 h-12 bg-gray-300 w-"></span>
            <div className="flex items-center space-x-3">
              <CgCalendarDates className="determine-icon" color="FF8888" />
              <div>
                <button className="flex items-center text-gray-500 dark:text-gray-100">Date <MdOutlineKeyboardArrowDown size={20} /></button>
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
