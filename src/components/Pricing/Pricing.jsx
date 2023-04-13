import { useState } from "react";
import "./style/style.css";
import Expert from "../Expert/Expert";
import { Link } from "react-router-dom";

function CardGallery() {
  const [activeCategory, setActiveCategory] = useState("category1");

  const categories = [
    {
      id: "category1",
      name: "Website Development",
      cards: [
        {
          id: 1,
          title: "Standard Website",
          from: "Starting from",
          description: "KES 25,000",
          list: [
            "One to Four pages",
            "Custom Design and Development",
            "Basic Contact/Inquiry Form",
            "Site Upload & Setup of domain emails",
            "Search Engine Optimization (SEO)",
            "2 months free support after delivery",
          ],
        },
        {
          id: 2,
          title: "Business Website",
          from: "Starting from",
          description: "KES 40,000",
          list: [
            "One to Six Unique Pages Design",
            "Custom Design and Development",
            "Basic Contact/Inquiry Form",
            "Site Upload & Setup of domain emails",
            "Interactive Maps and Location Information",
            "Social Media Intergration",
            "Search Engine Optimization (SEO)",
            "Speed Optimization",
            "3 months free support after delivery",
          ],
        },
        {
          id: 3,
          title: "Corporate Website",
          from: "Starting from",
          description: "KES 60,000",
          list: [
            "One to 20 Unique Pages Design",
            "Custom Design and Development",
            "Corporate Branding and Identity",
            "Basic Contact/Inquiry Form",
            "Site Upload & Setup of domain emails",
            "Interactive Maps and Location Information",
            "Newsletter feature",
            "Blog Integration",
            "Social Media Intergration",
            "Content Management System (CMS) Integration",
            "Search Engine Optimization (SEO)",
            "Speed Optimization",
            "3 months free support after delivery",
          ],
        },
        {
          id: 4,
          title: "E-commerce Website",
          from: "Starting from",
          description: "KES 100, 000",
          list: [
            "Responsive Design (Optimized for Desktop, Mobile and Tablet)",
            "Custom website design and development",
            "Product catalog setup and management",
            "Shopping cart and checkout functionality",
            "Payment gateway integration",
            "Order management and tracking",
            "SEO Optimization",
            "Product search and filtering",
            "Product recommendations and upselling/cross-selling features",
            "Customer account management",
            "Analytics and reporting",
            "Inventory management",
            "Product review and rating system",
            "Email marketing integration",
            "3 months free support after delivery",
          ],
        },
      ],
    },
    {
      id: "category2",
      name: "Graphic Design",
      cards: [
        {
          id: 5,
          title: "Logo",
          from: "Starting from",
          description: "KES 2,500",
          list: [
            " Number of design concepts 2",
            "Number of revisions 2",
            "Delivery time frame",
            "Color options (e.g. black and white, full color, or both)",
          ],
        },
        {
          id: 6,
          title: "Business Cards",
          from: "Starting from",
          description: "KES",
                   list: [
            " Number of design concepts 2",
            "Number of revisions 2",
            "Delivery time frame",
            "Color options (e.g. black and white, full color, or both)",
          ],
        },
        {
          id: 7,
          title: "Bronchues",
          from: "Starting from",
          description: "KES",
                   list: [
            " Number of design concepts 2",
            "Number of revisions 2",
            "Delivery time frame",
            "Color options (e.g. black and white, full color, or both)",
          ],
        },
        {
          id: 8,
          title: "Card 2B",
          from: "Starting from",
          description: "KES",
                   list: [
            " Number of design concepts 2",
            "Number of revisions 2",
            "Delivery time frame",
            "Color options (e.g. black and white, full color, or both)",
          ],
        },
      ],
    },
    {
      id: "category3",
      name: "Social Media Management",
      cards: [
        {
          id: 9,
          title: "Card 3A",
          from: "Starting from",
          description: "KES",
          list: ["Item 1A", "Item 2A", "Item 3A"],
        },
        {
          id: 10,
          title: "Card 3B",
          from: "Starting from",
          description: "KES",
          list: ["Item 1B", "Item 2B", "Item 3B"],
        },
        {
          id: 11,
          title: "Card 2B",
          from: "Starting from",
          description: "KES",
          list: ["Item 1B", "Item 2B", "Item 3B"],
        },
        {
          id: 12,
          title: "Card 2B",
          from: "Starting from",
          description: "KES",
          list: ["Item 1B", "Item 2B", "Item 3B"],
        },
      ],
    },
    {
      id: "category4",
      name: "Printing and Branding",
      cards: [
        {
          id: 13,
          title: "Card 4A",
          from: "Starting from",
          description: "KES",
          list: ["Item 1A", "Item 2A", "Item 3A"],
        },
        {
          id: 14,
          title: "Card 4B",
          from: "Starting from",
          description: "KES",
          list: ["Item 1B", "Item 2B", "Item 3B"],
        },
      ],
    },
  ];

  const activeCategoryObject = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <div className="pricing">
      <Expert title="Our Prices" />
      <h3 className="plan">What Plan Fits you best?</h3>
      <nav>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              fontWeight: category.id === activeCategory ? "bold" : "normal",
              backgroundColor:
                category.id === activeCategory ? "#e8303a" : "transparent",
              color: "#00000",
              color: category.id === activeCategory ? "#FFFFFF" : "#000000",
              border: "1px solid #e8303a",
              borderRadius: "4px",
              padding: ".5rem 0.3rem",
              marginRight: " 0.5rem",
            }}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {/* Pricing cards */}

      <div className="card_container">
        {activeCategoryObject.cards.map((card) => (
          <div className="card" key={card.id}>
            <h4 className="card_title">{card.title}</h4>
            <p className="start">{card.from}</p>
            <p className="card_description">{card.description}</p>
            {card.list && (
              <ul className="list">
                {card.list.map((item) => (
                  <div className="items">
                    <i class="fa-regular fa-circle-check"></i>{" "}
                    <li className="" key={item}>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <p>
        <strong>Can&#x27;t decide?</strong> Don&#x27;t hesitate to
        <span style={{ paddingLeft: "8px" }}>
          <Link to="/contact">Contact us</Link>
        </span>
        !
      </p>
    </div>
  );
}

export default CardGallery;
