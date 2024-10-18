import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";

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
    icon: <FiYoutube className="w-6 h-6" />,
  },
  {
    url: linkedinURL,
    icon: <LuLinkedin className="w-6 h-6" />,
  },
  {
    url: githubURL,
    icon: <LuGithub className="w-6 h-6" />,
  },
  {
    url: twitterURL,
    icon: <FaXTwitter className="w-6 h-6" />,
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
