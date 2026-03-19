import React from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "JavaScript", percent: 50 },
  { name: "REACT", percent: 55 },
  { name: "BOOTSTRAP", percent: 60 },
  { name: "PHP", percent: 40 },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold uppercase">Skills</h2>
          <p className="text-gray-500 mt-2">
            My professional skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percent}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">More</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Business Strategy</li>
              <li>Graphics Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">info@domain.com</p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2022 All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Skills;