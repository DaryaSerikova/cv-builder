export type ExperienceFieldType = {
  position?: string; 
  company?: string;
  period?: string[]; 
  description?: string;
}

export type EducationFieldType = {
  institution?: string,
  specialty?: string,
  period?: string[],
}

export type SkillsFieldType = {
  skills: string,
}

export type AboutmeFieldType = {
  aboutme?: string; 
}

export type CertificatesFieldType = {
  certificates?: string; 
}
