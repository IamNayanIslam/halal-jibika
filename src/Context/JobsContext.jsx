import { createContext } from "react";

const initialJobs = [
  {
    id: 1,
    title: "Google Internship Program",
    logo: "https://cdn.icon-icons.com/icons2/2428/PNG/512/google_black_logo_icon_147125.png",
    companyName: "Google",
    position: "Intern Developer",
    description: "This is an internship opportunity from Google",
  },
  {
    id: 2,
    title: "Facebook Junior Development Program",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Facebook_icon_(black).svg",
    companyName: "Facebook",
    position: "Junior Developer",
    description: "This is a junior developer recruitment from Facebook",
  },
  {
    id: 3,
    title: "Microsoft Senior Development Program",
    logo: "https://i.pinimg.com/736x/7a/34/c6/7a34c6e11b0f09733f3e0cf1206b922e.jpg",
    companyName: "Microsoft",
    position: "Senior Developer",
    description: "This is a junior developer recruitment from Microsoft",
  },
  {
    id: 4,
    title: "Amazone Internship Program",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    companyName: "Amazone",
    position: "Intern Developer",
    description: "This is a Intern developer recruitment from Amazone",
  },
  {
    id: 5,
    title: "Appel Junior SBJ Program",
    logo: "https://logowik.com/content/uploads/images/apple-black8038.jpg",
    companyName: "Appel",
    position: "Junior Developer",
    description: "This is a junior developer recruitment from SBJ",
  },
  {
    id: 6,
    title: "IBM Senior Development Program",
    logo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    companyName: "IBM",
    position: "Senior Developer",
    description: "This is a junior developer recruitment from IBM",
  },
];

export const jobsContext = createContext();
