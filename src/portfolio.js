/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Diego J.",
  logo_name: "diego.j()",
  nickname: "Diego / picleric",
  full_name: "Diego Jarauta",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:diegojarauta8@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Jarauta1",
  linkedin: "https://www.linkedin.com/in/diegojarauta/",
  gmail: "diegojarauta8@gmail.com",
 /*  gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "https://twitter.com/Harikrushn9", */
  instagram: "https://www.instagram.com/diegojarauta/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desarrollo front-end para aplicaciones web y smartphone",
        "⚡ Diseño responsive utilizando ReactJS",
        "⚡ Desarrollo back-end de aplicaciones con NodeJS, Express y base de datos MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          logo_path: "html5.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          logo_path: "css3.png",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          logo_path: "js.png",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        /* {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        }, */
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          logo_path: "react.png",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          logo_path: "bootstrap.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ChartJS",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "chartjs.png",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          logo_path: "node.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "express.png",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          logo_path: "npm.png",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "mongodb2.png",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
       /*  {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        }, */
        /* {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        }, */
        /* {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        }, */
        /* {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        }, */
        /* {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
            },
        }, */
        /* {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        }, */
        /* {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        }, */
        /* {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        }, */
        /* {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        }, */
        /* {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          logo_path: "git.png",
          style: {
            color: "#E94E32",
          },
        }, */
        /* {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        }, */
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          logo_path: "c.svg_.png.png",
          style: {
            color: "#E94E32",
          },
        },
        /* {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        }, */
      ],
    },
    {
      title: "Útiles",
      fileName: "CloudInfraImg",
      skills: [
       /*  "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration", */
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:githubactions",
          logo_path: "git.png",
          style: {
            color: "#5b77ef",
          },
        },
        /* {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        }, */
        /* {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        }, */
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          logo_path: "mongodb2.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          logo_path: "heroku.png",
          style: {
            color: "#6863A6",
          },
        },
        /* {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        }, */
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:firebase",
          logo_path: "visual-studio-code.png",
          style: {
            color: "#FFCA28",
          },
        },
        /* {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        }, */
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postgresql",
          logo_path: "postman.png",
          style: {
            color: "#336791",
          },
        },
        /* {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        }, */
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "trello.png",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Discord",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "discord.png",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:docker",
          logo_path: "slack.png",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Full Stack JavaScript Developer",
      subtitle: "BBK Bootcamp",
      logo_path: "bbk.png",
      alt_name: "BBK",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Programación en JavaScript",
        "⚡ Programación de base de datos MongoDB",
        "⚡ Programación web del lado del servidor: Node.js y Express",
        "⚡ Programación web del lado del cliente: HTML5, CSS3, JavaScript",
        "⚡ Uso de framework de SPA (React)",
        "⚡ Scrum (metodologías ágiles)",
        "⚡ Tecnología MERN",
        "⚡ GIT / Control de versiones",
      ],
      website_link: "https://bbkbootcamp.com/",
    },
    {
      title: "Desarrollo de productos electrónicos",
      subtitle: "San Valero (Centro formativo superior), Zaragoza",
      logo_path: "sanvalero.png",
      alt_name: "San Valero",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Electrónica analógica",
        "⚡ Sistemas digitales cableados",
        "⚡ Sistemas microprogramables",
        "⚡ Desarrollo y construcción de prototipos electrónicos",
        "⚡ Mantenimiento de equipos electrónicos",
        "⚡ Administración, gestión y comercialización de la pequeña empresa",
        "⚡ Técnicas de programación",
        "⚡ Electrónica de sistemas",
        "⚡ Desarrollo de proyectos de productos electrónicos",
        "⚡ Calidad",
        "⚡ Relaciones en el equipo de trabajo",
        "⚡ Formación y orientación laboral",
      ],
      website_link: "https://www.gruposanvalero.es/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack",
      subtitle: "Code4Jobs",
      logo_path: "code4jobs.png",
      certificate_link:
        "https://drive.google.com/file/d/1J3I2gOsBw9vDJcmoILYlZTaHvhRvcPir/view",
      alt_name: "Code4Jobs",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
   /*  {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongodb.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    }, */
    {
      title: "Habilidades directivas y gestión de equipos",
      subtitle: "EuroFor",
      logo_path: "eurofor.png",
      certificate_link:
        "https://drive.google.com/file/d/16EDFaIKHmrvZXWy7NWv3x-M2eekS_Zqn/view",
      alt_name: "EuroFor",
      color_code: "#ffffff",
    },
 /*    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    }, */
    /* {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    }, */
    /* {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    }, */
    /* {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    }, */
    /* {
      title: "Hack20",
      subtitle: "Flutter Internation Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter Internation Hackathon",
      color_code: "#2AAFED",
    }, */
    /* {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    }, */
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo, prácticas y voluntariado",
  description:
    "A lo largo de mi carrera laboral he ido colaborando con entidades o realizado proyectos por mi cuenta. Me encanta organizar talleres para compartir mis conocimientos, formar y motivar a que la gente se introduzca en el mundo tecnológico.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiencia",
      experiences: [
        {
          title: "Full Stack JavaScript Junior Developer",
          company: "Code4Jobs",
          company_url: "https://www.code4jobs.com/",
          logo_path: "c4j.png",
          duration: "09/2020 - 02/2021",
          location: "Remoto",
          description:
            `Desarrollo completo de la aplicación web e-commerce DJ-Shop de manera individual, adquiriendo competencias y habilidades propias de un entorno de trabajo real. Para esta web las tecnologías utilizadas son:

            ➢ Programación en Javascript
            ➢ Programación de bases de datos MongoDB
            ➢ Programación web del lado del servidor (Nodejs y Express)
            ➢ Programación web del lado cliente: HTML5, CSS3, JavaScript y Bootstrap 4
            ➢ Uso de framework de SPA (React)
            ➢ Scrum (metodologías ágiles)
            ➢ Proyecto final basado en MERN
            ➢ GIT / Control de versiones`,
          color: "#0071C5",
        },
        {
          title: "Técnico I+D",
          company: "ELT SAU",
          company_url: "https://www.elt.es/",
          logo_path: "elt.png",
          duration: "10/2014 - Actualidad",
          location: "Zaragoza",
          description:
            `ELT es un grupo empresarial español especializado en el diseño, fabricación y comercialización de soluciones de iluminación, donde desempeño el siguiente trabajo como técnico de I+D:

            ➢ Evaluación equipos electrónicos de potencia
            ➢ Soporte técnico (evaluación, reparación y ayuda técnica a otros departamentos)
            ➢ Generación documentación técnica
            ➢ Rediseño equipos electrónicos de potencia para iluminación (LED)
            ➢ Realización de ensayos de homologación de acuerdo con la normativa
            ➢ Gestión, coordinación y supervisión de pruebas técnicas
            ➢ Diseño de equipos electrónicos de potencia para iluminación (LED)
            ➢ Soldadura SMD`,
          color: "#ee3c26",
        },
        {
          title: "Monitor técnico colonia Etopia Kids",
          company: "Ayuntamiento de Zaragoza",
          company_url: "https://www.etopiakids.es/",
          logo_path: "etopia.png",
          duration: "06/2014 - 07/2014",
          location: "Zaragoza",
          description:
            `Monitor "eTOPIA_Kids", enseñar a niños menores de 14 años a:
            - Utilizar software de programación
            - Conceptos electrónicos
            - Iniciación a la robótica
            - Diseño objetos 3D
            - Funcionamiento impresoras 3D`,
          color: "#ee3c26",
        },
        {
          title: "Técnico impresión 3D",
          company: "Sicnova 3D",
          company_url: "https://sicnova3d.com/",
          logo_path: "s3d.png",
          duration: "09/2013 - 06/2014",
          location: "Zaragoza",
          description:
            `Empresa dedicada a la fabricación y diseño de impresoras 3D, escáneres 3D e impresión de producto para el cliente. En ella, desarrollaba las siguientes funciones como técnico de I+D:

            ➢ Manejo de impresoras 3D y escáner 3D
            ➢ Mantenimiento y reparación de impresoras 3D
            ➢ Diseño objetos 3D
            ➢ Generación de información técnica
            ➢ I+D+i
            ➢ Dar formación a trabajadores y clientes en robótica y tecnología 3D
            ➢ Proyectos con Arduino
            ➢ Creación de aplicaciones para Smartphone con App Inventor`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Voluntariado",
      experiences: [
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2016.png",
          duration: "03/2016",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#4285F4",
        },
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2015.png",
          duration: "03/2015",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#5a900f",
        },
        {
          title: "Monitor técnico",
          company: "Sicnova 3D",
          company_url: "https://sicnova3d.com/",
          logo_path: "s3d.png",
          duration: "06/2014 - 08/2014",
          location: "España",
          description:
            "Iniciativa de la empresa Sicnova 3D para impartir cursos donde enseño el montaje de impresoras 3D e iniciación a la programación por todas sus sedes en España.",
          color: "#C681C3",
        },
        {
          title: "Monitor técnico Arduino Day",
          company: "Gobierno de Aragón",
          company_url: "https://arduinodayzgz.es/",
          logo_path: "arduinoday_2014.png",
          duration: "03/2014",
          location: "Zaragoza",
          description:
            "Arduino day es un evento que nace para conmemorar el aniversario de Arduino en el que imparto charlas técnicas sobre código C++ e imparto cursillo de iniciación a la programación.",
          color: "#D83B01",
        },
        /* {
          title: "Campus Hustler",
          company: "Skillenza",
          company_url: "https://skillenza.com/",
          logo_path: "skillenza.png",
          duration: "Feb 2021 - Present",
          location: "Work from Home",
          description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#196acf",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
          "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        }, */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description: "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description:
        "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description:
        "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description:
        "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description:
        "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description: "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description: "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
