import frontend from "../Images/frontend.png";
import backend from "../Images/backend.png";
import devops from "../Images/devops.png";
import database from "../Images/database.png";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <img src={frontend} alt="Frontend" />,
    title: "Frontend",
    description: "Crafting clean, responsive, and visually appealing interfaces",
  },
  {
    icon: <img src={backend} alt="Backend Development" />, 
    title: "Backend",
    description: "Building efficient APIs and handling server-side logic",
  },
  {
    icon: <img src={database} alt="Marketing" />,
    title: "Database",
    description: "Proficient in MySQL and MongoDB",
  },
  {
    icon: <img src={devops} alt="Devops" />,
    title: "DevOps",
    description: "Industry level development and maintenance skills",
  },
];

export default services;
