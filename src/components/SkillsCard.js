import React from "react";
import Card from "react-bootstrap/Card"
import "./SkillsCard.css";

function SkillsCard(){
    return(
        <div>
            <Card className="card" style={{width: '20rem'}}>
                <Card.Title className="skills__title">Skills</Card.Title>
                    <Card.Body className="skills__name">React</Card.Body>
                    <Card.Body className="skills__name">JavaScript</Card.Body>
                    <Card.Body className="skills__name">HTML/CSS</Card.Body>
                    <Card.Body className="skills__name">Node.js</Card.Body>
                    <Card.Body className="skills__name">SQL</Card.Body>
                    <Card.Body className="skills__name">AWS</Card.Body>
                    <Card.Body className="skills__name">jQuery</Card.Body>
                    <Card.Body className="skills__name">APIs</Card.Body>
                    <Card.Body className="skills__name">Netlify</Card.Body>
                
            </Card>
            <Card className="education__card" style={{width: '40rem'}}>
                <Card.Title className="education__title">Education</Card.Title>
                <Card.Body className="course__title"><em>Full Stack Development ➼</em></Card.Body>
                <Card.Body className="school__title">Flatiron School ➼</Card.Body>
                <Card.Body className="degree">Certification</Card.Body>
                <Card.Body className="education__date">2022</Card.Body>

                <Card.Body className="course__title"><em>Administration/Informatics ➼</em></Card.Body>
                <Card.Body className="school__title">Capella University ➼</Card.Body>
                <Card.Body className="degree">Master's</Card.Body>
                <Card.Body className="education__date"> 2019</Card.Body>

            </Card>
        </div>
    )
}
export default SkillsCard;