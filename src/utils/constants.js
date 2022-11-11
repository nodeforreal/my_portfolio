import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { FaSass, FaFigma, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

export const filterTags = [
  {
    label: "Front-end",
    value: "front-end",
  },
  {
    label: "Back-end",
    value: "back-end",
  },
  {
    label: "Full-stack",
    value: "full-stack",
  },
  {
    label: "HTML",
    value: "html",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "Javascript",
    value: "javascript",
  },
  {
    label: "React.js",
    value: "react",
  },
  {
    label: "Node.js",
    value: "node",
  },
  {
    label: "Express.js",
    value: "express",
  },
  {
    label: "MongoDB",
    value: "mongodb",
  },
  {
    label: "SCSS",
    value: "scss",
  },
  {
    label: "Tailwind",
    value: "tailwind",
  },
  {
    label: "Styled-Component",
    value: "styled-component",
  },
  {
    label: "All",
    value: "all",
  },
];

export const skills = [
  <AiFillHtml5 className="icon" />,
  <SiCss3 className="icon" />,
  <SiJavascript className="icon" />,
  <FaReact className="icon" />,
  <GrNode className="icon" />,
  <SiExpress className="icon" />,
  <DiMongodb className="icon" />,
  <SiTailwindcss className="icon" />,
  <FaSass className="icon" />,
  <FaFigma className="icon" />,
  <SiGit className="icon" />,
  <SiGithub className="icon" />,
  <SiVisualstudio className="icon" />,
];

// nav links
export const navLinks = [
  {
    id: 0,
    label: "home",
    value: "#home",
  },
  {
    id: 1,
    label: "work",
    value: "#work",
  },
  {
    id: 2,
    label: "skill",
    value: "#skill",
  },
  {
    id: 3,
    label: "about",
    value: "#about",
  },
  {
    id: 4,
    label: "contact",
    value: "#contact",
  },
];
