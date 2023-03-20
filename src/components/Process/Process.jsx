import React from "react";
import "./style/style.css";
import step1 from "./assets/step1.jpg";
import step2 from "./assets/step2.jpeg";
import step3 from "./assets/step3.jpg";
import step4 from "./assets/step4.jpg";
import icon1 from "./assets/bookmark.svg"
import Expert from "../Expert/Expert";

const steps = [
  {
    index: 1,
    image: step1,
    icon: "fa-solid fa-arrows-to-eye fa-2xl",
    title: "Inquiry and Discovery",
    details:
      "Typically involves gathering information about our client's business, target audience, competitors, and industry trends. Defining the scope of the project, including deliverables, timelines, and budget.",
  },
  {
    index: 2,
    image: step2,
    icon: "fa-solid fa-wand-magic-sparkles fa-2xl",
    title: "Planning",
    details:
      "We develop a detailed plan for the project. This should include a project timeline, milestones, and deliverables. TWe work with the client to identify Key Performance Indicators (KPIs) and establish a process for measuring and reporting progress.",
  },
  {
    index: 3,
    image: step3,
    icon: "fa-solid fa-laptop-code fa-2xl",
    title: "Execution",
    details:
      "With a plan in place, we begin executing the project. This typically involves creating content, designing assets, developing software, or implementing marketing campaigns. Throughout the execution phase, maintaining clear communication with our client, providing regular updates and soliciting feedback to ensure that the project is on track.",
  },
  {
    index: 4,
    image: step4,
    icon: "fa-solid fa-truck-ramp-box fa-2xl",
    title: "Delivery",
    details:
      "We deliver the final product or service to our client. This may involve launching a website, publishing content, or deploying a software application. In addition, a final quality assurance check is done to ensure that the project meets the client's requirements and is free of errors or defects. We also provide the client with any necessary training or support to ensure that they can effectively use and maintain the product or service.",
  },
];

const Process = () => {
  return (
    <div>
      <div className="process-card">
        <div className="process-content">
          <div className="title">
            <Expert title="Our Process" />
            <h4>We love, What we do</h4>
            <p>
              It's a labor of love that allows us to create innovative solutions
              and achieve exceptional results for our clients.
            </p>
          </div>
          {steps.map((step) => (
            <div className="card">
              <div className="card-right">
                <img src={step.image} alt="Step 10" />
              </div>
              <div className="card-left">
                <div className="card-left-step-number">
                  <h3>{step.index}.</h3>
                </div>
                <div className="card-left-step-details">
                  <div className="icon">
                    {/* <img src={step.icon} alt="icon" />
                     */}
                    <i class={step.icon}></i>
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
