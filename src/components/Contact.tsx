import { CONTACT } from "../constants";
import { motion, Variants } from "framer-motion";

interface ContactInfo {
  address: string;
  email: string;
  github: string;
  linkedin: string;
}

const Contact: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const contactInfo: ContactInfo = CONTACT;

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="my-4"
        >
          {contactInfo.address}
        </motion.p>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          href={`mailto:${contactInfo.email}`}
          className="border-b m-1"
        >
          {contactInfo.email}
        </motion.a>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b m-1"
        >
          Github
        </motion.a>
        <motion.a
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b m-1"
        >
          Linkedin
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
