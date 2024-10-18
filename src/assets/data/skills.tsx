import { DiMongodb } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { GoDatabase } from "react-icons/go";
import { FiServer } from "react-icons/fi";
import { LuCode } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";

const skillCategories = [
  {
    name: "Frontend",
    icon: <LuCode size={24} />,
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    icon: <FiServer size={24} />,
    skills: ["Node.js", "Express", "Java"],
  },
  {
    name: "Database",
    icon: <GoDatabase size={24} />,
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
];

const techIcons = [
  { name: 'React', icon: <DiReact size={24}/> },
  { name: 'Node.js', icon: <LuCode size={24} /> },
  { name: 'MongoDB', icon: <DiMongodb size={24}/> },
  { name: 'Express', icon: <SiExpress size={24}/> },
  { name: 'JavaScript', icon: <DiJavascript1 size={24} /> },
  { name: 'TypeScript', icon: <TbBrandTypescript size={24} /> },
  { name: 'Java', icon: <DiJava size={24}/> },
  { name: 'Tailwind', icon: <RiTailwindCssFill size={24} /> },
  { name: 'Bootstrap', icon: <TbBrandBootstrap  size={24}/> },
];

const additionalSkills = ['Bootstrap', 'Git', 'RESTful APIs', 'GraphQL', 'Webpack', 'Jest']


export { skillCategories, techIcons, additionalSkills };
