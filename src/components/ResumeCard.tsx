import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const ResumeCard = () => {
  const resumeUrl = "https://drive.google.com/file/d/1LfxVS6N4Asq1uWBzOrGZaavhIwU59zaY/view?usp=sharing";

  return (
    <div className="mt-50 p-1 width-[100%] rounded-2xshadow-xl">
      <div className="bg-white/5 text-white p-6 rounded-[14px] flex flex-col items-center text-center">
        <h2 className="text-xl font-bold mb-4">View My Resume</h2>
        
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <FileText size={32} className="text-blue-400" />
        </div>
        <div className="flex gap-3 w-full">
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg font-medium"
          >
            <ExternalLink size={18} />
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;