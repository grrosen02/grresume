import { ImageWithFallback } from './figma/ImageWithFallback';

export interface ContactInfo {
  mobile: string;
  email: string;
  linkedin: string;
  nationality: string;
}

export interface Language {
  level: string;
  languages: string[];
}

export interface TechnicalSkills {
  general: string[];
  programmingLanguages: string[];
  ai: string[];
}

export interface DateRange {
  start: string;
  end: string;
}

export interface Experience {
  dateRange: DateRange;
  company: string;
  position: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  date: string;
  institution: string;
  degree: string;
  location: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    profileImage?: string;
    introduction: string;
  };
  contact: ContactInfo;
  languages: Language[];
  technicalSkills: TechnicalSkills;
  education: Education[];
  professionalExperience: Experience[];
  extracurricularExperience: Experience[];
  references: string;
}

interface CVFrameProps {
  data: CVData;
}

export function CVFrame({ data }: CVFrameProps) {
  return (
    <div className="min-h-screen bg-white py-4 font-serif print-container">
      <div className="max-w-4xl mx-auto bg-white print-page">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-[30%] bg-white p-4 print-sidebar">
            {/* Profile Photo */}
            {data.personalInfo.profileImage && (
              <div className="mb-4 print-subsection">
                <div className="w-48 h-60 overflow-hidden mx-auto mb-3 border-2 border-gray-200 print-photo">
                  <ImageWithFallback 
                    src={data.personalInfo.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover object-left"
                  />
                </div>
              </div>
            )}

            {/* Get in touch */}
            <div className="mb-4 print-section">
              <h2 className="text-xl mb-2 text-teal-700 print-section-header">Get in touch!</h2>
              
              <div className="mb-2 print-small-gap">
                <h3 className="text-teal-700 mb-0 text-sm">Mobile:</h3>
                <p className="text-xs text-gray-700 print-text">{data.contact.mobile}</p>
              </div>

              <div className="mb-2 print-small-gap">
                <h3 className="text-teal-700 mb-0 text-sm">Email:</h3>
                <p className="text-xs text-gray-700 print-text">{data.contact.email}</p>
              </div>

              <div className="mb-2 print-small-gap">
                <h3 className="text-teal-700 mb-0 text-sm">LinkedIn:</h3>
                <p className="text-xs text-gray-700 print-text">{data.contact.linkedin}</p>
              </div>

              <div className="mb-2 print-small-gap">
                <h3 className="text-teal-700 mb-0 text-sm">Nationality:</h3>
                <p className="text-xs text-gray-700 print-text">{data.contact.nationality}</p>
              </div>
            </div>

            {/* Languages */}
            <div className="mb-4 print-section">
              <h2 className="text-xl mb-2 text-gray-800 print-section-header">Languages</h2>
              
              {data.languages.map((languageGroup, index) => (
                <div key={index} className="mb-1 print-small-gap">
                  <h3 className="text-teal-700 mb-0 text-sm">{languageGroup.level}:</h3>
                  <p className="text-xs text-gray-700 print-text">
                    {languageGroup.languages.map((lang, langIndex) => 
                      lang.includes('<strong>') ? (
                        <span key={langIndex} dangerouslySetInnerHTML={{ __html: lang }} />
                      ) : (
                        lang
                      )
                    ).reduce((prev, curr, i) => [prev, i > 0 ? ', ' : '', curr])}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="mb-4 print-section">
              <h2 className="text-xl mb-2 text-gray-800 print-section-header">Technical Skills</h2>
              <div className="text-xs text-gray-700 print-text">
                <p className="mb-1"><strong>General:</strong> {data.technicalSkills.general.join(', ')}</p>
                <p className="mb-1"><strong>Programming Languages:</strong> {data.technicalSkills.programmingLanguages.join(', ')}</p>
                <p className="mb-1"><strong>AI:</strong> {data.technicalSkills.ai.join(', ')}</p>
              </div>
            </div>

            {/* References */}
            <div className="print-section">
              <h2 className="text-xl mb-2 text-gray-800 print-section-header">References</h2>
              <p className="text-xs text-gray-700 print-text">{data.references}</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-[70%] p-4 relative print-content">
            {/* Decorative teal elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-teal-700 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-teal-700 transform rotate-45"></div>
            <div className="absolute top-16 right-16 w-4 h-4 bg-teal-700 transform rotate-45"></div>

            {/* Name */}
            <div className="mb-4 print-subsection">
              <h1 className="text-3xl text-gray-800 mb-1 print-title">{data.personalInfo.name}</h1>
            </div>

            {/* Introduction */}
            <div className="mb-4 print-section">
              <h2 className="text-xl text-gray-800 mb-2 border-b-2 border-teal-700 pb-1 print-section-header">Introduction</h2>
              <p className="text-gray-700 text-xs leading-tight print-text">
                {data.personalInfo.introduction}
              </p>
            </div>

            {/* Education */}
            <div className="mb-4 print-section">
              <h2 className="text-xl text-gray-800 mb-2 border-b-2 border-teal-700 pb-1 print-section-header">Education</h2>
              
              {data.education.map((edu, index) => (
                <div key={index} className="mb-2 print-subsection">
                  <div className="flex items-start mb-1">
                    <span className="text-teal-700 mr-3 text-xs whitespace-nowrap print-text">{edu.date}</span>
                    <div>
                      <h3 className="text-teal-700 text-sm print-job-title">{edu.institution}, {edu.degree}</h3>
                      <p className="text-gray-600 text-xs print-text">{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Experience */}
            <div className="mb-4 print-section">
              <h2 className="text-xl text-gray-800 mb-2 border-b-2 border-teal-700 pb-1 print-section-header">Professional Experience</h2>
              
              {data.professionalExperience.map((exp, index) => (
                <div key={index} className="mb-3 print-subsection">
                  <div className="flex items-start mb-1">
                    <span className="text-teal-700 mr-3 text-xs whitespace-nowrap print-text">
                      {exp.dateRange.start} - {exp.dateRange.end}
                    </span>
                    <div>
                      {(exp.company || exp.location) && <h3 className="text-teal-700 text-sm print-job-title">{exp.company}{exp.company && exp.location ? ', ' : ''}{exp.location}</h3>}
                      <p className="text-gray-600 text-xs mb-1 print-text"><strong>{exp.position}</strong></p>
                      <ul className="text-gray-500 text-xs space-y-0 print-bullets">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extracurricular Experience */}
            <div className="print-section">
              <h2 className="text-xl text-gray-800 mb-2 border-b-2 border-teal-700 pb-1 print-section-header">Extracurricular Experience</h2>
              
              {data.extracurricularExperience.map((exp, index) => (
                <div key={index} className="mb-3 print-subsection">
                  <div className="flex items-start mb-1">
                    <span className="text-teal-700 mr-3 text-xs whitespace-nowrap print-text">
                      {exp.dateRange.start} - {exp.dateRange.end}
                    </span>
                    <div>
                      {(exp.company || exp.location) && <h3 className="text-teal-700 text-sm print-job-title">{exp.company}{exp.company && exp.location ? ', ' : ''}{exp.location}</h3>}
                      <p className="text-gray-600 text-xs mb-1 print-text"><strong>{exp.position}</strong></p>
                      <ul className="text-gray-500 text-xs space-y-0 print-bullets">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}