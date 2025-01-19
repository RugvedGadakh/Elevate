import dynamic from "next/dynamic";
import ResumeBuilder from "@/components/resume-builder/resume-builder";

export const metadata = {
  title: "Resume Builder || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ResumeBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
