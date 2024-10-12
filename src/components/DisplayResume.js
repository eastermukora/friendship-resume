import React from "react";
import { Link } from "react-router-dom";

function DisplayResume({ resumeData }) {
  return (
    <div className="resume-container">
      <div className="resume-window">
        <h2>Hello, I am {resumeData.name}</h2>
        <p>Age: {resumeData.age}</p>
        <p>About me: {resumeData.about}</p>
      </div>

      <div className="resume-window">
        <h3>Things I Like</h3>
        <ul>
          {resumeData.likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
      </div>

      <div className="resume-window">
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
      <Link to="/" className="button">Back to Form</Link>
    </div>
  );
}

export default DisplayResume;
