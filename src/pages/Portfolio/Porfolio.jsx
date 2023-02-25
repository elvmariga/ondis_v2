import React, { useState } from "react";
import Modal from "react-modal";
import pic from "../Portfolio/Assests/MacBook Air - 2.jpg";
import card from "./Assests/card1.jpg";
import banner from "./Assests/banner.jpg";
import "./Portfolio-Style/styles.css";
import Card from "../../components/ServiceCard/Card";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    category: "web",
    project: "Business Card",
    cardImage: card,
    modalImage: pic,
  },
  {
    id: 2,
    title: "Project 2",
    category: "graphics",
    project: "Business Card",
    cardImage: card,
    modalImage: pic,
  },
  {
    id: 3,
    title: "Project 3",
    category: "printing",
    project: "Business Card",
    cardImage: card,
    modalImage: pic,
  },
  {
    id: 4,
    title: "Project 4",
    category: "web",
    project: "Business Card",
    cardImage: card,
    modalImage: pic,
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["all", "web", "graphics", "printing"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const filteredProjects =
    selectedCategory === "all"
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

        <main>
          {filteredProjects.map((project) => (
            <div
              className="card"
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <img
                style={{ width: "300px", height: "auto" }}
                src={project.cardImage}
                alt={project.title}
              />
              <h3 style={{ padding: "0 1rem" }}>{project.title}</h3>
              <p style={{ padding: " 0 1rem" }}>{project.project}</p>
            </div>
          ))}
        </main>
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
              <button onClick={() => setSelectedProject(null)}>X</button>
              <img
                style={{ width: "100%", height: "auto" }}
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
