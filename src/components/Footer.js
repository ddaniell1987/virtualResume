import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){
    return(
        <div className="footer">
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        <FontAwesomeIcon icon="fa-brands fa-github" href="https://www.github.com/ddaniell1987" target="_blank"/>
        <FontAwesomeIcon icon="fa-solid fa-envelope" onClick={() => window.location = "mailto:ddaniell1987@gmail.com"}/>
        </div>
    )
}
export default Footer;