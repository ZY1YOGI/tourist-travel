import Card from '@/components/card';
import { cardData } from '@/data';
import Link from 'next/link';


export default function Services() {
  return (
    <section className='mt-12 pb-60 bg-[url(/assets/bg/bg-1.jpg)] bg-center bg-cover space-y-12' id='services'>
      <h2 className='px-10 py-3 text-2xl font-bold rounded-br-full bg-body-light dark:bg-body-dark max-w-max text-primary' data-aos="fade-down-right" data-aos-duration="1000">WHAT WE SERVE</h2>

      <div className='container flex flex-col justify-between pl-8 mt-8 text-white md:flex-row'>
        <h1 className='text-6xl font-song-myung' data-aos="fade-right" data-aos-duration="1000">Top <br /> Values <br /> For You</h1>
        <div className='max-sm:mt-6'>
          <h3 className='text-4xl font-song-myung' data-aos="fade-down-right" data-aos-duration="1000">Lots of Choices</h3>
          <p className='pl-3.5 pt-2.5'>
            Discover your dream <br />
            destination from our <br />
            selection of over 460 <br />
            Various sites <br />
            all over Egypt.
          </p>
        </div>
        <div>
          <h3 className='text-4xl font-song-myung' data-aos="fade-down-right" data-aos-duration="1000">Best Your Guide</h3>
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
          <h3 className='text-4xl font-song-myung' data-aos="fade-down-right" data-aos-duration="1000">Easy by Booking</h3>
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
        <h1 className='text-5xl font-song-myung md:text-6xl max-sm:pl-3.5' data-aos="fade-right" data-aos-duration="750">Explore Top Destinations</h1>
        <div className='grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
          {
            cardData.map((item) => (
              <Card id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} tags={item.tags} />
            ))
          }
        </div>
      </div>
      <Link href="/trips" className='block px-12 py-3 mx-auto text-xl text-center bg-white shadow-lg w-52 rounded-xl hover:bg-gray-300 shadow-white'>View More</Link>
    </section>
  )
}
