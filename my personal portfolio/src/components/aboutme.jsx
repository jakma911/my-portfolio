import aboutPhoto from "../assets/image/photo_2026-01-07_21-39-38.jpg";

const Aboutme = () => {
  return (
    <section id="about" className=" bg-gray-900 flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-30">
      <div className=" w-60 h-50 md:w-80 md:h-90 overflow-hidden rounded-xl shrink-0">
          <img
            src={aboutPhoto}
            alt="About Hang Panharajame"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-4">
            Hi there! I'm Hang Panharajame, a passionate web designer and QA engineer based in DRSB Cambodia. With a keen eye for design and a commitment to quality, I create visually stunning and user-friendly websites that leave a lasting impression. My expertise lies in crafting seamless user experiences while ensuring top-notch functionality through rigorous testing. When I'm not designing or testing, you can find me exploring new technologies or enjoying a cup of coffee. Let's connect and bring your web projects to life!
          </p>

          <ul className="space-y-2 text-sm">
            <li><strong>Name:</strong> Hang Panharajame</li>
            <li><strong>DOB:</strong> JUNE 3 2005</li>
            <li><strong>Email:</strong> PANHARAJAME.HANG@gmail.com</li>
            <li><strong>Phone:</strong> (+885) 965908335</li>
          </ul>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full">
            Download CV
          </button>
        </div>
      </section>
  );
};

export default Aboutme;