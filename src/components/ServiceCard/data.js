// services data
import svg from "./assests/bookmark.svg";
import svg2 from "./assests/bookmark2.svg";
import Html from "./assests/html.svg";
import Css from "./assests/css3.svg";
import React from "./assests/react.svg";
import Angular from "./assests/angular.svg";
import Figma from "./assests/figma.svg";
import Others from "./assests/others.svg";
import webDesign from "./assests/web-development.svg"
import graphicDesign from "./assests/graphicdesign-banner1.svg"
import socialmedia from "./assests/socialmediabanner.jpg"
import illustrator from "./assests/illustrator.svg";
import indesign from "./assests/indesign.svg";
import photoshop from "./assests/photoshop.svg";
import WhatsApp from "./assests/WhatsApp.svg";
import LinkedIn from "./assests/linkedin.svg";
import Facebook from "./assests/facebook.svg";
import Twitter from "./assests/Twitter.svg";
import Instagram from "./assests/instagram.svg";




// service card details data

const cardData = [
  {
    id: 1,
    title: "Website Design and Development",
    image: webDesign,
    details: "We create user-centric websites that prioritize user experience and are easy to navigate. Our expertise helps you elevate your online presence and reach your goals.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "web",
        service: "Standard Website",
        details: "This is ideal for Blogs, Landing page and Portifolio websites",
      },
      {
        id: 2,
        icon: svg2,
        category: "web",
        service: "Business Website",
        details: "Ideal for SME's, company portfolio, and Institues websites",
      },
      {
        id: 3,
        icon: svg,
        category: "web",
        service: "Corporates Website",

        details: "Ideal for Large Corporates, and Learning Institutes websites",
      },
      {
        id: 4,
        icon: svg2,
        category: "web",
        service: "E-commerce Website",
        details:
          "Ideal for Business in the Retail Industry (E-Commerce) websites",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: Html,
      },
      {
        id: 2,
        stackIcon: Css,
      },
      {
        id: 3,
        stackIcon: React,
      },
      {
        id: 4,
        stackIcon: Figma,
      },
      {
        id: 5,
        stackIcon: Angular,
      },
      {
        id: 6,
        stackIcon: Others,
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Design",
    image: graphicDesign,
    details:
      "Transform your online image with our art-tech magic - unleashing visual masterpieces that wow, communicate, and reflect your unique brand.",
    servicelist: [
      {
        id: 1,
        icon: svg,
        category: "graphics",
        service: "Letterheads",
        details:
          "Professional letterhead design strengthens your brand, reinforces values & mission, and leaves a lasting impression. Make it stand out with precise design elements.",
      },
      {
        id: 2,
        icon: svg2,
        category: "graphics",
        service: "Logo",
        details:
          "Our logo creates recognition and connection with customers, making it an essential part of your marketing strategy. It builds a memorable brand image that lasts.",
      },
      {
        id: 3,
        icon: svg,
        category: "graphics",
        service: "Business Cards",
        details:
          "Stand out with our professional Business cards. Show off your contact info, build credibility, and promote your products and services effortlessly. We'll help you make a great impression!",
      },
      {
        id: 4,
        icon: svg2,
        category: "graphics",
        service: "Bronchues",
        details:
          "Brochures are your marketing toolkit! Choose the right type to create a successful campaign - info, promo, sales, or event brochures. Each has its own benefits, so pick the one that meets your goals!",
      },
      {
        id: 5,
        icon: svg,
        category: "graphics",
        service: "Banners & Roll-up Banners",
        details:
          "Banners are an effective way to promote, spread brand awareness, and draw attention. Choose from retractable, roll-up, vinyl, fabric, mesh, or pole banners for success! Quality materials, vivid colors, and professional graphics are key.",
      },
      {
        id: 6,
        icon: svg2,
        category: "graphics",
        service: "Fliers",
        details:
          "As a business, fliers are an effective way to reach your target audience. Brochures, leaflets, postcards, catalogs, magazines, newsletters, and door hangers all offer unique ways to communicate your message or promote your product or service. Choose the right combination to achieve your goals.",
      },
      {
        id: 7,
        icon: svg,
        category: "graphics",
        service: "Posters",
        details:
          "Posters are a powerful tool for businesses - create a recognizable brand, reach specific audiences, promote offers, and boost loyalty. Invest in posters and drive customer engagement!",
      },
      {
        id: 8,
        icon: svg2,
        category: "graphics",
        service: "Others",
        details:
          "1:Receipts Invoice,   2:Delivery Book, 3:Invitations Cards, 4:Banners, 5:Flylers, 6:Posters ",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: illustrator,
      },
      {
        id: 2,
        stackIcon: photoshop,
      },
      {
        id: 3,
        stackIcon: indesign,
      },
      {
        id: 4,
        stackIcon: Figma,
      },
      {
        id: 5,
        stackIcon: Others,
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
        details:
          "We offer marketing via WhatsApp to improve your connection with your audience. Services include Whatsapp Business Catalog management, promotions, customer service, engagement, etc.",
      },
      {
        id: 2,
        icon: svg2,
        category: "socialMedia",
        service: "LinkedIn",
        details:
          "Our services help you create a highly optimized LinkedIn Business Account that gives you the best chance of success.",
      },
      {
        id: 3,
        icon: svg,
        category: "socialMedia",
        service: "Facebook",
        details:
          "Reach potential customers cost-effectively with tailored Facebook Ads & content. Connect with them & build loyalty with regular engagement & meaningful relationships.",
      },
      {
        id: 4,
        icon: svg2,
        category: "socialMedia",
        service: "Twitter",
        details:
          "Need to stand out on Twitter? Our services can help create a highly optimized Twitter Business Account for the best chance at success.",
      },
      {
        id: 5,
        icon: svg,
        category: "socialMedia",
        service: "Instagram",
        details:
          "Upgrade your Instagram presence and stand out from the crowd with our optimization services! Get the most out of your Instagram Business Account and start achieving the success you deserve.",
      },
    ],
    techStack: [
      {
        id: 1,
        stackIcon: WhatsApp,
      },
      {
        id: 2,
        stackIcon: LinkedIn,
      },
      {
        id: 3,
        stackIcon: Facebook,
      },
      {
        id: 4,
        stackIcon: Twitter,
      },
      {
        id: 5,
        stackIcon: Instagram,
      },
      {
        id: 6,
        stackIcon: Others,
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Printing and Branding",
  //   image: webDesign,
  //   details:
  //     "We specialize in crafting and promoting a brand's identity, messages, and content on various social media platforms with the purpose of increasing brand recognition, improving customer experience, and creating a positive perception of the brand.",
  //   servicelist: [
  //     {
  //       id: 1,
  //       icon: svg,
  //       category: "web",
  //       service: "Blog sdfdsfd",
  //     },
  //     {
  //       id: 2,
  //       icon: svg,
  //       category: "graphics",
  //       service: "ecormm Website",
  //     },
  //     {
  //       id: 3,
  //       icon: svg,
  //       category: "socialMedia",
  //       service: "Blog Website",
  //     },
  //     {
  //       id: 4,
  //       icon: svg,
  //       category: "printing",
  //       service: "Blog Webdfgdfgdfgsite",
  //     },
  //   ],
  //   techStack: [],
  // },
];
export default cardData;
