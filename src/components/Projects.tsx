import projects from "../assets/data/projects";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-900 bg-opacity-20 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-800 hover:bg-opacity-30"
          >
            <img
              src={project.thumbnail}
              alt={"Thumbnail of project"}
              className="w-full object-cover"
            />
            <div key={index} className="p-6">
              <h3 className="text-xl flex gap-2 font-semibold mb-2">
                {project.title}{" "}
                <a href={project.url} className="text-purple-400" target="_blank" rel="noopener noreferrer">
                  <FaArrowUpRightFromSquare size={16} />
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
