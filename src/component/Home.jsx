import Navbar from "./Navbar";
import Work from "./Work";
import Skill from "./Skill";
import About from "./About";
import Service from "./Services";
import { Link } from "react-router-dom";
import profileimage from "../assets/profileimage.png";
import "../styles/Home.css";
import Reveal from "./Reveal";
import Experience from "./Expereice";



const Home = () => {
    return ( 
        <section>
            <Navbar />

            <div className="hero-section" id="Home">
                <div className="hero">
                <span>FRONTEND DEVELOPER</span>
                <h1>I build digital experience that feel simple.</h1>

                <p>Focused on crafting clean, responsive and user-centered web application
                    with modern technologies
                </p>
                    <ul className="stacks">
                <li><span>REACT</span></li>
                <li><span>JAVASCRIPT</span></li>
                <li><span>API INTEGRATION</span></li>

                </ul>

                 <div className="CTA">
           <a href="#Work"><button>VIEW SELECTED WORK</button></a>
          <a href="#About"><button>START A CONVERSATION</button></a>
            </div>
         
            </div>
           
            <div className="profile-image">
            <img src={profileimage} alt="profile" />

            </div>
           <div className="experience-marker">
  <span className="number">01</span>
  <div className="line"></div>
  <span>BASE IN NIGERIA</span>
</div>
    </div>

            <Reveal>
            <Work />
            </Reveal>
            <Reveal>
            <Service />
            </Reveal>
            <Reveal>
            <Skill />
            </Reveal>
            <Reveal>
            <Experience />
            </Reveal>
            <Reveal>
            <About />
            </Reveal>

            <div className="footer">
                <p>© 2026 Vee-Dev-code | Frontend Developer</p>
            </div>


        </section>
     );
}
 
export default Home;