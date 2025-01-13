import React from "react"; 
import "./Resume.css";


const Resume = () => {
    return (
        <div className="resume">
            <div className="header">
                <h1>Chao-Kai Lin</h1>
                <p>
                    Seattle, Washington, 98121
                    <br />
                    linchaokai@gmail.com
                </p>
            </div>

            <div className="section education">
                <h2>Education</h2>
                <h3>Master of Science in Computer Science</h3>
                <p>City University of Seattle, Seattle, Washington, 98121</p>
                <h3>Multimedia and Game Development</h3>
                <p>
                    Lunghwa University of Science and Technology | May 2020
                    <br />
                    GPA: 3.8/4.0
                </p>
            </div>

            <div className="section skills">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Programming Languages:</strong> Python, C#, Javascript</li>
                    <li><strong>Frameworks and Libraries:</strong> React, NextJS</li>
                    <li><strong>Database Systems:</strong> MySQL</li>
                </ul>
            </div>

            <div className="section projects">
                <h2>Projects</h2>
                <h3>Education Platform</h3>
                <p>
                    Provides recognition for children unable to access formal education.
                </p>
            </div>
        </div>
    );
};

export default Resume;