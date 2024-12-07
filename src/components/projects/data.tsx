import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Inventory Management System",
    projectUrls: {
      repo: {
        owner: "Adarsh kumar",
        name: "Inventory Management System",
        showStarCount: false,
      },
    },
    imageUrl: "",
    description: `An Inventory Management System is essential for managing stock levels and optimizing operations efficiently. This system was built using AWS technologies like Lambda, API Gateway, and DynamoDB, along with a React frontend, to enable seamless CRUD operations and ensure scalability. It was designed to be agile, responsive, and effective in meeting business needs.`,
    tech: [
    
      "React.js",
      "TailwindCSS",
      "Lambda,",
      "API Gateway",
      "DynamoDB",
    
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `Integrates various resources like quizzes, video tutorials, and interactive features to support different learning styles. It adapts to individual progress, offering personalized content to help users improve in areas where they need more focus. Just like a tutor, it tracks learning progress and adjusts to ensure the best outcomes.`,
      },
      b: {
        title: "",
        text: `Security and privacy are crucial in any educational tool. The learning tool uses advanced security measures, including encryption and secure logins, to protect personal and progress data. This ensures that learners can focus on their education without concerns about data compromise, offering a secure and efficient learning experience.`,
      },
    },
  },
  {
    title: "Time Spend Analysis Web Application",
    projectUrls: {
      site: {
        url: "https://tracker-app-1.onrender.com",
        icon: <RiExternalLinkLine size={25} />,
      },
      repo: {
        name: "tracker-app",
        owner: "adarshkumar1983",
        showStarCount: false,
      },
    },
    imageUrl: "/images/time.png",
    description: `Implemented timers for work sessions, recorded user data, and created a dashboard for productivity tracking and analysis`,
    tech: [
      "React",
       "Firebase", 
       "Node.js", 
       "Tailwind" 
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `ntegrates React, Node.js, and Firebase to provide an interactive, personalized learning experience. Tailwind CSS ensures a responsive and clean design across devices. The tool tracks progress through assessments and quizzes, offering real-time feedback to adjust learning paths.`,
      },
      b: {
        title: "",
        text: `Timers are integrated to track work sessions, allowing users to start, pause, and stop sessions easily. The application then records these intervals, providing detailed analysis through a comprehensive dashboard. This dashboard displays various productivity metrics, helping users identify time management patterns, optimize workflows, and improve overall efficiency. The combination of these technologies ensures a seamless experience for both tracking and analyzing time spent on tasks, leading to better time management and enhanced productivity.`,
      },
    },
  },
  {
    title: "Home maid",
    projectUrls: {
      site: {
        url: "https://home-mate-w83w.onrender.com",
        icon: <RiExternalLinkLine size={25} />,
      },
      repo: {
        name: "nextMotion",
        owner: "yoyocharlie",
        showStarCount: false,
      },
    },
    imageUrl: "/images/homemaid.png",
    description: `The Home-Maid Application is a user-friendly solution designed to help households efficiently manage the cleaning and maintenance of their home appliances, with a primary focus on fans. This application simplifies the process of scheduling cleanups, tracking maintenance history, and ensuring timely servicing. By enabling users to track multiple fans across different rooms, it promotes better organization and cleanliness in the home.`,
    tech: [
      "JavaScript",
       "Mongoose", 
       "Node.js", 
       "Bootstrap",
     
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `The application uses modern technologies such as Node.js for the backend, Express.js for API handling, MongoDB for database management, and HTML, CSS, and JavaScript for the frontend. This robust tech stack ensures a seamless and responsive user experience while maintaining the scalability and reliability of the system.`,
      },
      b: {
        title: "",
        text: `The Home-Maid Application is an intuitive tool designed to help households manage the cleaning and maintenance of home appliances, primarily focusing on fans. It enables users to organize their spaces by adding distinct fans in various rooms, schedule cleaning or maintenance tasks, and track their history effortlessly. The application ensures timely servicing with features like unique naming for fans, cleaning status updates, and reminders for scheduled tasks. Users can create an account, log in, and easily navigate through functionalities such as adding rooms, assigning fans, scheduling tasks, and marking them as completed. With a simple interface and efficient tracking, the application ensures that all maintenance activities are handled systematically, promoting better cleanliness and organization at home.`,
      },
    },
  },
  {
    title: "Netflix",
    projectUrls: {
      site: {
        url: "",
        icon: <RiExternalLinkLine size={25} />,
      },
      repo: {
        name: " ",
        owner: "",
        showStarCount: false,
      },
    },
    imageUrl: "/images/netflix.png",
    description: `The Netflix Clone is a web application designed to replicate the core functionality and user experience of the popular streaming platform, Netflix. It allows users to browse, search, and stream a variety of movies and TV shows, with a sleek interface that mimics the original platform. The application features a user-friendly design with categories like trending, top-rated, and genre-specific sections, along with personalized recommendations based on user preferences. Users can create accounts, log in, and manage their watchlist while enjoying a seamless browsing experience.         
     ____________________**Note:** The Netflix Clone application is currently experiencing issues due to the TMDb API being unavailable.`,
    tech: [
      "React",
       "Firebase", 
       "Node.js", 
       "Tailwind" 
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `The clone is built using modern web technologies, including React.js for building dynamic and responsive user interfaces, Node.js and Express.js for managing the backend and APIs, and Firebase for efficient database storage of user information and content metadata. The front end integrates with REST APIs or TMDb API for fetching movie details and trailers. Styled with CSS or Bootstrap, the Netflix Clone delivers a polished and immersive streaming experience, showcasing the power of full-stack development in actio`,
      },
      b: {
        title: "",
        text: `Firebase is at the core of this application, providing services like Firebase Authentication for secure user login and registration, Cloud Firestore for real-time database storage of user data and content details, and Firebase Storage for hosting any media or images used in the app. The front end is developed using React.js, ensuring a dynamic and responsive user interface, while Firebase Hosting simplifies the deployment process. By integrating Firebase, the Netflix Clone offers seamless synchronization of data, enhanced security, and scalable architecture, making it a powerful demonstration of full-stack application development.`,
      },
    },
  }
];
