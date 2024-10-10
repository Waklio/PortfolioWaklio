import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I'm a passionate Computer Engineering professional and a full-stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React, as well as back-end technologies like PostgreSQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a dedicated and versatile Computer Engineering professional and full-stack developer with a passion for creating efficient and user-friendly web applications. With a range of experience, including developing novel games and a web application for bruxism, I have worked with various technologies, including React, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work and evolved when I entered university, where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, reading, watching movies, and learning more about History.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Free Lancer",
    description: `I have developed everything from games to commercial web applications, always striving to provide the best possible experiences for users.`,
    technologies: ["Javascript", "React.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2020 - 2022",
    role: "IT support intern",
    company: "Medscan Clínica Monte Castelo de Serviços de Radiologia",
    description: `I worked as an IT support intern, documenting, maintaining, and establishing server services.`,
    technologies: ["Linux", "Docker"],
  },

];

export const University = [
  {
    year: "2024",
    role: "Computer Engineering student.",
    company: "Universidade Federal do Ceará",
    description: `Recently graduated in Computer Engineering from the Federal University of Ceará.`,
    technologies: [],
    Link:[]
  }

]

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.ONGOING",
    technologies: ["CSS", "React", "Node.js", "MongoDB", "Express"],
    link: "#"
    
  },
  {
    title: "Project Morpheus HealthSystem",
    image: project2,
    description:
      "Application developed in the Empreende program at UFC aimed at performing a preliminary diagnosis of bruxism.ONGOING",
    technologies: ["React", "CSS", "GitHub", "Axios"],
    link: "https://github.com/Morpheus-HealthSystem"
    
  },
  {
    title: "é o GERA",
    image: project3,
    description:
      "It’s a Visual Novel game with simple and fun gameplay. Based on real projects from the city of Sobral-CE, Miss Perifa brings culture, diversity, and knowledge! The game is available in Libras (Brazilian Sign Language)!",
    technologies: [ "Jira", "Python", "Ren'py"],
    link: "https://github.com/faresmts/e-o-gera"
  },
  {
    title: "Web application for controlling air conditioning.",
    image: project4,
    description:
      "Web platform for controlling air conditioning developed as a project for my graduation thesis.",
    technologies: ["HTML", "CSS", "javascript", "c++", "Github"],
    link: "https://github.com/orgs/wxn-controller/repositories?q=visibility%3Apublic+archived%3Afalse"
  },
];

export const CONTACT = {
  address: "Sobral-CE, Brasil",
  phoneNo: "+55 88 99706 8885",
  email: "xwaklioneto@gmail.com",
};
