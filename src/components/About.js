import React from "react";
import "./About.css";

function About(){
    return(
        <div>
            <h3 className="about__title">About Me</h3>
            <p className="about__text">From the time I created "Hello, World!" on my computer I knew I wanted to be in tech!
                That was 2 years ago now and I have fallen in love with the craft more than ever. I started
                my career in Healthcare but recently decided to make the switch because I wanted to be challenged and learn something
                new on a rountine basis. I am working to be the best. I love creating, trying to write clean code in the process. Sometimes I fail but I keep going!
            </p>
            <p className="quote">"My mission in life is not merely to survive, but to thrive;  and to do so with some passion, some compassion, some humor, and some style.”</p>
            <h5 className="quote__name">-Maya Angelou</h5>
        </div>
    )
}
export default About;