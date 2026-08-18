import React from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaCalendarAlt,
} from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
    <section className="experience-section" id="experience">

      {/* Section heading */}
      <div className="experience-heading">
        <span className="experience-bg-text">EXPERIENCE</span>

        <h2>
          <span>E</span>XPERIENCE
        </h2>

        <div className="heading-line"></div>

        <p>
          My journey in building modern and responsive web applications.
        </p>
      </div>

      {/* Timeline */}
      <div className="experience-timeline">

        {/* Experience 1 */}
        <div className="experience-item">

          <div className="experience-year">
            2025 —<br />
            Present
          </div>

          <div className="timeline-dot"></div>

          <div className="experience-card">

            <div className="experience-info">

              <div className="experience-icon">
                <FaBriefcase />
              </div>

              <div>
                <h3>Frontend Developer</h3>

                <h4>Independent / Project-Based</h4>

                <div className="experience-date">
                  <FaCalendarAlt />
                  <span>2025 — Present</span>
                </div>
              </div>

              <p className="experience-description">
                Building responsive web applications and interfaces using
                React, JavaScript, HTML, CSS and REST APIs.
              </p>

            </div>

            <div className="experience-divider"></div>

            <div className="experience-details">
              <ul>
                <li>
                  Developed responsive portfolio and e-commerce interfaces.
                </li>

                <li>
                  Built reusable React components and managed application state.
                </li>

                <li>
                  Integrated REST APIs for dynamic product and weather data.
                </li>

                <li>
                  Implemented responsive layouts for desktop and mobile.
                </li>

                <li>
                  Used Git and GitHub for version control and project
                  management.
                </li>

                <li>
                  Deployed projects using Vercel and Netlify.
                </li>
              </ul>
            </div>

          </div>
        </div>


        {/* Experience 2 */}
        <div className="experience-item">

          <div className="experience-year">
            2026
          </div>

          <div className="timeline-dot"></div>

          <div className="experience-card">

            <div className="experience-info">

              <div className="experience-icon">
                <FaLaptopCode />
              </div>

              <div>
                <h3>Frontend Developer — E-commerce Project</h3>

                <h4>Personal Project</h4>

                <div className="experience-date">
                  <FaCalendarAlt />
                  <span>2026</span>
                </div>
              </div>

            </div>

            <div className="experience-divider"></div>

            <div className="experience-details">
              <ul>
                <li>
                  Built a responsive e-commerce application with React.
                </li>

                <li>
                  Integrated product data through the DummyJSON API.
                </li>

                <li>
                  Implemented cart, wishlist and search functionality.
                </li>

                <li>
                  Added persistent cart and wishlist state using localStorage.
                </li>

                <li>
                  Integrated Flutterwave test payments during development.
                </li>

                <li>
                  Designed mobile-responsive UI and interactive user
                  experiences.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Experience;