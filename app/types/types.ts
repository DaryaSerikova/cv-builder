interface SectionBase {
  id: string;
  type: 'experience' | 'education' | 'skills' | 'certificates' | 'about';
  order: number;
}

export interface ExperienceFieldType extends SectionBase {
  position?: string; 
  company?: string;
  period?: string[]; 
  description?: string;
}

export interface EducationFieldType extends SectionBase {
  institution?: string,
  specialty?: string,
  period?: string[],
}

export interface SkillsFieldType extends SectionBase {
  skills: string,
}

export interface AboutmeFieldType extends SectionBase {
  aboutme?: string; 
}

export interface CertificatesFieldType extends SectionBase {
  certificates?: string; 
}
  // experience, education, skills, certificates, aboutme
