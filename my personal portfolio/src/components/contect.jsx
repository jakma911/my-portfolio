import React from "react";

const PhoneIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    width="20"
    height="20"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const MapPinIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white px-6 py-12">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 tracking-widest">get in touch</p>
          <h2 className="text-4xl font-bold">CONTACT</h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left side */}
          <div className="space-y-6">
            
            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg">
              <PhoneIcon className="text-white" />
              <span>+8801231</span>
            </div>

            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg">
              <MailIcon className="text-white" />
              <span>panharajamehnag@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg">
              <MapPinIcon className="text-white" />
              <span>Chittagong, Bangladesh</span>
            </div>

          </div>

          {/* Right side (Form) */}
          <form className="space-y-6">

            <div>
              <label className="block mb-1 text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Your Email</label>
              <input
                type="email"
                className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Your message</label>
              <textarea
                rows="5"
                className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-white transition"
            >
              Send
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;