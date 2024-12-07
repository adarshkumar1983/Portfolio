import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  
  //glowText: "nextMotion",
  subTitle: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Adarsh kumar",
  subTitle: " Developer",
  body: `Driven by a passion for crafting intuitive, scalable web applications that prioritize user experience. Constantly learning and embracing emerging technologies to refine my development skills.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/adarshkumar0001/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/adarshkumar1983",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/u/108082430?s=400&u=5b466ae3502348ed129fc311a2e5d8be1f8913c0&v=4",
    title: "Hey...",
    subTitle: "That's me! ",
  },
};

