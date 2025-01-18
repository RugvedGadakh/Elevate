'use client'

import Select from "react-select";

const FormInfoBox = () => {
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

  return (
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

        
        <hr />

        {/* SUBMIT BUTTON */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
