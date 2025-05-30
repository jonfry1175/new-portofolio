import project1 from "../assets/projects/project-defect.png";
import project2 from "../assets/projects/project-enigma.png";
import project5 from "../assets/projects/project-porto.png";
import project3 from "../assets/projects/project-3.jpg";
import project7 from "../assets/projects/image.png";

export interface Experience {
  year: string;
  role: string;
  company: string;
  jobType: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
  isDesktop?: boolean;
  src?: string;
}
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Vue, as well as back-end technologies like Node.js, Express.js, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With less than 1 years of professional experience, I have worked with a variety of technologies, including React.js, Vue.js, Node.js, PostgreSQL, and Cypress. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and staying up-to-date with the latest industry trends by exploring new technologies.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "Des 2025 - Present",
    role: "Fullstack Developer",
    company: "CV. Khalil Jaya Teknik",
    jobType: "Full-time",
    description: `Working as a solo developer, attending client meetings to gather requirements and provide technical solutions. Developed real-time IoT dashboard monitoring for CNC machines with file transfer capabilities. Improved application performance through optimization techniques and implemented comprehensive logging system for better monitoring and debugging.`,
    technologies: [
      "TypeScript",
      "Node-RED",
      "Express",
      "PostgreSQL",
      "Vue",
      "Tailwind",
      "REST API",
      "WebSocket",
      "MQTT",
      "PM2",
    ],
  },
  {
    year: "Sep 2024 - Nov 2024",
    role: "Frontend Developer",
    company: "ASDF.ID",
    jobType: "Internship",
    description: `Designed API specs with backend team, developed web app using TypeScript, Vue.js, and Tailwind CSS, and integrated APIs using microfrontend architecture with unit testing end-to-end using Cypress.`,
    technologies: ["Typescript", "Vue.js", "Cypress", "Tailwind"],
  },
  {
    year: "Feb 2024 - May 2024",
    role: "Frontend Developer ",
    company: "FYP Media",
    jobType: "Internship",
    description: `Designed and developed user interfaces for web applications using React.js and Bootstrap. Worked closely with backend developers to integrate frontend components with Laravel APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["JavaScript", "React.js", "Bootstrap"],
  },
  {
    year: "Nov 2023 - Des 2023",
    role: "Frontend Web Developer",
    company: "Minds United",
    jobType: "Volunteer",
    description: `Contributed to the development of modern and responsive static landing pages using HTML, CSS, and JavaScript. Implemented interactive UI components and animations to enhance user engagement.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "IOT Dashboard Monitoring",
    image: project3,
    isDesktop: true,
    description:
      "Developed an IoT dashboard monitoring system for CNC machines as a solo developer. Implemented real-time file transfer capabilities between web interface and CNC machines. Built a full-stack solution utilizing modern technologies and protocols for efficient machine communication and monitoring.",
    technologies: [
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Vue",
      "Tailwind",
      "REST API",
      "WebSocket",
      "MQTT",
    ],
    demo: "",
    src: "",
  },
  {
    title: "Janji Temu Website",
    image: project7,
    isDesktop: true,
    description:
      "Developed a full-stack appointment scheduling platform using modern web technologies. The system enables users to efficiently manage and schedule appointments with automated confirmation and reminder features.",
    technologies: [
      "Typescript",
      "Express",
      "PostgreSQL",
      "React",
      "Tailwind",
      "Cypress",
    ],
    demo: undefined,
    src: "https://github.com/jonfry1175/test-fullstack-healmity",
  },
  {
    title: "DefectDetect Website",
    image: project1,
    description:
      "Built a comprehensive bug tracking system with role-based access control. QA teams can report and monitor bugs, while developers can manage and update bug statuses. Implemented secure authentication using JWT and modern frontend technologies for optimal user experience.",
    technologies: ["Javascript", "Express", "PostgreSQL", "React", "Bootstrap"],
    demo: "",
    src: "https://github.com/jonfry1175/DefectDetect",
  },
  {
    title: "Laundry Management Website",
    image: project2,
    description:
      "Developed a laundry management system to streamline business operations. Features include transaction management, service catalog maintenance, and comprehensive reporting tools for business analytics.",
    technologies: ["JavaScript", "React", "Bootstrap"],
    demo: "https://jonfry-laundry-app.netlify.app/",
    src: "https://github.com/jonfry1175/enigma-laundry",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "Designed and developed a modern portfolio website to showcase professional projects and technical skills. Features responsive design and interactive components for optimal user engagement.",
    technologies: ["Typescript", "React", "Tailwind"],
    demo: "https://jonfry.netlify.app/",
    src: "https://github.com/jonfry1175/new-portofolio",
  },
];

export const CONTACT = {
  address: "Bekasi, West Java, Indonesia",
  github: "https://github.com/jonfry1175",
  linkedin: "https://www.linkedin.com/in/jonfry-agung-marbun/",
  email: "jonfrymarbun@gmail.com",
};
