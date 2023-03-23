import React, { useState } from "react";
import Modal from "react-modal";
import pic from "../Portfolio/Assests/MacBook Air - 2.jpg";
import card from "./Assests/card1.jpg";
import banner from "./Assests/banner.jpg";
import runempireLogo from "./Assests/card2.jpg"
import runempireMockup from "./Assests/rubeempire.jpg";
import limuruMockup from "./Assests/Limuruwebdesign.jpg";
import limurudp from "./Assests//limurudp.jpg";
import ema_banner from "./Assests/ema_banner.png";
import ema_mockup from "./Assests/ema_mockup.png";
import midland_banner from "./Assests/midlandBanner.png";
import midland_mockup from "./Assests/midlandMOckUp.png";
import kings_banner from "./Assests/kings_touch_logo_banner.jpg";
import kings_mockup from "./Assests/kings_touch_logo_mockup.jpg";
import epoch_banner from "./Assests/epoch_poster_banner.jpg";
import epoch_mockup from "./Assests/epoch_poster_mockup.jpg";

import "./Portfolio-Style/styles.css";
import { Fade } from "react-reveal";



const projectData = [
  {
    id: 1,
    title: "Next Tech Logo",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/nexTech_logo_banner.jpeg"),
    modalImage: require("./Assests/nexTech_logo_mockup.jpeg"),
  },
  {
    id: 2,
    title: "Run Empire Logo",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/rube_empire_logo_banner.jpeg"),
    modalImage: require("./Assests/rube_empire_logo_mockup.jpeg"),
  },
  {
    id: 3,
    title: "Limuru Cherish Home",
    category: "Websites",
    project: "Websites Design",
    cardImage: limurudp,
    modalImage: limuruMockup,
    url: "https://limuru-cheshire-webapp-frontend.vercel.app/about",
  },
  {
    id: 4,
    title: "Ecommerce conference",
    category: "Websites",
    project: "Web Development",
    cardImage: require("./Assests/selling_online_banner.jpg"),
    modalImage: require("./Assests/selling_online_mockup.jpg"),
  },
  {
    id: 5,
    title: "Midland School ",
    category: "Websites",
    project: "Web Development",
    cardImage: midland_banner,
    modalImage: midland_mockup,
  },
  {
    id: 6,
    title: "Kings Touch ",
    category: "Graphics",
    project: "Logo Design",
    cardImage: kings_banner,
    modalImage: kings_mockup,
  },
  {
    id: 6,
    title: "Epoch Tours ",
    category: "Graphics",
    project: "Poster Designs",
    cardImage: epoch_banner,
    modalImage: epoch_mockup,
  },
  {
    id: 7,
    title: "BeesyBee ",
    category: "Graphics",
    project: "Poster Designs",
    cardImage: require("./Assests/bessybee_poster_mockup-1.jpg"),
    modalImage: require("./Assests/bessybee_poster_mockup.jpg"),
  },
  {
    id: 8,
    title: "Carly",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/carly_logo_banner.jpg"),
    modalImage: require("./Assests/carly_logo_mockup.jpg"),
  },
  {
    id: 9,
    title: "Charitable",
    category: "Graphics",
    project: "Poster Design",
    cardImage: require("./Assests/charitable_poster_banner.jpg"),
    modalImage: require("./Assests/charitable_poster_mockup.jpg"),
  },
  {
    id: 9,
    title: "Creator Stylers",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/creator_styles_logo_banner.jpg"),
    modalImage: require("./Assests/creator_styles_logo_mockup.jpg"),
  },
  {
    id: 10,
    title: "dtec Marketing",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/dtec_marketing_logo_banner.jpg"),
    modalImage: require("./Assests/dtec_marketing_logo_mockup.jpg"),
  },
  {
    id: 11,
    title: "Green Pulse",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/green_pulse_logo_banner.jpg"),
    modalImage: require("./Assests/green_pulse_logo_mockup.jpg"),
  },
  {
    id: 12,
    title: "Tina Creatives",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/tina_creatives_logo_banner.jpg"),
    modalImage: require("./Assests/tina_creatives_logo_mockup.jpg"),
  },
  {
    id: 13,
    title: "Twiga",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/twiga_logo_banner.jpg"),
    modalImage: require("./Assests/twiga_logo_mockup.jpg"),
  },
  {
    id: 13,
    title: "Viva Health Care",
    category: "Graphics",
    project: "Logo Design",
    cardImage: require("./Assests/viva_health_logo_banner.jpeg"),
    modalImage: require("./Assests/viva_health_logo_mockup.jpeg"),
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["All", "Websites", "Graphics"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio">
      <header className="banner">
        <img src={banner} alt="" />
      </header>
      <div className="potfolio-content">
        <nav className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory === category ? "active" : "not-active"
              }
            >
              {category}
            </button>
          ))}
        </nav>
        <Fade cascade bottom>
          <main>
            {filteredProjects.map((project) => (
              <div className="card">
                <img
                  className="bannerImg"
                  style={{ width: "300px", height: "200px" }}
                  src={project.cardImage}
                  alt={project.title}
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                />
                <h3 style={{ padding: "0 1rem" }}>{project.title}</h3>
                <p style={{ padding: " 0 1rem", color: "rgb(0, 0, 0, 0.7)" }}>
                  <a href={project.url} target="_blank">
                    <i class="fa fa-link" aria-hidden="true"></i>
                  </a>
                </p>
                <p style={{ padding: " 0 1rem" }}>{project.project}</p>
              </div>
            ))}
          </main>
        </Fade>
        <Modal
          isOpen={selectedProject !== null}
          onRequestClose={() => setSelectedProject(null)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 999,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "transparent",
              border: "none",
            },
          }}
        >
          {selectedProject && (
            <div>
              <button
               
                className="close"
                onClick={() => setSelectedProject(null)}
              >
                X
              </button>
              <div
                style={{ height: "80vh", overflow: "scroll" }}
                className="modal-content"
              >
                {/* <a href={project.url}>a</a> */}
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    borderBottom: "1px solid #000000",
                  }}
                  src={selectedProject.modalImage}
                  alt={selectedProject.title}
                />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
