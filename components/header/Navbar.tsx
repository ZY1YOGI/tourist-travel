"use client";

import { useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa'
import TagManager from 'react-gtm-module';
import Aos from "aos";
import { MdDarkMode } from 'react-icons/md'
import Link from 'next/link';

export default function Navbar() {
  const switchMenu = useRef<HTMLUListElement>(null)

  useEffect(() => {
    Aos.init({
      delay: 0,
      duration: 300,
    })
    TagManager.initialize({ gtmId: 'GTM-NQVG4XV9' });
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
    <nav className="flex items-center justify-between py-3 px-[5%] relative sm:px-[6%] lg:px-[8%] md:py-5 border_gradient border-b-8">
      <Link href="/" className="relative">
        <h1 className="font-museomoderno sm:text-lg md:text-2xl dark:text-white" data-aos="fade-right">MA-HOLIDAY</h1>
        <svg width="56" height="29" viewBox="0 0 56 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-12 -right-7 -top-2" data-aos="fade-left" data-aos-duration="1500">
          <path d="M55.6314 14.8267L53.9335 14.1257C42.962 9.5956 30.7319 16.95 29.5892 28.7648L26.1439 19.705C24.5236 15.4442 27.6062 10.8624 32.1634 10.7577L37.6586 10.6315L22.2533 10.9722L19.6858 3.82297L19.4929 5.7026C19.1857 8.69612 16.6641 10.9722 13.6549 10.9722L0.97935 10.9722C11.9699 -1.56775 30.7393 -3.58629 44.1449 6.33002L55.6314 14.8267Z" fill="#2079FF" />
        </svg>
      </Link>
      <ul className="navigation" ref={switchMenu}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><Link href="/contact-us">Contact</Link></li>
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
  )
}

