import { useState, useEffect } from "react";
import './Customer-style/Customer-style.css';
import logo from "./assets/figma_logo.svg"

const Testimonial = () => {
  const [testimonies, setTestimonies] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      rate: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum velit in velit semper sagittis.",
      name: "John Doe",
      title: "CEO",
      companyLogo: logo,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-14722234103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      rate: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum velit in velit semper sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum velit in velit semper sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum velit in velit semper sagittis.",
      name: "John Doe",
      title: "CTO",
      companyLogo: logo,
    },
    // Add more testimonies here...
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonies.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonies.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonies.length);
  };
  const currentTestimony = testimonies[currentIndex];

  return (
    <div className="testimony">
      <div>
        <button className="testimony-arrows" onClick={goToPrevious}>
          <i class="fa-solid fa-arrow-left-long fa-2xl"></i>
        </button>
      </div>
      <div className="testimony-container">
        <div className="testimony-image">
          <img
            src={currentTestimony.image}
            alt={`Testimony from ${currentTestimony.name}`}
          />
        </div>
        <div className="testimony-content">
          <div className="testimony-quote">
            <span className="testimony-rate">
              {currentTestimony.rate} stars
            </span>
            <p>{currentTestimony.quote}</p>
          </div>
          <div className="testimony-author">
            <div className="testimony-name">{currentTestimony.name}</div>
            <div className="testimony-title">{currentTestimony.title}</div>
            <div className="testimony-company-logo">
              <img
                src={currentTestimony.companyLogo}
                alt={`Logo of ${currentTestimony.company}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="testimony-arrows" onClick={goToPrevious}>
          {" "}
          <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
