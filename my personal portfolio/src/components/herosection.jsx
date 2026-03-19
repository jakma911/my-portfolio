import profilePic from "../assets/image/photo_2026-03-17_10-30-20.jpg";

const Herosection = () => {
  return (
    <section
      id="home"
      className=" bg-gray-900 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="md:w-1/2">
          <h1 className="text-yellow-400 text-5xl font-bold  mb-2">HELLO!</h1>
          <h1 className="text-5xl font-bold leading-tight">
            I'm <span className="text-yellow-400">Hang Panharajame</span>
          </h1>
          <p className="mt-4 text-gray-400">
            A Freelance Web Designer and (QA)Quality Assurance Engineer in DRSB Canbodia. 
          </p>
          <p className="mt-4 text-gray-400">
            I specialize in creating visually appealing and user-friendly websites.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-full">
              Hire Me
            </button>
            <button className="border px-5 py-2 rounded-full">
              My Works
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="w-82 h-82 flex items-center justify-center overflow-hidden rounded-2xl bg-black">
            <img
              src={profilePic}
              alt="Hang Panharajame profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </section>
    )
}

export default Herosection
  
