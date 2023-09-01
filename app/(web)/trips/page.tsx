import type { Metadata } from 'next'
import Footer from '@web-components/footer/footer';
import Navbar from '@web-components/header/Navbar';
import { cardData } from '@/data';
import Card from '@web-components/card';


export const metadata: Metadata = {
  title: 'Marsa Alam Holiday - Trips',
  description: 'Trips to Marsa Alam in Egypt The best experience of a trip to Marsa Alam You can choose the prices that suit you We have a large list of trips to Marsa Alam',
}


export default function Trips() {
  return (
    <>
      <Navbar />

      <main>
        <div className='mt-8 space-y-3 text-center'>
          <h1 className='text-3xl font-song-myung md:text-5xl whitespace-nowrap dark:text-white'>Marsa Alam Holiday Trips</h1>
          <p className='font-merienda-one px-1.5 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque atque tenetur modi nisi doloribus facere</p>
        </div>



        <div className='grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
          {
            cardData.map((item) => (
              <Card id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} tags={item.tags} />
            ))
          }
        </div>
      </main>

      <Footer />
    </>
  )
}