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

export const projects = [
  {
    id: 0,
    title: "github user",
    description:
      "Responsive github user application,with Auth0 user can login and logout,github API,CSS grid layout and keyframe animations",
    tag: "front-end",
    img: "https://res.cloudinary.com/dljixzmf5/image/upload/v1667023600/github-users_zmd3aj.png",
    tags: ["front-end", "html", "css", "react"],
    live: "https://github-users-active.netlify.app/",
    repo: "https://github.com/keeforever/Github-Users",
  },
  {
    id: 1,
    title: "comfy store",
    description:
      "Responsive Comfy store application, with Auth0 user can login and logout, stripe, CSS grid layout and keyframe animations",
    tag: "front-end",
    img: "https://res.cloudinary.com/dljixzmf5/image/upload/v1667023602/comfy-store_oh1crh.png",
    tags: ["front-end", "html", "css", "react"],
    live: "https://comfy-store-active.netlify.app/",
    repo: "https://github.com/keeforever/Comfy-E-Commerce",
  },
  {
    id: 2,
    title: "jobster app",
    description:
      "Jobster application with RESTful API, perform CRUD operations & JWT authentication",
    tag: "front-end",
    img: "https://res.cloudinary.com/dljixzmf5/image/upload/v1667023601/jobster-app_ttmtpc.png",
    tags: ["front-end", "html", "css", "react"],
    live: "https://jobster-app-active.netlify.app/",
    repo: "https://github.com/keeforever/Jobster",
  },
];
