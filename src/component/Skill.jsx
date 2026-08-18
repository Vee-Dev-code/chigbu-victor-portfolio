import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaServer, FaMobileAlt} from "react-icons/fa";
import "../styles/Skill.css";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const Skils = () => {
    return ( 
      <Reveal>
        <div className="skills" id="Skill">
          <span className="the-skill">Skills</span>
          <h2>Technologies & Tools I Work With</h2>
          <p>I build responsive, modern, and user-focused web 
            <br /> interfaces using moderen frontend technologies.</p>
        <div className="technology">
  <div className="skill">
    <FaHtml5  className="html"/>
    <span>HTML</span>
  </div>

  <div className="skill">
    <FaCss3Alt className="css" />
    <span>CSS</span>
  </div>

  <div className="skill">
    <FaJs className="js" />
    <span>JavaScript</span>
  </div>
   <div className="skill">
    <FaServer className="api"/>
    <span>REST API</span>
  </div>

  <div className="skill">
    <FaReact className="react"/>
    <span>React</span>
  </div>

  <div className="skill">
    <FaGitAlt className="git"/>
    <span>Git</span>
  </div>

  <div className="skill">
    <FaMobileAlt className="responsive"/>
    <span>Responsive Design</span>
  </div>
  </div>
</div>
</Reveal>
     );
}
 
export default Skils;