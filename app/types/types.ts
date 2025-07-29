interface SectionBase {
  id: number;
  type: 'experience' | 'education' | 'skills' | 'certificates' | 'aboutme';
  order: number;
}

export interface ExperienceFieldType extends SectionBase {
  position: string; 
  company: string;
  period: string[]; 
  description: string;
}

export interface EducationFieldType extends SectionBase {
  institution: string,
  specialty: string,
  period: string[],
}

export interface SkillsFieldType extends SectionBase {
  skills: string,
}

export interface AboutmeFieldType extends SectionBase {
  aboutme: string; 
}

export interface CertificatesFieldType extends SectionBase {
  certificates: string; 
}

export type TSection =  
  ExperienceFieldType 
  | EducationFieldType 
  | SkillsFieldType 
  | AboutmeFieldType 
  | CertificatesFieldType;

// experience, education, skills, certificates, aboutme
// 'experience' | 'education' | 'skills' | 'certificates' | 'aboutme'
