import { useState, useEffect } from "react";
import "./Customer-style/Customer-style.css";
import logo1 from "./assets/1.png";
import logo2 from "./assets/2.png";
import logo3 from "./assets/3.png";
import logo4 from "./assets/4.png";
import logo5 from "./assets/5.png";
import logo6 from "./assets/6.png";
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
      name: "Gibbon Olulo",
      title: "Founder",
      companyLogo: logo1,
    },
    {
      id: 2,
      image: Dp2,
      rate: Star,
      quote:
        "Digital marketing services provided by OndisHub has been a game-changer for our business. Their strategic approach has helped us significantly increase our online presence and reach our target audience more effectively.  ",
      name: "Fredrick Oyoo",
      title: "CTO",
      companyLogo: logo2,
    },
    {
      id: 3,
      image: Dp3,
      rate: Star,
      quote:
        "OndisHub have revolutionized our business. Their well-planned approach has played a pivotal role in enhancing our online visibility and enabled us to effectively engage with our desired audience.",
      name: "Harun Nderitu",
      title: null,
      companyLogo: logo3,
    },
    {
      id: 4,
      image: Dp4,
      rate: Star,
      quote: "Easy to communicate with the team, with 24/7 support.",
      name: "Odero Oluoch",
      title: "Founder",
      companyLogo: logo4,
    },
    {
      id: 5,
      image: Dp5,
      rate: Star,
      quote: "Ondishub is the best company. It delivers on time",
      name: "Dr. Achando",
      title: "Managing Director",
      companyLogo: logo5,
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
          {/* <img
            src={currentTestimony.image}
            alt={`Testimony from ${currentTestimony.name}`}
          /> */}
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
