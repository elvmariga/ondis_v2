import React, { useState } from "react";
import Modal from "react-modal";
import pic from "../Portfolio/Assests/MacBook Air - 2.jpg"
// import { PDFReader } from "react-pdf-reader";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    category: "web",
    cardImage:
      "https://drive.google.com/file/d/1FKDGMLvbNKA9l-edhZ8z-mYeU356B6dM/view?usp=sharing",
    modalImage:
      "https://www.canva.com/design/DAFabIPLkKw/2o1ouaS0Yk6kj9f9aIV-ZA/view?utm_content=DAFabIPLkKw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    id: 2,
    title: "Project 2",
    category: "graphics",
    cardImage: "project2-card.jpg",
    modalImage: "/path/to/project2-modal.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    category: "printing",
    cardImage: "project3-card.jpg",
    modalImage: "/path/to/project3-modal.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    category: "web",
    cardImage: "project4-card.jpg",
    modalImage: "/path/to/project4-modal.jpg",
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
    <div>
      <header>{/* banner goes here */}</header>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </nav>
      <main>
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)}>
            <img src={project.cardImage} alt={project.title} />
            <h3>{project.title}</h3>
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
          <div>
            <img
              style={{ width: "80%", height: "auto" }}
              src={selectedProject.modalImage}
              alt={selectedProject.title}
            />
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
