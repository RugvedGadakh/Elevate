'use client'

import Select from "react-select";
import { useState } from 'react';

const FormInfoBox = () => {
  //profile photo
  const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };

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

  const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Other", label: "Other" },
  ];

  const bloodGroupOptions = [
    { value: "A+", label: "A+" },
    { value: "B+", label: "B+" },
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    // Add more options
  ];

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

  // Handle form submission (you can handle it according to your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experiences);
    // Submit the form data (send it to a server or use as needed)
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

  // Handle form submission (you can handle it according to your needs)
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(projects);
    // Submit the form data (send it to a server or use as needed)
  };

  return (
    <>
    <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHander}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : "Profile Picture"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>
    <form action="#" className="default-form">
      <div className="row">
        {/* BASIC DETAILS */}
        <br />

        <br />
        <br />
        <div className="form-group col-lg-4 col-md-12">
          <label>First Name*</label>
          <input type="text" name="firstName" required />
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
          <label>Course*</label>
          <input type="text" name="course" placeholder="e.g., BTECH-CS" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Primary Specialization</label>
          <Select options={specializationOptions} name="specialization" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Gender*</label>
          <Select options={genderOptions} name="gender" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Date of Birth*</label>
          <input type="date" name="dob" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Blood Group*</label>
          <Select options={bloodGroupOptions} name="bloodGroup" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Marital Status*</label>
          <Select options={maritalStatusOptions} name="maritalStatus" required />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Disability*</label>
          <select name="disability" className="form-select" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Known Languages*</label>
          <input type="text" name="languages" placeholder="e.g., English, Hindi, Marathi" required />
        </div>
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
        </div>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select" required>
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select" required>
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
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
