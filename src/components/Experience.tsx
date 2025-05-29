import { EXPERIENCES, Experience as ExperienceType } from "../constants";
import { motion, Variants } from "framer-motion";

const Experience: React.FC = () => {
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
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience: ExperienceType, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={itemVariants}
              initial="hiddenLeft"
              whileInView="visible"
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hiddenRight"
              whileInView="visible"
              className="w-full max-w-l lg:w-3/4 flex flex-wrap"
            >
              <h6 className="mb-2 font-semibold ">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
                <span className="ml-2 inline-block rounded-full bg-purple-800 px-3 py-1 text-xs font-medium text-white">
                  {experience.jobType}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
