// services data
import svg from "./assests/bookmark.svg";
import Html from "./assests/html.svg";
import Css from "./assests/css3.svg";
import React from "./assests/react.svg";
import Angular from "./assests/angular.svg";
import Figma from "./assests/figma.svg";
import Others from "./assests/others.svg";
import tick from "./assests/tick.svg";
import webDesign from "./assests/web-development.svg"
import graphicDesign from "./assests/graphicdesign-banner.jpg"
import socialmedia from "./assests/socialmediabanner.jpg"



// service card details data

const cardData = [
  {
    id: 1,
    title: "Website",
    image: webDesign,
    details:
      "We create user-centric websites that prioritize user experience and are easy to navigate. Our expertise helps you elevate your online presence and reach your goals.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "web",
        service: "Standard Website",
      },
      {
        id: 2,
        icon: svg,
        category: "web",
        service: "Business Website",
      },
      {
        id: 3,
        icon: svg,
        category: "web",
        service: "Corporates Website",
      },
      {
        id: 4,
        icon: svg,
        category: "web",
        service: "E-commerce Website",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: svg,
      },
      {
        id: 2,
        stackIcon: svg,
      },
      {
        id: 3,
        stackIcon: svg,
      },
      {
        id: 4,
        stackIcon: svg,
      },
    ],
  },
  {
    id: 2,
    title: "Graphic design",
    image: graphicDesign,
    details:
      "Transform your online image with our art-tech magic - unleashing visual masterpieces that wow, communicate, and reflect your unique brand.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "graphics",
        service: "Letterheads",
      },
      {
        id: 2,
        icon: svg,
        category: "graphics",
        service: "Logo",
      },
      {
        id: 3,
        icon: svg,
        category: "graphics",
        service: "Business Cards",
      },
      {
        id: 4,
        icon: svg,
        category: "graphics",
        service: "Bronchues",
      },
      {
        id: 5,
        icon: svg,
        category: "graphics",
        service: "Banners & Roll-up Banners",
      },
      {
        id: 6,
        icon: svg,
        category: "graphics",
        service: "Fliers",
      },
      {
        id: 5,
        icon: svg,
        category: "graphics",
        service: "Posters",
      },
      {
        id: 6,
        icon: svg,
        category: "graphics",
        service: "Others",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: svg,
      },
      {
        id: 2,
        stackIcon: svg,
      },
      {
        id: 3,
        stackIcon: svg,
      },
      {
        id: 4,
        stackIcon: svg,
      },
    ],
  },
  {
    id: 3,
    title: "Social Media Management",
    image: socialmedia,
    details:
      "We specialize in crafting and promoting a brand's identity, messages, and content on various social media platforms with the purpose of increasing brand recognition, improving customer experience, and creating a positive perception of the brand.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "socialMedia",
        service: "WhatsApp",
      },
      {
        id: 2,
        icon: svg,
        category: "socialMedia",
        service: "LinkedIn",
      },
      {
        id: 3,
        icon: svg,
        category: "socialMedia",
        service: "Facebook",
      },
      {
        id: 4,
        icon: svg,
        category: "socialMedia",
        service: "Twitter",
      },
      {
        id: 5,
        icon: svg,
        category: "socialMedia",
        service: "Instagram",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: svg,
      },
      {
        id: 2,
        stackIcon: svg,
      },
      {
        id: 3,
        stackIcon: svg,
      },
      {
        id: 4,
        stackIcon: svg,
      },
    ],
  },
  {
    id: 4,
    title: "Printing and Branding",
    image: webDesign,
    details:
      "We specialize in crafting and promoting a brand's identity, messages, and content on various social media platforms with the purpose of increasing brand recognition, improving customer experience, and creating a positive perception of the brand.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "web",
        service: "Blog sdfdsfd",
      },
      {
        id: 2,
        icon: svg,
        category: "graphics",
        service: "ecormm Website",
      },
      {
        id: 3,
        icon: svg,
        category: "socialMedia",
        service: "Blog Website",
      },
      {
        id: 4,
        icon: svg,
        category: "printing",
        service: "Blog Webdfgdfgdfgsite",
      },
    ],
    techStack: [],
  },
];
export default cardData;
