import React from 'react';
 
const Skills = () => {
    return (
        <div className="Skills">
            <h1> Coding Skills </h1>
            <h3>Front End</h3>
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            </ul>
            <img className="secondaryimg" src={process.env.PUBLIC_URL+"/frontend.png"} alt="frontend"/>
            <h3>Back End</h3>
            <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            </ul>
            <img className="secondaryimg" src={process.env.PUBLIC_URL+"/backend.jpg"} alt="backend"/>
            <p>Other general skills I have include: Git, Linux and Bash</p>
        </div>
    );
};
            
export default Skills;