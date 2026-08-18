import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import "../styles/Navbar.css";
import { useState } from "react";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

   const closemenu = () =>{
    setOpenMenu(false)
   };

    return ( 
        <div className="navbar">
            <h1>VEE<span className="stroke">/</span>DEV</h1>
            <ul className={`nav-links ${openMenu ? 'open' : ""}`}>
                <li><a href="#Home" onClick={closemenu}>Home</a></li>
                 <li><a href="#Work" onClick={closemenu}>Works</a></li>
                  <li><a href="#About"onClick={close}>About</a></li>
                   <li><a href="#About"onClick={closemenu}>Contact</a></li>
                   <li><a href="#Skill" onClick={closemenu}>Skills</a></li>
                   <li className="cv">
                    <a href="/MYCV.PDF" download> <FiDownloadCloud /> Download Cv </a>
                    </li>
            </ul>
            <div className="hambuger-icon" onClick={()=> setOpenMenu(!openMenu)}>
              {openMenu ?  <FaTimes/> : <FaBars /> }
            </div>
        </div>
     );
}
 
export default Navbar;