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
import midland_mockup from "./Assests/midlandMOckUp.png"
import "./Portfolio-Style/styles.css";
import { Fade } from "react-reveal";


const projectData = [
  {
    id: 1,
    title: "Next Tech Logo",
    category: "Graphics",
    project: "Logo Design",
    cardImage: card,
    modalImage: pic,
  },
  {
    id: 2,
    title: "Run Empire Logo",
    category: "Graphics",
    project: "Logo Design",
    cardImage: runempireLogo,
    modalImage: runempireMockup,
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
    title: "Ema Westlink Ltd ",
    category: "Websites",
    project: "Web Development",
    cardImage: ema_banner,
    modalImage: ema_mockup,
  },
  {
    id: 5,
    title: "Midland School ",
    category: "Websites",
    project: "Web Development",
    cardImage: midland_banner,
    modalImage: midland_mockup,
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
                  style={{ width: "300px", height: "250px" }}
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
            <div
              style={{ height: "80vh", overflow: "scroll" }}
              className="modal-content"
            >
              <button
                style={{
                  color: "red",
                  border: "none",
                  background: "none",
                  fontSize: "1.2rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                className="close"
                onClick={() => setSelectedProject(null)}
              >
                X
              </button>
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
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
