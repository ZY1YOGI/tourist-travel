import type { Metadata } from 'next'
import { Footer } from '@/components';
import Navbar from '@/components/header/Navbar';

export const metadata: Metadata = {
  title: 'Marsa Alam Holiday - About US',
  description: 'About US Marsa Alam Holiday',
}


export default function ContactUs() {
  return (
    <>
      <Navbar />

  

      <Footer />
    </>
  )
}

