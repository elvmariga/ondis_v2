import { useState } from "react";
import "./style/style.css";
import Expert from "../Expert/Expert";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

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
          description: " 25,000",
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
          description: " 40,000",
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
          description: " 60,000",
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
          description: " 100, 000",
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
          title: "Logo Design",
          from: "Starting from",
          description: " 2,500",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Delivery time frame: 2 DAYS",
            "Deliverables: PNG and PDF Logo formats",
          ],
        },
        {
          id: 6,
          title: "Business Cards",
          from: "Starting from",
          description: "1,000",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Number of pages: 2",

            "Delivery time frame: 1 DAY",
          ],
        },
        {
          id: 7,
          title: "Bronchues",
          from: "Starting from",
          description: "1,000",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Deliverables: High quality printable card",
            "Size of brochure: A4",
            "High-resolution print-ready files",
            "Design consultation",
            "Delivery time frame: 3 days",
          ],
        },
        {
          id: 8,
          title: "Banners & Roll-Up Banners",
          from: "Starting from",
          description: "1,000",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Delivery time frame: 2 DAYS",
            "Banner size options: 3x5 FEET,",
            "High-resolution printing for crisp and clear images",
            "Roll-up banner options for easy transportation and storage",
            "Customizable designs with company branding, logos, and colors",
            "Optional installation services for on-site setup",
          ],
        },
        {
          id: 9,
          title: "Fliers",
          from: "Starting from",
          description: "1,000",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Delivery time frame: 2 DAYS",
            "Size options  8.5x11 ",
            "Single or double-sided design",
            "Customizable colors and fonts",
            "Print-ready or digital-only delivery options",
            "Different file formats provided (PDF, JPG, PNG)",
          ],
        },
        {
          id: 10,
          title: "Posters",
          from: "Starting from",
          description: "1,000",
          list: [
            " Number of design concepts: 1",
            "Number of revisions: 2",
            "Delivery time frame: 2 DAYS",
            "Poster size: dimensions and resolution (e.g 18x24 inches at 300 dpi)",
            "Orientation: landscape, portrait, or square",
            "Delivery format: digital file, printed poster, or both",
          ],
        },
      ],
    },
    {
      id: "category3",
      name: "Social Media Management",
      cards: [
        {
          id: 11,
          title: "WhatsApp Business Management",
          from: "Starting from",
          description: "5,000",
          list: [
            "Business profile",
            "Automated Messages",
            "Labels",
            "Catalog",
            "Quick Replies",
            "WhatsApp Web",
          ],
        },
        {
          id: 12,
          title: "LinkedIn  Business Management",
          from: "Starting from",
          description: "5,000",
          list: [
            "Company Page",
            "Content Creation",
            "Analytics",
            "Sponsored Content",
            "Lead Generation Forms",
            "Sales Navigator",
          ],
        },
        {
          id: 13,
          title: "Facebook Business Management",
          from: "Starting from",
          description: "5,000",
          list: [
            "Business Profile",
            "Content creation",
            "Posting and scheduling",
            "Community management",
            "Analytics and reporting",
            "Advertising",
            "Strategy development",
            "Influencer marketing",
            "A/B testing",
          ],
        },
        {
          id: 14,
          title: "Twitter Business Management",
          from: "Starting from",
          description: "5,000",
          list: [
            "Instagram Business Profile",
            "Twitter Ads",
            "Twitter Cards",
            "TweetDeck",
            "Direct messaging",
            "Customer support features",
            "Hashtags",
            "Twitter Lists",
          ],
        },
        {
          id: 15,
          title: "Instagram Business Management",
          from: "Starting from",
          description: "5,000",
          list: [
            "Instagram Business Profile",
            "Instagram Insights",
            "Instagram Ads",
            "Instagram Shopping",
            "Instagram Stories",
            "Instagram Live",
            "Instagram Reels",
            "Instagram Guides",
          ],
        },
      ],
    },
    // {
    //   id: "category4",
    //   name: "Printing and Branding",
    //   cards: [
    //     {
    //       id: 14,
    //       title: "Card 4A",
    //       from: "Starting from",
    //       description: "",
    //       list: ["Item 1A", "Item 2A", "Item 3A"],
    //     },
    //     {
    //       id: 15,
    //       title: "Card 4B",
    //       from: "Starting from",
    //       description: "",
    //       list: ["Item 1B", "Item 2B", "Item 3B"],
    //     },
    //   ],
    // },
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
                category.id === activeCategory ? "#e8303a" : "#FFFFFF",
              color: "#00000",
              color: category.id === activeCategory ? "#FFFFFF" : "#000000",
              border: "1px solid #e8303a",
              borderRadius: "4px",
              padding: "8px 16px",
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
            <p className="card_description">
              <span className="kes">KES</span> {card.description}
            </p>
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
        <span
          style={{
            padding: "4px 8px",
            color: "#e8303a",
            border: "2px solid #e8303a",
            borderRadius: "4px",
            margin: "8px",
          }}
        >
          <Link
            to="/contact"
            style={{ color: "#e8303a", textDecoration: "none", fontWeight:"600" }}
          >
            Contact us
          </Link>
        </span>
        
      </p>
    </div>
  );
}

export default CardGallery;
