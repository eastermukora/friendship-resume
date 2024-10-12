import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ResumeForm from './components/ResumeForm';
import DisplayResume from './components/DisplayResume';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    age: "",
    about: "",
    likes: [],
    skills: []
  });

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ResumeForm setResumeData={setResumeData} />} />
          <Route path="/resume" element={<DisplayResume resumeData={resumeData} />} />
        </Routes>
        <Link to="/resume" className="button">See Resume</Link>
      </div>
    </Router>
  );
}

export default App;
