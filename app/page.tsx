'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { BiWorld } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { FaBars } from 'react-icons/fa'


export default function Home() {
  const switchMenu = useRef<HTMLUListElement>(null)
  return (
    <header>
      <nav className="flex items-center justify-between py-3 px-[5%] relative sm:px-[6%] lg:px-[8%] md:py-5 border_gradient border-b-8">

        <div className="relative">
          <h1 className="font-museomoderno sm:text-lg md:text-2xl">TRAVEL TRIAL</h1>
          <img src="/logo.svg" alt="logo TRAVEL TRIAL" className="absolute w-12 -right-7 -top-2" />
        </div>

        <ul className="navigation" ref={switchMenu}>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="md:hidden" onClick={() => switchMenu.current?.classList.toggle('!flex')} role="switch">
          <FaBars size={25} className="block" />
        </button>

        <div className="text-sm sm:text-lg md:flex md:space-x-3 md:text-2xl sm:font-semibold">
          <button className="hidden md:block">Login</button>
          <button className="px-4 py-1.5 bg-[#2079FF] text-white rounded-3xl md:px-6 md:py-2.5">Sign up</button>
        </div>

      </nav>
      <div className="flex items-center mt-3 ml-3 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] w-36 text-xs">
        <BiWorld size={22} />
        Explore the World
      </div>

      <section className="hero">
        <img src="/hero.svg" alt="Hero" className="relative md:order-1" />
        <div className="space-y-3 whitespace-nowrap font-song-myung">
          <h1 className="text-7xl [text-shadow:_-7px_3px_4px_#00000030] leading-[1.1] tracking-widest">Travel with <br /> purpose, make a <br /> difference in the <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
          <p className="text-2xl">We always make our customer happy by providing <br /> as many choises as possible.</p>
        </div>
      </section>

    </header>
  )
}



{/* <div className="flex items-center mt-5 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] text-sm w-40">
<BiWorld size={22} />
Explore the World
</div> */}


// <div className="flex items-center px-5 py-3 space-x-3 rounded-[30px] w-max [box-shadow:_0px_8px_11px_#00000040]">

// <div className="flex items-center space-x-3">
//   <CiLocationOn size={35} color="FF8888" />
//   <div>
//     <button className="flex items-center text-gray-500">Location <MdOutlineKeyboardArrowDown size={20} /></button>
//     <h2>Alexandria</h2>
//   </div>
// </div>
// <span className="w-0.5 h-12 bg-gray-300 w-"></span>
// <div className="flex items-center space-x-3">
//   <CgCalendarDates size={35} color="FF8888" />
//   <div>
//     <button className="flex items-center text-gray-500">Date <MdOutlineKeyboardArrowDown size={20} /></button>
//     <h2>11 january 2024</h2>
//   </div>
// </div>

// <button className="bg-[#2079FF] text-white rounded-full p-2">
//   <CiSearch size={35} />
// </button>

// </div>


{/* <div className="absolute p-3 [box-shadow:_0px_4px_11px_#0000006e] rounded-3xl -bottom-28 bg-white z-10 -right-12">
<img src="/alexandria-in-egypt-library.jpg" alt="Alexandria-and-Pleasure-Beach" className="w-80 rounded-3xl " />
<h2 className="pt-3 text-xl text-center">Alexandria in Egypt Library</h2>
</div> */}


{/* <img src="/hero.svg" alt="Hero" className="relative" /> */ }



{/* <div className="space-y-3 whitespace-nowrap font-song-myung">
<h1 className="text-7xl [text-shadow:_-7px_3px_4px_#00000030] leading-[1.1] tracking-widest">Travel with <br /> purpose, make a <br /> difference in the <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
<p className="text-2xl">We always make our customer happy by providing <br /> as many choises as possible.</p>
</div> */}