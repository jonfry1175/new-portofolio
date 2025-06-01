// src/components/StructuredData.tsx
import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jonfry Agung Marbun",
      jobTitle: "Full Stack Developer",
      description:
        "Passionate full stack developer with expertise in React, Vue, Node.js, and modern web technologies",
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
        "REST API",
        "WebSocket",
        "MQTT",
      ],
      worksFor: {
        "@type": "Organization",
        name: "CV. Khalil Jaya Teknik",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;
