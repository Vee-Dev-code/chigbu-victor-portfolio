import { FiMonitor, FiCode,  FiLayers, FiGitBranch } from "react-icons/fi";
import "../styles/Services.css";
import Reveal from "./Reveal";



const Services = () => {
    const items =[
        {
           title: "INTERFACE DEVELOPMENT",
            number: "01",
            icon: <FiMonitor />,
            description: "Responsive Design component Architecture UI Implementation Accessibility"
        },
        {
            title: "FRONTEND ENGENEERING",
            number: "02",
            icon: <FiCode />,
            description: "React, JavaScript,(ES6+) React Router, State Management"
        },
        {
            title: "PRODUCT EXPERIENE",
            number: "03",
            icon: <FiLayers />,
            description: "E-commerce, Search & Filtering ,Cart & Checkout, API Integration"
        }, 
        {
            title: "DEVELOPMENT WORKFLOW",
            number: "04",
            icon: <FiGitBranch />,
            description: "Git & Github, Code Quality, Performance, Deployment"
        }

    ];
    return (  
        <Reveal>
            <div className="service-chapter">
        <div className="service-page">
            <h2>WHAT I CAN HELP YOU WITH</h2>
            {items.map((item) =>(
                <div className="interface" key={item.id}>
                    <span>{item.icon}</span>
                    <h6>{item.number}</h6>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                </div>
            ))}

        </div>
        </div>
        </Reveal>
    );
}
 
export default Services;