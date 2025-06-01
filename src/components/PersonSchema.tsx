import { useEffect } from "react";

const PersonSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jonfry Agung Marbun",
      alternateName: ["Jonfry", "Jonfry Marbun"],
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer dengan expertise dalam React, Vue, Node.js, dan teknologi web modern",
      url: "https://jonfry.netlify.app",
      sameAs: [
        "https://github.com/jonfry1175",
        "https://linkedin.com/in/jonfry-agung-marbun",
      ],
      knowsAbout: [
        "React",
        "Vue.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Express.js",
      ],
      worksFor: {
        "@type": "Organization",
        name: "CV. Khalil Jaya Teknik",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default PersonSchema;
