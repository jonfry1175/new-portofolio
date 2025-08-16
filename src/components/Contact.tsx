import { CONTACT } from "../constants";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactInfo {
  address: string;
  email: string;
  github: string;
  linkedin: string;
}

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const containerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const contactInfo: ContactInfo = CONTACT;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-12"
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Available for new projects and collaborations. Let's create something amazing together.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/20 rounded-full mr-4">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Send me a message</h3>
              <p className="text-neutral-400 text-sm">Usually responds within 24 hours</p>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(contactInfo.email)}
            className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.email}</span>
              </>
            )}
          </button>
          <a
            href={`mailto:${contactInfo.email}`}
            className="w-full mt-3 text-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm block underline decoration-dotted underline-offset-4"
          >
            Or open in your email client
          </a>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/20 rounded-full mr-4">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p className="text-neutral-400 text-sm">Available for remote work</p>
            </div>
          </div>
          <address className="text-neutral-300 not-italic text-lg leading-relaxed">
            {contactInfo.address}
          </address>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/20 rounded-full mr-4">
              <Github className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">GitHub</h3>
              <p className="text-neutral-400 text-sm">Check out my projects</p>
            </div>
          </div>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
            aria-label="Visit GitHub profile"
          >
            <span>@jonfry1175</span>
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/20 rounded-full mr-4">
              <Linkedin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
              <p className="text-neutral-400 text-sm">Let's connect professionally</p>
            </div>
          </div>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
            aria-label="Visit LinkedIn profile"
          >
            <span>Jonfry Agung Marbun</span>
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-2xl mx-auto mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Available for new projects</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
