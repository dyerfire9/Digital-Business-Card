import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiCentosLine } from "react-icons/ri";


const icon = {fill: "#F3BF99", "vertical-align": "middle"}

export default function Socials() {
    return (
        <div className="socials">
            <a className="links" href="http://individual.utoronto.ca/abdulmannan/" target="_blank">
                {<RiCentosLine size="2rem" style={icon}/>}
            </a>

            <a className="links" href="http://linkedin.com/in/abdulmannancomp" target="_blank">
                {<RiLinkedinFill size="2rem" style={icon}/>}
            </a>

            <a className="links" href="https://github.com/dyerfire9" target="_blank">
                {<RiGithubLine size="2rem" style={icon}/>}
            </a>
        </div>
    )

}