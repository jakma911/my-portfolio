import React from "react";

const projects = [
  { title: "Project 1", tech: "React + Tailwind" },
  { title: "Project 2", tech: "HTML + CSS" },
  { title: "Project 3", tech: "JavaScript" },
  { title: "Project 4", tech: "PHP + MySQL" },
];

const Projects = () => {
  const boxStyle =
    "bg-white border-2 border-blue-600 rounded-md shadow p-5 h-44 flex flex-col justify-between";

  return (
    <div className="bg-gray-900 text-white" id="projects">
      <section className="container mx-auto px-6 py-12">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold uppercase">Projects</h2>
          <p className="text-gray-400 mt-2">
            A showcase of my recent work and accomplishments
          </p>
        </div>

        {/* Standard Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={boxStyle}>
              <h3 className="text-black font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.tech}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Projects;
