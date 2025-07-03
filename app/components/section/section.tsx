import React from 'react';
import { Select, Button, Form, Input, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import s from './section.module.scss';
import { useAppDispatch } from 'store/hooks';
import { updateExperience } from 'store/slices/experienceSlice';
import { updateEducation } from 'store/slices/educationSlice';
import { updateSkills } from 'store/slices/skillsSlice';
import { arrAboutme, arrCertificates, arrEducation, arrExperience, arrSkills } from './data';
import type { AboutmeFieldType, CertificatesFieldType, 
  EducationFieldType, ExperienceFieldType, SkillsFieldType } from '~/types/types';
import dayjs, {Dayjs} from 'dayjs';
import { objEngRu } from './data';
import { updateAboutme } from 'store/slices/aboutmeSlice';
import { updateCertificates } from 'store/slices/certificatesSlice';
import { removeSection } from 'store/slices/sectionsSlice';


export interface IArrItems {
  label: string;
  name: string;
  type: 'input' | 'datepicker' | 'textarea';
}

// interface ISection<T> {
interface ISection {
  name: 'experience' | 'education' | 'skills' | 'aboutme' | 'certificates';
}

type FormType = {
  experience: ExperienceFieldType;
  education: EducationFieldType,
  skills: SkillsFieldType,
  aboutme: AboutmeFieldType,
  certificates: CertificatesFieldType,
}


// const Section = <T,>({ name }: ISection<T>) => {
const Section = <K extends keyof FormType>({ name }: ISection) => {

  const { Item } = Form;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const dispatch = useAppDispatch();

  const isSimple = name === 'experience' || name === 'education' ? false : true;

  const objGetArray = {
    'experience': arrExperience,
    'education': arrEducation,
    'skills': arrSkills,
    'aboutme': arrAboutme,
    'certificates': arrCertificates,
  }
  // experience, education, skills, certificates, aboutme
  



  const onFinish: FormProps<T>['onFinish'] = (values) => {
    // console.log('values:', values);
  };
  
  const onFinishFailed: FormProps<T>['onFinishFailed'] = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const onValuesChange: FormProps<T>['onValuesChange'] = (changedValues, allValues) => {
    console.log('changedValues: ', changedValues); //конкретно измененное поле

    console.log('allValues (general): ', allValues)
    if (allValues?.period) {
      let [start, end] = allValues?.period;
      [start, end] = [start.format('DD.MM.YYYY'), end.format('DD.MM.YYYY')]
      allValues.period = [start, end];
    }


    if (name === 'experience') dispatch(updateExperience(allValues));
    if (name === 'education') dispatch(updateEducation(allValues));
    if (name === 'skills') dispatch(updateSkills(allValues));
    if (name === 'aboutme') dispatch(updateAboutme(allValues));
    if (name === 'certificates') dispatch(updateCertificates(allValues));
  }
  const handleRemove = () => {
    console.log('name: ', name)
    dispatch(removeSection(name));
  }

  return (
    <article className={s.section}>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >

        <div className={s.name}>{objEngRu[`${name}`].ru}</div>
        { objGetArray[`${name}`]?.map((field: IArrItems) => {
          let child = <Input></Input>;
          if (field?.type === 'datepicker') child = <RangePicker format={'DD.MM.YYYY'}/>
          if (field?.type === 'textarea') child = <TextArea />
          return (<>
            <Item<T>
              label={isSimple ? '' : field?.label}

              // label={field?.label}
              name={field?.name}>
                {child}
            </Item>
          </>)})        
        }
          <Button onClick={handleRemove}>
            Удалить
          </Button>
      </Form>
    </article>
  )
}

export default Section;