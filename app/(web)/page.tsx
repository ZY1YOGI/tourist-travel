import type { Metadata } from 'next'
import { Footer, Header, Services, Trip, OurExperience } from '@/components/web';

export const metadata:Metadata = {
  title: 'Marsa Alam Holiday',
  description: 'Trips to Marsa Alam in Egypt The best experience of a trip to Marsa Alam - sea, desert, historical - movement',
}


export default function Home() {
  return (
    <>
      <Header />

      <Services />

      <Trip />

      <div className='px-12 py-8 mx-auto text-center shadow-2xl md:px-28 max-w-max md:py-12 rounded-3xl whitespace-nowrap md:my-3 dark:text-white'>
        <h1 className='text-xl md:text-3xl'>
          Prepare Yourself & Let's Explore <br />
          The beauty of Marsa Alam
        </h1>
        <p className='max-sm:text-xs'>We have many special offers especially for you.</p>
        <button className='block px-12 py-3 mx-auto mt-8 text-white bg-primary rounded-xl hover:bg-primary/70'>Get Started</button>
      </div>

      <OurExperience />

      <Footer />
    </>
  )
}