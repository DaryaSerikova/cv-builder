import type { IArrItems } from "./section";

export const arrExperience: IArrItems[] =  [
  {label: 'Должность', name: 'position', type: 'input'},
  {label: 'Компания', name: 'company', type: 'input'},
  {label: 'Период', name: 'period', type: 'datepicker'},
  {label: 'Описание', name: 'description', type: 'textarea'},
];

export const arrEducation: IArrItems[] = [
  {label: 'Учебное заведение', name: 'institution', type: 'input'},
  {label: 'Специальность', name: 'specialty', type: 'input'},
  {label: 'Период', name: 'period', type: 'datepicker'},
  // {label: '', name: '', type: 'input'},
];

export const arrSkills: IArrItems[] = [
  {label: 'Навыки', name: 'skills', type: 'textarea'}
];

//Опыт, Образование, Навыки, Сертификаты, О себе.
// experience, education, skills, certificates, aboutme
//