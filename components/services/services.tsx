import Card from '@/components/card';
import { cardData } from '@/data';


export default function Services() {
  return (
    <section className='mt-12 pb-60 bg-[url(/bg-1.svg)] bg-center bg-cover space-y-12'>
      <h2 className='px-10 py-3 text-2xl font-bold rounded-br-full bg-body-light dark:bg-body-dark max-w-max text-primary'>WHAT WE SERVE</h2>

      <div className='container flex flex-col justify-between pl-8 mt-8 text-white md:flex-row'>
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
        <div className='flex flex-col justify-center mt-12 md:flex-row max-sm:items-center md:space-x-8 max-sm:space-y-8'>
          {
            cardData.map((item) => (
              <Card key={item.id} img={item.img} title={item.title} region={item.region} rate={item.rate} review={item.review} />
            ))
          }
        </div>
      </div>
      <button className='block px-12 py-3 mx-auto bg-white rounded-xl hover:bg-gray-300'>View More</button>
    </section>
  )
}