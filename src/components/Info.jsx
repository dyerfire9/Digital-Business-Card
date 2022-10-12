import picture from '../images/profile-pic.jpeg'
import "./styles.css";

// Here we are using React-icons, a very efficient icon js library
import { RiMailOpenLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";

const icon1 = {background: '#fff', fill: "#374151", "vertical-align": "middle", "margin-right": "5px"}
const icon2 = {background: '#5093E2', fill: "#fff", "vertical-align": "middle", "margin-right": "5px"}

export default function Info() {
    return (
        <div className="info">
            <img src={picture} alt="" className="profile-pic" width="500px"/>
            <h1>Abdul Mannan</h1>
            <h2>Fullstack Developer</h2>
            <h4>My Website</h4>

            <div className="buttons">
                <a className="email-btn" href="http://individual.utoronto.ca/abdulmannan/" target="_blank">
                     {<RiMailOpenLine size="1.7rem" style={icon1}/>}
                     Email
                </a>
                
                <a className="linkdin-btn" href="http://linkedin.com/in/abdulmannancomp/" target="_blank">
                     {<RiLinkedinBoxLine size="1.8rem" style={icon2}/>}
                     LinkedIn
                </a>
            </div>

        </div>
    )
}