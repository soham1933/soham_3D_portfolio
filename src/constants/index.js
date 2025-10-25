import {
  mobile,
  backend,
  cloak,
  creator,
  web,
  table,
  collab,
  javascript,
  typescript,
  html,
  java,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  docker,
  carrent,
  jobit,
  bms,
  
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
    {
    name: "Java",
    icon: java,
  }
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "SAGAR An Sans",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2021",
    points: [
      "Worked as a Software Development Intern on full-stack projects.",
      "Gained practical exposure to React.js, Node.js, Express, and MongoDB.",
      "Collaborated with teams to develop and integrate new features for client-based web applications.",
      "Improved understanding of software architecture and API handling.",
    ],
  },
  
];

const testimonials = [
];

const projects = [
  
  {


      name: "NavWay",
    description:
      "An assistive hands-free navigation system designed for differently-abled individuals. It enables users to control the mouse, navigate the system, and perform essential computer tasks through intelligent voice recognition and command-based interactions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Harry Potter Cloak Project",
    description:
      "An innovative computer vision project inspired by Harry Potter’s invisibility cloak. It uses OpenCV and color detection techniques to identify specific hues and seamlessly replace them with background imagery, creating a real-time invisibility effect.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: cloak,
    source_code_link: "https://github.com/",
  },
  {
    name: "Collaborative Whiteboard",
    description:
      "A real-time collaborative whiteboard that allows multiple users to draw, sketch, and share ideas simultaneously. Built with React and MongoDB, it enables seamless teamwork with instant updates and synchronized drawing data across clients.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: collab,
    source_code_link: "https://github.com/",
  },
  {
    name: "Billing Management System",
    description:
      "A Java-based desktop application designed to streamline billing and inventory processes for small businesses. It automates invoice generation, manages product records, and stores transaction data securely using MySQL for efficient management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      }
    ],
    image: bms,
    source_code_link: "https://github.com/",
  },
  {
    name: "React Table for Groww Me",
    description:
      "A dynamic and responsive data table built using React.js for displaying and managing financial records. The project emphasizes efficient data handling, sorting, and styling through modular components and clean UI design with CSS integration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: table,
    source_code_link: "https://github.com/",
  },
  //  {
  //   name: "Collaborative Whiteboard ",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: collab,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
