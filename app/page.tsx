import { BiWorld } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'

export default function Home() {
  return (
    <header>
      <nav className="flex items-center justify-between px-12 py-3">
        <div className="relative flex font-semibold">
          <h1 className="text-xl text-center font-museomoderno">TRAVEL TRIAL</h1>
          <img src="/logo.svg" alt="logo TRAVEL TRIAL" className="absolute -right-8 -top-1.5" />
        </div>
        <ul className="flex justify-between space-x-8 font-semibold font-mukta">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="space-x-3 font-semibold font-mukta">
          <button>Login</button>
          <button className="px-5 py-2 bg-[#2079FF] text-white rounded-3xl">Sign up</button>
        </div>
      </nav>
      <div className="flex items-center mt-5 bg-[#FFCCCC] px-3 py-1.5 rounded-3xl text-[#FF6464] text-sm w-40">
        <BiWorld size={22} />
        Explore the World
      </div>
      <section className="container flex items-center">
        <div>
          <h1 className="text-7xl">Travel with purpose, make a difference in the world <MdFlightTakeoff clas/></h1>
        </div>
        <img src="/hero.svg" alt="Hero" className="" />
      </section>
    </header>
  )
}
