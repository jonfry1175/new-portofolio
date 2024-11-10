import project1 from "../assets/projects/project-defect.png";
import project2 from "../assets/projects/project-enigma.png";
import project5 from "../assets/projects/project-porto.png";
import project4 from "../assets/projects/project-product.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With less than 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue., as well as back-end technologies like Node.js, Express.js, and, PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With less than 1 years of professional experience, I have worked with a variety of technologies, including React.js, Vue.js, Node.js, PostgreSQL, and Cypress. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and staying up-to-date with the latest industry trends by exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Frontend Developer Intern",
    company: "ASDF.ID",
    description: `Designed API specs with backend team, developed web app using TypeScript, Vue.js, and Tailwind CSS, and integrated APIs using microfrontend architecture with unit testing end-to-end using Cypress.`,
    technologies: ["Typescript", "Vue.js", "Cypress", "Tailwind"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer Intern",
    company: "FYP Media",
    description: `Designed and developed user interfaces for web applications using React.js and Bootstrap. Worked closely with backend developers to integrate frontend components with Laravel APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["JavaScript", "React.js", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "DefectDetect Website(on-progress)",
    image: project1,
    description:
      "Created a bug management website called DefectDetect using ExpressJS, PostgreSQL, JWT, ReactJS, Redux, and Bootstrap.DefectDetect has two roles: QA and Developer.QA can view and create bugs but cannot change their status.Developers can view and change the status of bugs.",
    technologies: ["TypeScript", "Express", "PostgreSQL", "Vue", "Tailwind"],
  },
  {
    title: "Laundry Management Website",
    image: project2,
    description:
      "Make website laundry app using react js, react-bootstrap, and redux. Laundry App to help employee to manage transaction and manage list product or service they have",
    technologies: ["JavaScript", "React", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "React", "Tailwind"],
  },
  {
    title: "Product Management Website",
    image: project4,
    description:
      "An web application for managing products, with features such as CRUD operations and user authentication.",
    technologies: ["JavaScript", "Express", "PostgreSQL", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Bekasi, West Java, Indonesia",
  github: "https://github.com/jonfry1175",
  linkedin: "https://www.linkedin.com/in/jonfry-agung-marbun/",
  email: "jonfrymarbun@gmail.com",
};
