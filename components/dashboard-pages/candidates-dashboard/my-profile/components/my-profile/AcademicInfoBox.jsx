'use client';

const AcademicInfoBox = () => {
  const aggregateTypes = ["CGPA", "Percentage"];
  const studyModes = ["Full Time", "Part Time", "Online"];
  const mediums = ["English", "Hindi", "Marathi", "Other"];

  return (
    <form className="default-form">
      <div className="row">

        {/* Higher Education */}
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
        <hr  style={{border:'0.2px solid #000', position:'relative'}}/>
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
     

        <hr  style={{border:'0.2px solid #000', position:'relative'}}/>
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

export default AcademicInfoBox;
