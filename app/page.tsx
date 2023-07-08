
import { AiFillStar } from 'react-icons/ai'
import { Footer, Header } from '@/components';
import Card from '@/components/card';




export default function Home() {
  return (
    <>
      <Header />



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

          <div className='flex flex-col mt-12 md:flex-row max-sm:items-center md:space-x-8 max-sm:space-y-8'>

            <div className='w-60 rounded-t-3xl'>
              <img src="/img-1.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Alexandria</h2>
                <h3>Egypt, Alexandria</h3>
              </div>
              <div className='flex items-center justify-center mt-3 space-x-3'>
                <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
            <div className='w-60 rounded-t-3xl'>
              <img src="/img-2.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Cairo</h2>
                <h3>Egypt, cairo</h3>
              </div>
              <div className='flex items-center justify-center mt-3 space-x-3'>
                <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
            <div className='w-60 rounded-t-3xl'>
              <img src="/img-3.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
              <div className='text-center mt-1.5'>
                <h2 className='text-3xl tracking-widest'>Luxor</h2>
                <h3>Egypt, luxor</h3>
              </div>
              <div className='flex items-center justify-center mt-3 space-x-3'>
                <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />4.3</span>
                <h3>2.8k review</h3>
              </div>
            </div>
          </div>

        </div>
      <button className='block px-12 py-3 mx-auto bg-white rounded-xl'>View More</button>
      </section>

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
          
          {/* <Card img='/img-1.svg' title='Alexandria' region='Egypt, Alexandria' rate='4.3' review='2.8k' /> */}

          <div className='w-60 rounded-t-3xl'>
            <img src="/img-2.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
            <div className='text-center mt-1.5'>
              <h2 className='text-3xl tracking-widest'>Cairo</h2>
              <h3>Egypt, cairo</h3>
            </div>
            <div className='flex items-center justify-center mt-3 space-x-3'>
              <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />4.3</span>
              <h3>2.8k review</h3>
            </div>
          </div>
          <div className='w-60 rounded-t-3xl'>
            <img src="/img-3.svg" alt="" className='shadow-2xl p-0.5 rounded-lg shadow-gray-800' />
            <div className='text-center mt-1.5'>
              <h2 className='text-3xl tracking-widest'>Luxor</h2>
              <h3>Egypt, luxor</h3>
            </div>
            <div className='flex items-center justify-center mt-3 space-x-3'>
              <span className='flex px-3 bg-gray-300 rounded-lg'><AiFillStar color='FFC700' size={25} />4.3</span>
              <h3>2.8k review</h3>
            </div>
          </div>
        </div>


      </section>



      <Footer />
    </>
  )
}


{/* <div className="absolute p-3 [box-shadow:_0px_4px_11px_#0000006e] rounded-3xl -bottom-28 bg-white z-10 -right-12">
<img src="/alexandria-in-egypt-library.jpg" alt="Alexandria-and-Pleasure-Beach" className="w-80 rounded-3xl " />
<h2 className="pt-3 text-xl text-center">Alexandria in Egypt Library</h2>
</div> */}