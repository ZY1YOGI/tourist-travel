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

import hero from '@/public/hero.png'

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
          <svg width="56" height="29" viewBox="0 0 56 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-12 -right-7 -top-2" data-aos="fade-left" data-aos-duration="1500">
            <path d="M55.6314 14.8267L53.9335 14.1257C42.962 9.5956 30.7319 16.95 29.5892 28.7648L26.1439 19.705C24.5236 15.4442 27.6062 10.8624 32.1634 10.7577L37.6586 10.6315L22.2533 10.9722L19.6858 3.82297L19.4929 5.7026C19.1857 8.69612 16.6641 10.9722 13.6549 10.9722L0.97935 10.9722C11.9699 -1.56775 30.7393 -3.58629 44.1449 6.33002L55.6314 14.8267Z" fill="#2079FF" />
          </svg>
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
        <Image src={hero} className="hero-img" alt="Hero Marsa Alam Holiday" width={1080} height={1080} priority />
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
