'use client'

// import Select from "react-select";
import { useState } from 'react';
import Image from 'next/image';

import Select from "react-select";
import countries from "world-countries";

const countryOptions = countries.map((country) => ({
  label: country.name.common,
  value: country.cca2,
}));

const cities = {
  US: ["New York", "Los Angeles", "Chicago"],
  IN: ["Mumbai", "Delhi", "Bangalore"],
  // Add more countries and cities
};

const FormInfoBox = () => {
  //profile photo
  const [invalidFields, setInvalidFields] = useState([]);
  const [logoImg, setLogoImg] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  //profile details
  const specializationOptions = [
    { value: "Data Science", label: "Data Science" },
    { value: "Information Technology", label: "Information Technology" },
    // Add more options as needed
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];
  const logoImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoImg(file);
      // Create preview URL
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };
  //Education
  const aggregateTypes = ["CGPA", "Percentage"];
  const studyModes = ["Full Time", "Part Time", "Online"];
  const mediums = ["English", "Hindi", "Marathi", "Other"];


  //Experience
  const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance"];
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


  //skill
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput(''); // Clear the input field
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };



  //Project section
  const [projects, setProjects] = useState([
    { projectName: '', description: '', technologies: '', startDate: '', endDate: '', role: '', link: '' }
  ]);

  // Handle input change for each project
  const handleInputChange2 = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  // Add a new project
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { projectName: '', description: '', technologies: '', startDate: '', endDate: '', role: '', link: '' }
    ]);
  };

  // Delete a project
  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  //preferences
  const workSchedules = ['Full-time', 'Part-time', 'Internship', 'Freelance'];
  const [preferences, setPreferences] = useState({
    jobLocation: '',
    salary: '',
    workSchedule: '',
  });

  const handleInputChange4 = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log('Updated Preferences:', { ...preferences, [name]: value });
    // You can call a backend API here to save the updated data immediately.
  };

  const handleDeletePhoto = () => {
    setLogoImg(null);
    setPreviewUrl('');
    // Reset the file input
    const fileInput = document.getElementById('upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  //country-city
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setCityOptions(
      cities[selectedOption.value]?.map((city) => ({ label: city, value: city })) || []
    );
  };

  //add info
  const [miscInfo, setMiscInfo] = useState({
    languages: '',
    relocationWillingness: '',
    noticePeriod: '',
  });

  const handleInputChange5 = (e) => {
    const { name, value } = e.target;
    setMiscInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log('Updated Miscellaneous Info:', { ...miscInfo, [name]: value });
    // You can use this state to send updates to your backend in real time.
  };

  //check box
  const [backgroundCheckConsent, setBackgroundCheckConsent] = useState(false);

  const handleConsentChange = (e) => {
    setBackgroundCheckConsent(e.target.checked);
  };

  return (
    <>
      {<div className="uploading-outer">
        <div className="uploadButton" style={{ marginBottom: '20px' }}>
          <input
            className="uploadButton-input"
            type="file"
            name="attachments[]"
            accept="image/*"
            id="upload"
            required
            onChange={logoImgHandler}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <label
              className="uploadButton-button ripple-effect"
              htmlFor="upload"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px', // Increased size
                width: '200px', // Increased size
                border: '1px dashed #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              ) : (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span>Profile Picture</span>
                </div>
              )}
            </label>

            {previewUrl && (
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '10px'
              }}>
                <label
                  htmlFor="upload"
                  className="theme-btn btn-style-one"
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Change
                </label>
                <button
                  type="button"
                  onClick={handleDeletePhoto}
                  className="theme-btn btn-style-three"
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="text" style={{ textAlign: 'center', marginBottom: '20px', marginLeft: '50px' }}>
          Max file size is 1MB, Minimum dimension: 330x300 And <br />
          Suitable files are .jpg & .png
        </div>
      </div>}
      <form action="#" className="default-form">
        <div className="row">
          {/* Personal Information*/}
          <br />

          <br />
          <br />
          <div className="form-group col-lg-4 col-md-12">
            <label>First Name*</label>
            <input type="text" name="firstName" required
            />
          </div>
          <div className="form-group col-lg-4 col-md-12">
            <label>Middle Name*</label>
            <input type="text" name="middleName" required />
          </div>
          <div className="form-group col-lg-4 col-md-12">
            <label>Last Name*</label>
            <input type="text" name="lastName" required />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Primary Phone Number*</label>
            <input type="text" name="primaryPhone" required />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Other Phone Numbers</label>
            <input type="text" name="otherPhones" placeholder="Add new" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Primary Email*</label>
            <input type="email" name="primaryEmail" required />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Other Emails</label>
            <input type="email" name="otherEmails" placeholder="Add new" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Gender*</label>
            <Select options={genderOptions} name="gender" required />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Date of Birth*</label>
            <input type="date" name="dob" required />
          </div>
          {/* <div className="form-group col-lg-6 col-md-12">
              <label>Country</label>
              <select className="chosen-single form-select" required>
                <option>Australia</option>
                <option>Pakistan</option>
                <option>Chaina</option>
                <option>Japan</option>
                <option>India</option>
              </select>
            </div>

            
            <div className="form-group col-lg-6 col-md-12">
              <label>City</label>
              <select className="chosen-single form-select" required>
                <option>Melbourne</option>
                <option>Pakistan</option>
                <option>Chaina</option>
                <option>Japan</option>
                <option>India</option>
              </select>
            </div> */}
          {/* <!-- Input --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Country</label>
            <Select
              options={countryOptions}
              onChange={handleCountryChange}
              placeholder="Select a country"
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label>City</label>
            <Select
              options={cityOptions}
              isDisabled={!selectedCountry}
              placeholder="Select a city"
            />
          </div>





          <div className="form-group col-lg-12 col-md-12">
            <label>Current Address</label>
            <input
              type="text"
              name="name"
              placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
              required
            />
          </div>
          {/* <!-- Input --> */}
          <div className="form-group col-lg-12 col-md-12">
            <label>Permanent Address</label>
            <input
              type="text"
              name="name"
              placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
              required
            />
          </div>

          {/* <div className="form-group col-lg-6 col-md-12">
            <label>Known Languages*</label>
            <input type="text" name="languages" placeholder="e.g., English, Hindi, Marathi" required />
          </div> */}
          <div className="row">

            {/* Higher Education */}
            <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
            <br />
            <div className="HigherEducation row">
              <h5 className="form-subsection-title"> Higher Education :</h5>
              <br />
              <br />


              <div className="form-group col-lg-6 col-md-12">
                <label>Degree*</label>
                <input type="text" name="degree" placeholder="B.Tech, B.Sc, etc." required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Specialization*</label>
                <input type="text" name="specialization" placeholder="IT, CS, etc." required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>College Name*</label>
                <input type="text" name="collegeName" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>University*</label>
                <input type="text" name="university" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Starting Year*</label>
                <input type="text" name="startYear" placeholder="YYYY" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>End Year*</label>
                <input type="text" name="endYear" placeholder="YYYY" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Graduation Time*</label>
                <select className="form-select" name="studyMode" required>
                  {studyModes.map((mode, index) => (
                    <option key={index} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Type*</label>
                <select className="form-select" name="aggregateType" required>
                  {aggregateTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Value*</label>
                <input type="text" name="aggregateValue" placeholder="e.g., 7.5 (CGPA) or 75% (Percentage)" required />
              </div>
              <br />
              <br />
            </div>
            <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
            <br />
            {/* 12th Standard */}
            <div className="12th row">
              <h5 className="form-subsection-title">12th Standard / Diploma :</h5>
              <br />
              <br />
              <div className="form-group col-lg-6 col-md-12">
                <label>Institute*</label>
                <input type="text" name="12thInstitute" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Specialization*</label>
                <input type="text" name="12thSpecialization" placeholder="Science, Commerce, etc." required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Board*</label>
                <input type="text" name="12thBoard" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Medium*</label>
                <select className="form-select" name="12thMedium" required>
                  {mediums.map((medium, index) => (
                    <option key={index} value={medium}>
                      {medium}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Type*</label>
                <select className="form-select" name="12thAggregateType" required>
                  {aggregateTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Value*</label>
                <input type="text" name="12thAggregateValue" placeholder="e.g., 7.5 (CGPA) or 75% (Percentage)" required />
              </div>
            </div>
            <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
            <br />

            {/* 10th Standard */}
            <div className="10th row">
              <h5 className="form-subsection-title">10th Standard :</h5>
              <br />
              <br />
              <div className="form-group col-lg-6 col-md-12">
                <label>Institute*</label>
                <input type="text" name="10thInstitute" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Board*</label>
                <input type="text" name="10thBoard" required />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Medium*</label>
                <select className="form-select" name="10thMedium" required>
                  {mediums.map((medium, index) => (
                    <option key={index} value={medium}>
                      {medium}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Type*</label>
                <select className="form-select" name="10thAggregateType" required>
                  {aggregateTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Aggregate Value*</label>
                <input type="text" name="10thAggregateValue" placeholder="e.g., 7.5 (CGPA) or 75% (Percentage)" required />
              </div>
            </div>


          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />
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
                <div className="form-group col-lg-6 col-md-12">
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

                <div className="form-group col-lg-12 col-md-12">
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
          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />

          {/* Skills*/}
          <div className="row">
            {/* Skills Input */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="skillInput">Add Skill</label>
              <input
                type="text"
                id="skillInput"
                className="form-control"
                placeholder="Enter a skill"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
              <button
                className="theme-btn btn-style-three"
                onClick={handleAddSkill}
                style={{
                  marginTop: '10px',
                  background: '#5e72e4',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Add Skill
              </button>
            </div>

            {/* Display Skills */}
            <div className="form-group col-lg-12 col-md-12">
              <label>Skills</label>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginTop: '10px',
                }}
              >
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: '#f9f6ff',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '14px',
                      color: '#333',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleDeleteSkill(index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        marginLeft: '5px',
                        fontSize: '16px',
                        color: '#ff6b6b',
                        cursor: 'pointer',
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="form-group col-lg-12 col-md-12">
            <button
              type="submit"
              className="theme-btn btn-style-one"
              style={{
                marginTop: '20px',
                background: '#2dce89',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>

          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="ProjectInfo row">
                <h5 className="form-subsection-title">Project {index + 1}:</h5>
                <br />
                <br />

                <div className="form-group col-lg-6 col-md-12">
                  <label>Project Name*</label>
                  <input
                    type="text"
                    name="projectName"
                    value={project.projectName}
                    onChange={(e) => handleInputChange2(e, index)}
                    required
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>Project Link (Optional)</label>
                  <input
                    type="url"
                    name="link"
                    value={project.link}
                    onChange={(e) => handleInputChange2(e, index)}
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>Start Date*</label>
                  <input
                    type="date"
                    name="startDate"
                    value={project.startDate}
                    onChange={(e) => handleInputChange2(e, index)}
                    required
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>End Date*</label>
                  <input
                    type="date"
                    name="endDate"
                    value={project.endDate}
                    onChange={(e) => handleInputChange2(e, index)}
                    required
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>Technologies Used*</label>
                  <input
                    type="text"
                    name="technologies"
                    value={project.technologies}
                    onChange={(e) => handleInputChange2(e, index)}
                    required
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>Description*</label>
                  <textarea
                    name="description"
                    value={project.description}
                    onChange={(e) => handleInputChange2(e, index)}
                    rows="4"
                    required
                  ></textarea>
                </div>
                <br />
                <br />
                {/* Delete Button */}
                {projects.length > 1 && (
                  <div className="form-group col-lg-12 col-md-12">
                    <button
                      type="button"
                      className="theme-btn btn-style-three"
                      onClick={() => handleDeleteProject(index)}
                    >
                      Delete Project
                    </button>
                  </div>
                )}
              </div>
            ))}
            {/* Add New Project Button */}
            <div className="form-group col-lg-12 col-md-12">
              <button
                type="button"
                className="theme-btn btn-style-one"
                onClick={handleAddProject}
              >
                Add New Project
              </button>
            </div>
          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />
          <div className="row">
            {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
              <label>Linkedin</label>
              <input
                type="text"
                name="name"
                placeholder="www.facebook.com/Invision"
                required
              />
            </div>
            {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
              <label>Portfolio</label>
              <input type="text" name="name" placeholder="" required />
            </div>
            {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
              <label>Social</label>
              <input type="text" name="name" placeholder="" required />
            </div>
            {/* <!-- Input --> */}
            <div className="form-group col-lg-6 col-md-12">
              <label>Github</label>
              <input type="text" name="name" placeholder="" required />
            </div>
          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />

          <br />
          <div className="row">
            {/* Job Location Preferences */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="jobLocation">Job Location Preferences*</label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                className="form-control"
                placeholder="Enter city, remote, or hybrid"
                value={preferences.jobLocation}
                onChange={handleInputChange4}
                required
              />
            </div>

            {/* Salary Expectations */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="salary">Salary Expectations (Optional)</label>
              <input
                type="text"
                id="salary"
                name="salary"
                className="form-control"
                placeholder="Enter expected salary (e.g., $50,000 per year)"
                value={preferences.salary}
                onChange={handleInputChange4}
              />
            </div>

            {/* Work Schedule Preferences */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="workSchedule">Work Schedule Preferences*</label>
              <select
                id="workSchedule"
                name="workSchedule"
                className="form-select"
                value={preferences.workSchedule}
                onChange={handleInputChange4}
                required
              >
                <option value="" disabled>
                  Select a work schedule
                </option>
                {workSchedules.map((schedule, index) => (
                  <option key={index} value={schedule}>
                    {schedule}
                  </option>
                ))}
              </select>
            </div>
          </div>




          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />


          <div className="row">
            {/* Languages Spoken */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="languages">Languages Spoken*</label>
              <input
                type="text"
                id="languages"
                name="languages"
                className="form-control"
                placeholder="E.g., English, Hindi, French"
                value={miscInfo.languages}
                onChange={handleInputChange5}
                required
              />
            </div>

            {/* Relocation Willingness */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="relocationWillingness">Relocation Willingness*</label>
              <select
                id="relocationWillingness"
                name="relocationWillingness"
                className="form-select"
                value={miscInfo.relocationWillingness}
                onChange={handleInputChange5}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
              </select>
            </div>

            {/* Notice Period */}
            <div className="form-group col-lg-12 col-md-12">
              <label htmlFor="noticePeriod">Notice Period*</label>
              <input
                type="text"
                id="noticePeriod"
                name="noticePeriod"
                className="form-control"
                placeholder="E.g., Immediate, 15 days, 1 month"
                value={miscInfo.noticePeriod}
                onChange={handleInputChange5}
                required
              />
            </div>
          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />

          <div className="row">
            {/* Legal and Compliance Information */}

            {/* Background Check Consent */}
            <div className="form-group col-lg-12 col-md-12">
              <label>
                Background Check Consent
                <span className="text-muted">(Yes/No)</span>
              </label>
              <div>
                <input
                  type="checkbox"
                  id="backgroundCheckConsent"
                  checked={backgroundCheckConsent}
                  onChange={handleConsentChange}
                  required
                />
                <label htmlFor="backgroundCheckConsent" className="ml-2">
                  I consent to a background check.
                </label>
              </div>
            </div>
          </div>
          <hr style={{ border: '0.2px solid #000', position: 'relative' }} />
          <br />

          {/* SUBMIT BUTTON */}
          <div className="form-group col-lg-6 col-md-12">
            <button type="submit" className="theme-btn btn-style-one">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormInfoBox;
