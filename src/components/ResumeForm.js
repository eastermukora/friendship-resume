import React, { useState } from "react";

function ResumeForm({ setResumeData }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    about: "",
    likes: "",
    skills: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      name: formData.name,
      age: formData.age,
      about: formData.about,
      likes: formData.likes.split(","),
      skills: formData.skills.split(",")
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        
        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
        
        <label>About Me:</label>
        <textarea name="about" value={formData.about} onChange={handleChange} />
        
        <label>Things I Like (comma-separated):</label>
        <input type="text" name="likes" value={formData.likes} onChange={handleChange} />
        
        <label>Skills (comma-separated):</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ResumeForm;
