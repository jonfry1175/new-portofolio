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
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project: ProjectType, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={itemVariants}
              initial="hiddenLeft"
              whileInView="visible"
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={project.isDesktop ? 220 : 150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hiddenRight"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4 flex flex-wrap lg:flex-none"
            >
              <div className="w-full">
                <h6 className="mb-2 text-2xl font-bold">{project.title}</h6>
                <p className="text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="rounded h-7 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.src && (
                    <a
                      href={project.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
