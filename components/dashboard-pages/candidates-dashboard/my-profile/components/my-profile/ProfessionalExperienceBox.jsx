'use client';

import { useState } from 'react';

const ProfessionalExperienceBox = () => {
  const jobTypes = ["Full Time", "Part Time","Internship" ,"Freelance"];
  const industries = ["IT", "Finance", "Healthcare", "Retail", "Other"];
  
  // State to hold the list of professional experiences
  const [experiences, setExperiences] = useState([
    { companyName: '', position: '', industry: '', startDate: '', endDate: '', jobType: '', responsibilities: '' }
  ]);

  // Handle input change for each experience
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
  };

  // Add a new experience
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { companyName: '', position: '', industry: '', startDate: '', endDate: '', jobType: '', responsibilities: '' }
    ]);
  };

  // Delete an experience
  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  // Handle form submission (you can handle it according to your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences);
    // Submit the form data (send it to a server or use as needed)
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {experiences.map((experience, index) => (
          <div key={index} className="ProfessionalExperience row">
            <h5 className="form-subsection-title">
              Professional Experience {index + 1}:
            </h5>
            <br />
            <br />

            <div className="form-group col-lg-6 col-md-12">
              <label>Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Position*</label>
              <input
                type="text"
                name="position"
                value={experience.position}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>Industry*</label>
              <select
                className="form-select"
                name="industry"
                value={experience.industry}
                onChange={(e) => handleInputChange(e, index)}
                required
              >
                {industries.map((industry, idx) => (
                  <option key={idx} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Start Date*</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>End Date*</label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Job Type*</label>
              <select
                className="form-select"
                name="jobType"
                value={experience.jobType}
                onChange={(e) => handleInputChange(e, index)}
                required
              >
                {jobTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Key Responsibilities*</label>
              <textarea
                name="responsibilities"
                value={experience.responsibilities}
                onChange={(e) => handleInputChange(e, index)}
                rows="4"
                required
              ></textarea>
            </div>
            <br />
            <br />
            {/* Delete Button */}
            {experiences.length > 1 && (
              <div className="form-group col-lg-12 col-md-12">
                <button
                  type="button"
                  className="theme-btn btn-style-three"
                  onClick={() => handleDeleteExperience(index)}
                >
                  Delete Experience
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add New Experience Button */}
        <div className="form-group col-lg-12 col-md-12">
          <button
            type="button"
            className="theme-btn btn-style-one"
            onClick={handleAddExperience}
          >
            Add New Experience
          </button>
        </div>

        {/* Save Button */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfessionalExperienceBox;
