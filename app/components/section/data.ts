import type { IArrItems, TEnRu, IObjEnRu } from "./section";

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
];

export const arrSkills: IArrItems[] = [
  {label: 'Навыки', name: 'skills', type: 'textarea'}
];

export const arrAboutme: IArrItems[] = [
  {label: 'О себе', name: 'aboutme', type: 'textarea'},
]

export const arrCertificates: IArrItems[] = [
  {label: 'Сертификаты', name: 'certificates', type: 'textarea'},
]

const enRuExperience = {
  'position': 'Должность',
  'company': 'Компания',
  'period': 'Период',
  'description': 'Описание',
};

const enRuEducation:TEnRu = {
  'institution': 'Учебное заведение',
  'specialty': 'Специальность',
  'period': 'Период',
};

const enRuSkills:TEnRu = {
  'skills': 'Навыки',
};

const enRuAboutme: TEnRu = {
  'aboutme': 'О себе'
}

const enRuCertificates = {
  'certificates': 'Сертификаты'
}

export const objEngRu: IObjEnRu = {
  'experience': {arr: enRuExperience, ru: 'Опыт'},
  'education': {arr: enRuEducation, ru: 'Образование'},
  'skills': {arr: enRuSkills, ru: 'Навыки'},
  'aboutme': {arr: enRuAboutme, ru: 'О себе'},
  'certificates': {arr: enRuCertificates, ru: 'Сертификаты'},
}



