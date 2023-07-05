import { BiWorld } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


export default function Home() {
  return (
    <header>
      <nav className="flex items-center justify-between px-[12%] py-5">
        <div className="relative flex font-semibold">
          <h1 className="text-4xl text-center font-museomoderno">TRAVEL TRIAL</h1>
          <img src="/logo.svg" alt="logo TRAVEL TRIAL" className="absolute -right-8 -top-1.5" />
        </div>
        <ul className="flex justify-between space-x-8 text-3xl font-semibold ">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="space-x-6 text-2xl font-semibold ">
          <button>Login</button>
          <button className="px-5 py-2 bg-[#2079FF] text-white rounded-3xl">Sign up</button>
        </div>
      </nav>


      <section className="container flex items-center justify-center mt-20 -space-x-20">
        <div className="space-y-12">
          <div className="space-y-3 whitespace-nowrap font-song-myung">
            <h1 className="text-7xl [text-shadow:_-7px_3px_4px_#00000030] leading-[1.1] tracking-widest">Travel with <br /> purpose, make a <br /> difference in the <br /> world <MdFlightTakeoff className="inline-block" color="2079FF" /></h1>
            <p className="text-2xl">We always make our customer happy by providing <br /> as many choises as possible.</p>
          </div>

          <div className="flex items-center px-5 py-3 space-x-3 rounded-[30px] w-max [box-shadow:_0px_8px_11px_#00000040]">

            <div className="flex items-center space-x-3">
              <CiLocationOn size={35} color="FF8888" />
              <div>
                <button className="flex items-center text-gray-500">Location <MdOutlineKeyboardArrowDown size={20} /></button>
                <h2>Alexandria</h2>
              </div>
            </div>
            <span className="w-0.5 h-12 bg-gray-300 w-"></span>
            <div className="flex items-center space-x-3">
              <CgCalendarDates size={35} color="FF8888" />
              <div>
                <button className="flex items-center text-gray-500">Date <MdOutlineKeyboardArrowDown size={20} /></button>
                <h2>11 january 2024</h2>
              </div>
            </div>

            <button className="bg-[#2079FF] text-white rounded-full p-2">
              <CiSearch size={35} />
            </button>

          </div>

        </div>

        <div className="relative">
          <img src="/hero.svg" alt="Hero" className="relative" />

          <div className="absolute p-3 [box-shadow:_0px_4px_11px_#0000006e] rounded-3xl -bottom-28 bg-white z-10 -right-12">
            <img src="/alexandria-in-egypt-library.jpg" alt="Alexandria-and-Pleasure-Beach" className="w-80 rounded-3xl" />
            <h2 className="pt-3 text-xl text-center">Alexandria in Egypt Library</h2>
          </div>

        </div>

      </section>


    </header>
  )
}


{/* <div className="flex items-center mt-5 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] text-sm w-40">
<BiWorld size={22} />
Explore the World
</div> */}