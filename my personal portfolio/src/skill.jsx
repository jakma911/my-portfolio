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
    <div id="skill" className="bg-gray-900 text-white">
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
    </div>
  );
};

export default Skills;