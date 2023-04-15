import { useState, useEffect } from "react";
import "./Customer-style/Customer-style.css";
import logo from "./assets/figma_logo.svg";
import Dp from "./assets/Ellipse 1.svg";
import Dp2 from "./assets/Ellipse 2.svg";
import Dp3 from "./assets/Ellipse 3.svg";
import Dp4 from "./assets/Ellipse 4.svg";
import Dp5 from "./assets/Ellipse 5.svg";
import Star from "./assets/stars.svg";

const Testimonial = () => {
  const [testimonies, setTestimonies] = useState([
    {
      id: 1,
      image: Dp,
      rate: Star,
      quote:
        "The digital agent effectively meets all of my customer's needs, streamlining my customer service processes and enhancing the overall customer experience. I highly recommend it to anyone looking to improve their business performance.",
      name: "Phoebe Toel",
      title: "CEO",
      companyLogo: logo,
    },
    {
      id: 2,
      image: Dp2,
      rate: Star,
      quote:
        "Digital marketing services provided by OndisHub has been a game-changer for our business. Their strategic approach has helped us significantly increase our online presence and reach our target audience more effectively.  ",
      name: "Kevin Brown",
      title: "CTO",
      companyLogo: logo,
    },
    {
      id: 3,
      image: Dp3,
      rate: Star,
      quote:
        "Digital marketing services provided by OndisHub has been a game-changer for our business. Their strategic approach has helped us significantly increase our online presence and reach our target audience more effectively.  ",
      name: "Miss Owanda",
      title: null,
      companyLogo: logo,
    },
    {
      id: 4,
      image: Dp4,
      rate: Star,
      quote: "Easy to communicate with the team, with 24/7 support.",
      name: "Victor W.",
      title: "CTO",
      companyLogo: logo,
    },
    {
      id: 5,
      image: Dp5,
      rate: Star,
      quote: "Ondishub is the best company. It delivers on time",
      name: "Dr. Achando",
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
              <img src={currentTestimony.rate} alt="rates" />
            </span>
            <p className="testimony-quote">{currentTestimony.quote}</p>
          </div>
          <div className="testimony-author">
            <div className="testimony-name">
              <h4>{currentTestimony.name}</h4>
            </div>
            <div className="testimony-title">
              <p>{currentTestimony.title}</p>
            </div>
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
         
          <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
