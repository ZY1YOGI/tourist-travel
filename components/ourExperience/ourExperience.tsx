
export default function ourExperience() {
  return (
    <div className="flex items-center justify-between container flex-col md:flex-row lg:-space-x-12">

      <img src="/ourExperience.svg" alt="our experience" />


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

        <div className="flex md:space-x-5 mt-5 flex-col md:flex-row max-sm:space-y-8">
          <div>
            <span className="text-primary font-merienda-one text-6xl">10</span> <h3 className="text-xl">Years Experience</h3>
          </div>
          <div>
            <span className="text-primary font-merienda-one text-6xl">300</span> <h3 className="text-xl">Destination<br /> Collaboration</h3>
          </div>
          <div>
            <span className="text-primary font-merienda-one text-6xl">40k+</span> <h3 className="text-xl">Happy<br /> customers</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
