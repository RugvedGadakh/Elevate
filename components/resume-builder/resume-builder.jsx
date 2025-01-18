import Breadcrumb from "../common/Breadcrumb";

import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import DefaulHeader from "../header/DefaulHeader";
import MobileMenu from "../header/MobileMenu";



const ResumeBuilder = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Resume Builder" meta="Resume Builder" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
  <div className="auto-container">
    <div className="row">
      <div className="content-side col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <h1 style={{ textAlign: 'center' }}>Coming Soon</h1>
        </div>
        {/* End .row */}
      </div>
    </div>
    {/* End .row */}
  </div>
</div>

      {/* <!-- End Sidebar Container --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default ResumeBuilder;



// import Breadcrumb from "../common/Breadcrumb";
// import LoginPopup from "../common/form/login/LoginPopup";
// import FooterDefault from "../footer/common-footer";
// import DefaulHeader from "../header/DefaulHeader";
// import MobileMenu from "../header/MobileMenu";

// const ResumeBuilder = () => {
//   return (
//     <>
//       {/* Header Span */}
//       <span className="header-span"></span>

//       <LoginPopup />
//       <DefaulHeader />
//       <MobileMenu />
//       <Breadcrumb title="Resume Builder" meta="Resume Builder" />

//       <div className="container mx-auto px-4 py-8">
//         {/* Profile Section */}
//         <div className="text-center mb-10">
//           <div className="flex justify-center items-center mb-4">
//             <div className="bg-blue-500 text-white flex items-center justify-center h-20 w-20 rounded-full">
//               <span className="text-xl font-bold">DS</span>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold">Damini Surwase</h2>
//             <p className="text-gray-500">@199805daminialka</p>
//             <p className="text-gray-400">0 Followers · 0 Following</p>
//           </div>
//           <div className="mt-4 flex justify-center space-x-4">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
//               Generate Resume
//             </button>
//             <button className="bg-gray-300 text-black px-6 py-2 rounded-md">
//               Edit Profile
//             </button>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Section */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-semibold">Social Accounts</h3>
//               <p className="text-gray-500">Add social accounts links to your profile</p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Achievements</h3>
//               <select className="w-full mt-2 border border-gray-300 rounded-md p-2">
//                 <option>Select your achievement</option>
//               </select>
//               <div className="text-center mt-4">
//                 <img
//                   src="/images/no-achievements-icon.png"
//                   alt="No data"
//                   className="h-20 mx-auto"
//                 />
//                 <p className="text-gray-500 mt-2">
//                   There is no data for achievements for the selected course
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Coding Contests</h3>
//               <p className="text-gray-500">No data Available</p>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-semibold">Projects</h3>
//               <p className="text-gray-500">
//                 Add your coding projects to showcase your skills in resume
//               </p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Experience</h3>
//               <p className="text-gray-500">
//                 Add your past work experiences for a stronger resume
//               </p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Education</h3>
//               <p className="text-gray-500">Add your education background</p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Certificates</h3>
//               <p className="text-gray-500">Add your certificates to showcase your skills</p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Skills</h3>
//               <p className="text-gray-500">
//                 Add your technical skills; they help your resume get shortlisted
//               </p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Co-curricular & POR</h3>
//               <p className="text-gray-500">
//                 Add co-curricular activities because every company needs versatile candidates
//               </p>
//               <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md mt-2">
//                 + Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <FooterDefault footerStyle="alternate5" />
//     </>
//   );
// };

// export default ResumeBuilder;



