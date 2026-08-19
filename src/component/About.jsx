import "../styles/About.css";
import { FaMapMarkerAlt, FaCircle, FaGlobe, FaEnvelope, FaWhatsapp,
    FaLinkedinIn, FaGithub,  FaInstagram
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


const About = () => {
    return ( 
        <div className="About-me" id="About">
            
            <main className="about-page">
                <div className="about">
                    <h4>ABOUT ME</h4>
                <h3>A little bit about me.</h3>
                <p>I'm Chigbu Victor Oluomachi, a Frontend developer known professionally as VeeDev. I am passionate about
                     building beatiful, functional and user-centered web applications.
                     I enjoy turning ideas into real products that are not only visually appealing but also intuitive and reliable.
                </p>
                <p>I approach development by understanding the problem first, building with intention, and refining the details that make a product feel polished. </p>
                <ul className="location">
                    <li><span><FaMapMarkerAlt /></span>Based in Nigeria</li>
                    <li><span><FaCircle className="available"/></span>Available for remote work</li>
                    <li><span><FaGlobe /></span>Open to a global opportunities</li>
                </ul>
                </div>
                <div className="contact" id="About">
                    <h3>CONTACT</h3>
                    <h4>LET'S CONNECT</h4>
                    <h2>Have a project in mind?</h2>
                    <p>I will love to hear about it. let's build something great together.</p>
                    <ul className="connect">
                        <li><span><FaEnvelope /></span>Email: chigbuvictoroluomachi@gmail.com</li>
                        <li>< a href="https://wa.me/2349126009577" target="_blank"><FaWhatsapp /></a>WhassApp: +2349126009577</li>
                        <li>< a href="https://www.linkedin.com/in/victor-chigbu-861b8a381/" target="_blank"><FaLinkedinIn /></a>linkedIn: Victor Chigbu </li>
                         <li>< a href="https://github.com/Vee-Dev-code" target="_blank"><FaGithub /></a>Github: Vee-Dev-code </li>

                    </ul>
                    
                    <div className="social">
                        <a href="https://www.instagram.com/chigbuvictoroluomachi" target="_blank" rel="noreferrer">< FaInstagram className="instagram"/></a>

                        <a href="https://www.tiktok.com/@www.tiktokcomveedevs" target="_blank" rel="noreferrer">  <FaTiktok className="tiktok"/></a>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default About;