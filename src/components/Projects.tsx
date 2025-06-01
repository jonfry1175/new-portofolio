import { PROJECTS, Project as ProjectType } from "../constants";
import { motion, Variants } from "framer-motion";

const Projects: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants: Variants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="border-b border-neutral-800 pb-12">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project: ProjectType, index: number) => (
          <div
            key={index}
            className={`flex flex-col ${
              !project.isMobileImage ? "lg:flex-row" : "lg:flex-row"
            } gap-8 items-start`}
          >
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              initial="hiddenLeft"
              whileInView="visible"
              className={`${
                project.isMobileImage
                  ? "w-full lg:w-1/3 flex justify-center"
                  : "w-full lg:w-1/2"
              }`}
            >
              <div
                className={`overflow-hidden rounded-lg ${
                  !project.isMobileImage ? "w-full" : "w-auto"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-lg ${
                    project.isMobileImage
                      ? "max-h-[400px] object-contain"
                      : "w-full object-cover shadow-lg"
                  }`}
                  style={{
                    border: !project.isMobileImage ? "1px solid #333" : "none",
                    maxWidth: project.isMobileImage ? "220px" : "100%",
                  }}
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={itemVariants}
              initial="hiddenRight"
              whileInView="visible"
              className={`${
                project.isMobileImage ? "w-full lg:w-2/3" : "w-full lg:w-1/2"
              } flex flex-col`}
            >
              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
              <p className="mb-6 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-purple-800 px-5 py-2 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.src && (
                  <a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
