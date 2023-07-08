'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { BiWorld } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaBars, FaFacebook, FaLink, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { AiOutlineSend, AiFillStar } from 'react-icons/ai'

export default function Home() {
  const switchMenu = useRef<HTMLUListElement>(null)
  return (
    <>
      <header>
        <nav className="flex items-center justify-between py-3 px-[5%] relative sm:px-[6%] lg:px-[8%] md:py-5 border_gradient border-b-8">
          <div className="relative">
            <h1 className="font-museomoderno sm:text-lg md:text-2xl dark:text-white">TRAVEL TRIAL</h1>
            <img src="/logo.svg" alt="TRAVEL TRIAL" className="absolute w-12 -right-7 -top-2" />
          </div>
          <ul className="navigation" ref={switchMenu}>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="md:hidden" onClick={() => switchMenu.current?.classList.toggle('!flex')} role="switch">
            <FaBars size={25} className="block dark:text-white" />
          </button>
          <div className="text-sm sm:text-lg md:flex md:space-x-3 md:text-2xl sm:font-semibold">
            <button className="hidden md:block dark:text-white">Login</button>
            <button className="px-4 py-1.5 bg-[#2079FF] text-white rounded-3xl md:px-6 md:py-2.5">Sign up</button>
          </div>
        </nav>
        <div className="flex items-center mt-3 mb-1 ml-3 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] w-36 text-xs">
          <BiWorld size={22} />
          Explore the World
        </div>
        <section className="hero">
          <Image src="/hero.svg" className="hero-img" alt="Hero" width={1080} height={1080} />
          <div className="hero-content">
            <h1 className="hero-title">Travel with <br /> purpose, make a <br /> difference in the <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
            <p className="hero-description">We always make our customer happy by providing <br /> as many choices as possible.</p>
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
              <button className="determine-search">
                <CiSearch className="determine-icon" />
              </button>
            </div>
          </div>
        </section>

      </header>



      <section className='mt-12 bg-[url(/bg-1.png)] bg-center bg-cover space-y-12'>
        <h2 className='bg-body-light dark:bg-body-dark px-10 py-3 rounded-br-full max-w-max text-primary text-2xl font-bold'>WHAT WE SERVE</h2>


        <div className='container text-white mt-8 flex justify-between flex-col md:flex-row pl-8'>
          <h1 className='text-6xl font-song-myung'>Top <br /> Values <br /> For You</h1>
          <div className='max-sm:mt-6'>
            <h3 className='text-4xl font-song-myung'>Lots of Choices</h3>
            <p className='pl-3.5 pt-2.5'>
              Discover your dream <br />
              destination from our <br />
              selection of over 460 <br />
              Various sites <br />
              all over Egypt.
            </p>
          </div>
          <div>
            <h3 className='text-4xl font-song-myung'>Best Your Guide</h3>
            <p className='pl-3.5 pt-2.5'>
              Experience your <br />
              destination like a local <br />
              with our expert tour <br />
              guide, who has over 15 <br />
              years of experience in <br />
              delivering unforgettable <br />
              travel experiences
            </p>
          </div>
          <div>
            <h3 className='text-4xl font-song-myung'>Easy by Booking</h3>
            <p className='pl-3.5 pt-2.5'>
              Book your next adventure <br />
              hassle-free with our easy <br />
              and fast ticket purchase <br />
              process. Start planning <br />
              your journey today !
            </p>
          </div>
        </div>



        <div className='container text-white'>
          <h1 className='text-5xl font-song-myung md:text-6xl max-sm:pl-3.5'>Explore Top Destinations</h1>

          <div className='mt-12 flex flex-col md:flex-row max-sm:items-center md:space-x-8 max-sm:space-y-8'>

            <div className='w-60 rounded-t-3xl'>
              <img src="/img-1.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800'/>
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Alexandria</h2>
                <h3>Egypt, Alexandria</h3>
              </div>
              <div className='flex justify-center mt-3 items-center space-x-3'>
                <span className='flex bg-gray-300 px-3 rounded-lg'><AiFillStar color='FFC700' size={25}/>4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
            <div className='w-60 rounded-t-3xl'>
              <img src="/img-2.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800'/>
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Cairo</h2>
                <h3>Egypt, cairo</h3>
              </div>
              <div className='flex justify-center mt-3 items-center space-x-3'>
                <span className='flex bg-gray-300 px-3 rounded-lg'><AiFillStar color='FFC700' size={25}/>4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
            <div className='w-60 rounded-t-3xl'>
              <img src="/img-3.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800'/>
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Luxor</h2>
                <h3>Egypt, luxor</h3>
              </div>
              <div className='flex justify-center mt-3 items-center space-x-3'>
                <span className='flex bg-gray-300 px-3 rounded-lg'><AiFillStar color='FFC700' size={25}/>4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
          </div>

        </div>

      </section>




      <footer className="relative z-10 dark:text-white pt-20 pb-8 lg:pt-[120px] lg:pb-16 max-lg:px-5 border-t-4 border_gradient">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-8 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <Link href="/" className="flex items-center mb-3 space-x-3">
                  <h1 className="relative text-3xl font-bold dark:text-white" data-aos="fade-right" data-aos-delay="350">TRAVEL TRIAL <img src="/logo.svg" alt="logo TRAVEL TRIAL" className="absolute w-12 -right-6 -top-2" /></h1>
                </Link>
                <p className="mb-6 text-base text-gray-800 font-song-myung dark:text-gray-300">
                  We always make our customer <br />
                  happy by providing as many <br />
                  choices as possible.
                </p>
                <div className="w-full mb-6">
                  <div className="flex items-center">
                    <Link title='facebook' href="/" target="_blank" className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                      <FaFacebook />
                    </Link>
                    <Link title='twitter' href="/" target="_blank" className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                      <FaTwitter />
                    </Link>
                    <Link title='youtube' href="/" target="_blank" className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                      <FaYoutube />
                    </Link>
                    <Link title='linkedin' href="/" target="_blank" className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                      <FaLinkedin />
                    </Link>
                  </div>

                </div>
                <div className="space-y-3">
                  <p className="flex items-center text-sm font-medium">
                    <span className="mr-3 text-primary">
                      <svg width="19" height="21" viewBox="0 0 19 21" fill='currentColor'>
                        <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                        <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                        <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                      </svg>
                    </span>
                    <span className="tracking-widest">(+20) 000000000</span>
                  </p>
                  <p className="flex items-center text-sm font-medium ">
                    <span className="mr-3 text-primary">
                      <svg width="19" height="21" viewBox="0 0 19 21" fill='currentColor'>
                        <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                        <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                        <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                      </svg>
                    </span>
                    <span className="tracking-widest">(+20) 000000000</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h2 className="mb-6 text-3xl font-bold">About</h2>
                <ul>
                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">Features</a></li>
                  <li><a href="#" className="footer-link">News</a></li>
                  <li><a href="#" className="footer-link">Menu</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h2 className="mb-6 text-3xl font-bold">Company</h2>
                <ul>
                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">Partner with us</a></li>
                  <li><a href="#" className="footer-link">FAQ</a></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h2 className="mb-6 text-3xl font-bold">Support</h2>
                <ul>
                  <li><a href="#" className="footer-link">Account</a></li>
                  <li><a href="#" className="footer-link">Support Center</a></li>
                  <li><a href="#" className="footer-link">Feedback</a></li>
                  <li><a href="#" className="footer-link">Contact us</a></li>
                  <li><a href="#" className="footer-link">Accessibility</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <h2 className="mb-3 text-2xl font-bold ">Get in Touch</h2>
              <p className="mb-3 text-base font-song-myung">
                Question or feedback? <br />
                We'd love to hear from you
              </p>
              <div className="flex items-center px-5 py-1.5 bg-white rounded-full [box-shadow:_0px_8px_11px_#00000040]">
                <input type="email" name="contact" className="w-full bg-transparent border-none outline-none" placeholder="Email Address" />
                <AiOutlineSend size={40} className="p-1 text-white rounded-full cursor-pointer bg-primary" />
              </div>

              <p className="mt-5 text-base">&copy; 2023 All rights reserved for TRAVEL TRIAL</p>

            </div>
          </div>
        </div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z" fill="url(#paint0_linear_1179_5)" />
            <defs>
              <linearGradient id="paint0_linear_1179_5" x1="76.5" y1="281" x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </footer>

    </>
  )
}


{/* <div className="absolute p-3 [box-shadow:_0px_4px_11px_#0000006e] rounded-3xl -bottom-28 bg-white z-10 -right-12">
<img src="/alexandria-in-egypt-library.jpg" alt="Alexandria-and-Pleasure-Beach" className="w-80 rounded-3xl " />
<h2 className="pt-3 text-xl text-center">Alexandria in Egypt Library</h2>
</div> */}