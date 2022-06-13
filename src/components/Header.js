import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    const user={
        name: "Dominique Florence",
        title: "Front-End Engineer",
        email: "ddaniell1987@gmail.com",
        portfolio: "https://dominiqueflorence.netlify.app",
        phone: "631-569-6958"
    }
    return(
      
        <div>
            
            <h2 className="name">{user.name}</h2>
            <h4 className="job__title">{user.title}</h4>
            <nav className="info">
            <a href="https://dominiqueflorence.netlify.app" target="_blank" className="portfolio__link"> Portfolio </a> 
            <p>  {user.phone} </p>
            <p className="email__link"onClick={() => window.location = "mailto:ddaniell1987@gmail.com"}>{user.email} </p>
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />            </nav>
        </div>
    )
}
export default Header;