import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IconType } from "react-icons";
import logo from "../assets/jonLogo.png";

interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
}

const NavBar: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/jonfry-agung-marbun",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/jonfry1175",
      label: "GitHub",
    },
    {
      icon: FaDiscord,
      url: "https://discord.com/users/1043162437467258920",
      label: "Discord",
    },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-28 h-15" src={logo} alt="Jonfry Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
