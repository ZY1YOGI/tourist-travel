
import { Footer, Header, Services, Trip, OurExperience } from '@/components';




export default function Home() {
  return (
    <>
      <Header />

      <Services />

      <Trip />

      <div className='md:px-28 max-w-max md:py-12 rounded-3xl text-center shadow-2xl mx-auto px-12 py-8 whitespace-nowrap md:my-3 dark:text-white'>
        <h1 className='text-xl md:text-3xl'>
          Prepare Yourself & Let's Explore <br />
          The Beauty Of The egypt
        </h1>
        <p className='max-sm:text-xs'>We have many special offers especially for you.</p>
        <button className='block px-12 py-3 mx-auto bg-primary rounded-xl hover:bg-primary/70 mt-8 text-white'>Get Started</button>
      </div>

      <OurExperience />

      <Footer />
    </>
  )
}


{/* <div className="absolute p-3 [box-shadow:_0px_4px_11px_#0000006e] rounded-3xl -bottom-28 bg-white z-10 -right-12">
<img src="/alexandria-in-egypt-library.jpg" alt="Alexandria-and-Pleasure-Beach" className="w-80 rounded-3xl " />
<h2 className="pt-3 text-xl text-center">Alexandria in Egypt Library</h2>
</div> */}