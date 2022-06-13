import React from "react";
import logo from "./logo.png"
import hmp_logo from "./hmp_logo.png";
import website from "./website.png";
import todo from "./todo.png";
import blog from "./blog.png";
import "./experience.css"

function Experience(){
    return(
        <div>
            <h2 className="experience__title">Experience</h2>
            <img className="eleven__logo" src={logo} alt="Eleven Twenty Logo"/>
            <h5 className="title">Software Engineer</h5>
            <p className="company">Eleven Twenty Co. ➼ Chattanooga, TN</p>
            <p className="date">February '22 - Current</p>
            <ul className="job__description">
                <li>Developed and updated existing Web Applications using JavaScript/ React and other tools</li>
                <li>Prepared detailed reports concerning project specifications and activities.</li>
                <li>Modified existing software to correct errors, upgrade interfaces and improve performance.</li>
            </ul>

            <img className="home__logo" src={hmp_logo} alt="Home Medical Providers Logo" />
            <h5 className="title">Practice Manager </h5>
            <p className="company">Home Medical Providers ➼ Chattanooga, TN</p>
            <p className="date">August '20 - February '22</p>
            <ul className="job__description">
                <li> Identified and analyzed problems and developed solutions to allow for business growth, resulting in 15% growth from the original point of employment raising patient population from 200 to 350.</li>  
                <li>Troubleshooting software malfunctions and developed strategic business plan, and defined budgets; devise and implement new and revised policies to streamline processes </li>
            </ul>

            <img className="website" src={website} alt="My Portfolio" />
            <h5 className="portfolio__title">My Portfolio</h5>
            <a className="website__link" href="https://dominiqueflorence.netlify.app" target="_blank"> website </a> 
            <p className="portfolio__date">2021</p>
            <ul className="job__description">
                <li>Pages implemented animated parts such as a moon and twisting text. I ran into some bugs with formatting and text aligning on the page. Used Google to find what I needed such as using top and padding to space and align text the way I wanted. </li>
                <li>This animated website was created using:<em>JavScript, jQuery, HTML, and CSS</em></li>
            </ul>
            <img className="website" src={todo} alt="To Do App" />
            <h5 className="portfolio__title">To-Do App</h5>
            <a className="website__link" href="https://liststosdos.netlify.app/" target="_blank"> website </a> 
            <p className="portfolio__date">2021</p>
            <ul className="job__description">
                <li>Use this to-do web application to capture every task that you need to accomplish. </li>
                <li> This visually appealing application was built using:<em>JavaScript, HTML, and CSS</em></li>
            </ul>
            <img className="website" src={blog} alt="Bookish Magic Book Blog" />
            <h5 className="portfolio__title">Book Blog</h5>
            <a className="website__link" href="https://bookishmagic.netlify.app" target="_blank"> website </a> 
            <p className="portfolio__date">2021</p>
            <ul className="job__description">
                <li>A blog for me to be able to update and keep track of the books that I have read throughout the year. I ran into some trouble with bugs and sizing the picture to fit the space. In order to solve this problem, I Googled “How to format text alongside pictures” which gave me some ideas on how to correct issues. </li>
                <li>This blog was created using:<em>JavaScript, HTML, and CSS</em></li>
            </ul>
        </div>
    )
}
export default Experience;