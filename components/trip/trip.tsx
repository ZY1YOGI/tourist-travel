import React from 'react'

export default function Trip() {
  return (
    <section className='bg-[url(/bg-2.svg)]  bg-cover -mt-52 bg-top pt-48 text-white'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <img src="/car.svg" alt="" className='w-full' />
        </div>
        <div className='space-y-3 text-center md:w-1/2'>
          <h2 className='text-5xl lg:text-8xl md:text-6xl font-song-myung'>Your trip <br /> Safari today!</h2>
          <p className='tracking-wider text-[#FCC103] text-sx'>
            Welcome to our jungle safari experience! Our tours <br />
            offer a unique opportunity to witness the natural <br />
            beauty and wildlife of the jungle up close. With <br />
            experienced guides and well-planned itineraries, we <br />
            a lifetime!
          </p>
        </div>
      </div>

      <div className='container flex flex-col mt-12 text-white md:flex-row max-sm:items-center md:space-x-8 max-sm:space-y-8'>


      </div>


    </section>
  )
}
