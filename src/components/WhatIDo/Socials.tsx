import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Youtube, Github, Twitter, Linkedin } from "lucide-react";
import {
  twitterURL,
  githubURL,
  linkedinURL,
  youtubeURL,
} from "../../assets/index";

interface SocialProps {
  url: string;
  icon: ReactNode;
}

const socialIcons: SocialProps[] = [
  {
    url: youtubeURL,
    icon: <Youtube className="w-6 h-6" />,
  },
  {
    url: linkedinURL,
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    url: githubURL,
    icon: <Github className="w-6 h-6" />,
  },
  {
    url: twitterURL,
    icon: <Twitter className="w-6 h-6" />,
  },
];

const Socials = () => {
  return (
    <div className="flex justify-center space-x-4">
      {socialIcons.map((social) => (
        <motion.a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-900 bg-opacity-20 p-2 rounded-full"
          whileHover={{ scale: 1.1, backgroundColor: "#9968ff" }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;
