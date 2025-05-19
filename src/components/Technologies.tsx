import { RiReactjsLine, RiVuejsLine, RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiPostgresql, SiCypress } from "react-icons/si";
import { FiZap, FiCpu } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import React from "react";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

interface IconWithTooltipProps {
  icon: IconType;
  color: string;
  tooltip: string;
  duration: number;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({
  icon: Icon,
  color,
  tooltip,
  duration,
}) => {
  return (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
    >
      <Icon className={`text-7xl ${color}`} />
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-neutral-800 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {tooltip}
      </div>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: RiReactjsLine,
      color: "text-blue-500",
      tooltip: "React",
      duration: 2,
    },
    {
      icon: RiVuejsLine,
      color: "text-green-500",
      tooltip: "Vue",
      duration: 2.5,
    },
    {
      icon: RiNodejsLine,
      color: "text-green-600",
      tooltip: "Node.js",
      duration: 3,
    },
    {
      icon: SiExpress,
      color: "text-gray-500",
      tooltip: "Express",
      duration: 2.2,
    },
    {
      icon: SiPostgresql,
      color: "text-blue-400",
      tooltip: "PostgreSQL",
      duration: 2.8,
    },
    {
      icon: SiCypress,
      color: "text-gray-300",
      tooltip: "Cypress",
      duration: 2.4,
    },
    {
      icon: FiZap,
      color: "text-yellow-500",
      tooltip: "WebSocket",
      duration: 2.6,
    },
    { icon: FiCpu, color: "text-purple-500", tooltip: "MQTT", duration: 2.3 },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <IconWithTooltip
            key={index}
            icon={tech.icon}
            color={tech.color}
            tooltip={tech.tooltip}
            duration={tech.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
