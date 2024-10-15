import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DisplayResume({ resumeData }) {
  return (
    <div className="resume-container">
      <div className="resume-window">
        <h2>Hello, I am {resumeData.name}</h2>
        <p>Age: {resumeData.age}</p>
        <p>Sex: {resumeData.sex}</p>
        <p>About me: {resumeData.about}</p>
      </div>

      <div className="resume-window">
        <h3>Things I Like</h3>
        <ul className="centered-list">
          {resumeData.likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
      </div>

      <div className="resume-window">
        <h3>Skills</h3>
        <ul className="centered-list">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
      <Link to="/" className="icon-link">
        <IconButton>
        <ArrowBackIcon />
        </IconButton>
        Back to Form</Link>
    </div>
  );
}

export default DisplayResume;
