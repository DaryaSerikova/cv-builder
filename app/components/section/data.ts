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

const enRuExperience = {
  'position': 'Должность',
  'company': 'Компания',
  'period': 'Период',
  'description': 'Описание',
};

const enRuEducation = {
  'institution': 'Учебное заведение',
  'specialty': 'Специальность',
  'period': 'Период',
};

const enRuSkills = {
  'skills': 'Навыки',
};

export const objEngRu = {
  'experience': {arr: enRuExperience, ru: 'Опыт'},
  'education': {arr: enRuEducation, ru: 'Образование'},
  'skills': {arr: enRuSkills, ru: 'Навыки'},
  //'certificates'
  //'aboutme'
}



//Опыт, Образование, Навыки, Сертификаты, О себе.
// experience, education, skills, certificates, aboutme
//