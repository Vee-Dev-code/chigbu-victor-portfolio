import storeImg from "../assets/store.png";
import calculatorImg from "../assets/calculator.png";
import interiorImg from "../assets/interior.png";
import mobileImg from "../assets/mobilevieew.png";
import { Link } from "react-router-dom";
import "../styles/Work.css";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";



const Work = () => {

const projects = [
  {
    title: "VICTOR'S STORE",
    type: "E-commerce Platform",
    image: storeImg,
    link: "https://victor-stores.netlify.app/",
    description:
      "A full-featured online store with cart, wishlist, search, checkout and Flutterwave payment integration.",
    technologies: ["React", "Context API", "Flutterwave"],
  },
  {
    title: "INTERIOR DESIGN",
    type: "Landing Page",
    image: interiorImg,
     link: "https://victor-site-beta.vercel.app/",
    description:
      "A responsive landing page for an interior company with modern UI and smooth interactions.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "CALCULATOR",
    type: "JavaScript Project",
    image: calculatorImg,
     link: "https://calculatorsite-black.vercel.app/",
    description:
      "A simple and elegant calculator built with vanilla JavaScript with theme switching.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];


  return (
    <Reveal>
    <>
      {/* Selected Work */}
      <div className="selected-one" id="Work">
      <section className="selected-work" >

        <div className="work-heading">

          <div>
            <span className="section-label">SELECTED WORK</span>
           <div className="github">
            <a href="https://github.com/Vee-Dev-code"  target="_blank"
  rel="noopener noreferrer"><button><span><FaGithub /></span>View Github</button></a>
           </div>
            <h2>
              A selection of projects
              <br />
              I'm proud of.
            </h2>
          </div>


        </div>

        <div className="project-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-info">

                <h3>{project.title}</h3>
                
                <span className="project-type">
                  {project.type}
                </span>

                <p>
                  {project.description}
                </p>
                <div className="links">
                <a
                href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="live-link"
        >
            
    <button> VIEW LIVE SITE <span><HiArrowRight /></span></button>
</a>
</div>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={tech}>
                      {tech}

                      {index !== project.technologies.length - 1 && (
                        <b>•</b>
                      )}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>
      <div className="break-down">
        <div className="image-store">
        <img src={storeImg} alt="e-commerce-site" />
        <div className="mobile-image">
            <img src={mobileImg} alt="mobile-view" />
        </div>
          </div>
          <div className="details">
            <h2>Victor's Store</h2>
            <p>A complete e-commerce experience built with React and moderen web technologies</p>
           <ul className="features">
            <li>
                <h5>ROLE</h5>
                <span>Frontend Developer</span>
            </li>
            <li>
                <h5>STACk</h5>
                <span>React, Context API, React Router, Css, Flutterwave, REST API</span>
            </li>
            <li>
                <h5>FEATURES</h5>
                <span>Product Search, Categories, cart, Wishlist, Checkout</span>

            </li>
           </ul>
           <button className="button">VIEW CASE STUDY <span><HiArrowRight /></span></button>
          </div>
      </div>
      </div>
    </>
    </Reveal>
  );
};


 
export default Work;