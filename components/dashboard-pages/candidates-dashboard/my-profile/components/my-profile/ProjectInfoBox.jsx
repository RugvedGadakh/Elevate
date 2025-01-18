'use client';

import { useState } from 'react';

const ProjectInfoBox = () => {
  const [projects, setProjects] = useState([
    { projectName: '', description: '', technologies: '', startDate: '', endDate: '', role: '', link: '' }
  ]);

  // Handle input change for each project
  const handleInputChange = (e, index) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projects);
    // Submit the form data (send it to a server or use as needed)
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
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
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Project Link (Optional)</label>
              <input
                type="url"
                name="link"
                value={project.link}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Start Date*</label>
              <input
                type="date"
                name="startDate"
                value={project.startDate}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>End Date*</label>
              <input
                type="date"
                name="endDate"
                value={project.endDate}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            
            <div className="form-group col-lg-6 col-md-12">
              <label>Technologies Used*</label>
              <input
                type="text"
                name="technologies"
                value={project.technologies}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Description*</label>
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleInputChange(e, index)}
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

export default ProjectInfoBox;
