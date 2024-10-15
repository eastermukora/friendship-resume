import React, { useState } from "react";

function ResumeForm({ setResumeData }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
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
      sex: formData.sex,
      about: formData.about,
      likes: formData.likes.split(","),
      skills: formData.skills.split(",")
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div class="name-row">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
      </div> 
      <div class="form-row">
        <div>
          <label for="age">Age:</label>
          <input 
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          />
        </div>
        
        <div>
          <label for="sex">Sex:</label>
          <input 
          list="genders"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          />
          <datalist id="genders">
            <option value="👩 Female" />
            <option value="👨 Male" />
            <option value="⚧️ Non-binary" />
            <option value="🚁 Helicopter" />
          </datalist>
        </div>
      </div>
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
