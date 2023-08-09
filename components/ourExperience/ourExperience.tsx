import Image from 'next/image';
import ourExperienceImg from '@/public/assets/img/ourExperience.png'


export default function ourExperience() {
  return (
    <div className="container flex flex-col items-center justify-between md:flex-row lg:-space-x-12">

      <Image src={ourExperienceImg} alt="our experience" width={800} height={800} />


      <div className="dark:text-white">
        <h3 className="text-primary">Our Experience</h3>
        <h1 className="text-3xl md:text-5xl">
          With Our Experience <br />
          We Will Serve You
        </h1>
        <p className="pt-3 pl-3 text-sm sm:text-base dark:text-gray-200">
          From the day of our inception, we have placed great <br />
          emphasis on ensuring that our users enjoy maximum <br />
          convenience when using our services. We achieve this <br />
          by offering affordable prices and a hassle-free <br />
          experience.
        </p>

        <div className="flex flex-col mt-5 md:space-x-5 md:flex-row max-sm:space-y-8">
          <div>
            <span className="text-6xl text-primary font-merienda-one">10</span> <h3 className="text-xl">Years Experience</h3>
          </div>
          <div>
            <span className="text-6xl text-primary font-merienda-one">300</span> <h3 className="text-xl">Destination<br /> Collaboration</h3>
          </div>
          <div>
            <span className="text-6xl text-primary font-merienda-one">40k+</span> <h3 className="text-xl">Happy<br /> customers</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
