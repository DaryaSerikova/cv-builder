import s from './welcome.module.scss';
import type { MenuProps, FormProps } from 'antd';
import { Select, Button, Form } from 'antd';
import Section from '~/components/section/section';
import SectionPreview from '~/components/sectionPreview/sectionPreview';
import type { ExperienceFieldType } from 'store/slices/experienceSlice';
import type { EducationFieldType } from 'store/slices/educationSlice';
import type { SkillsFieldType } from 'store/slices/skillsSlice';
import { arrExperience, arrEducation, arrSkills } from '~/components/section/data';
import { useAppSelector } from 'store/hooks';
import { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { addSection } from 'store/slices/sectionsSlice';

type FieldType = {
  section?: string;

};

export function Welcome() {
  const [section, setSection] = useState(null);
  const mainState = useAppSelector((state) => state);
  const experience = useAppSelector((state) => state.experience?.experience);
  const education = useAppSelector((state) => state.education?.education);
  const skills = useAppSelector((state) => state.skills?.skills);
  const dispatch = useAppDispatch();

  const sections = useAppSelector((state) => state.sections?.sections);

  console.log('sections: ', sections)

  const arrStateExperience = experience ? Object.entries(experience) : null;
  const arrStateEducation = education ? Object.entries(education) : null;
  const arrStateSkills = skills ? Object.entries(skills) : null;

  console.log("mainState: ", mainState)
  // console.log("---   experience: ", experience)
  // console.log('---   arrStateExperience: ', arrStateExperience)


  const { Item } = Form;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    dispatch(addSection(section));
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSection(value);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: ' Опыт',
    },
    {
      key: '2',
      label: 'Образование',
    },
    {
      key: '3',
      label: 'Навыки',
      // disabled: true,
    },
    {
      key: '4',
      // danger: true,
      label: 'Сертификаты',
    },
    {
      key: '5',
      label: 'О себе'
    }
  ];



  const objExperience = {
    'position': 'Должность',
    'company': 'Компания',
    'period': 'Период',
    'description': 'Описание',
  }

  const objEducation = {
    'institution': 'Учебное заведение',
    'specialty': 'Специальность',
    'period': 'Период',
  }

  const objSkills = {
    'skills': 'Навыки',
  }

  return (
    <main className={s.page}>
      <div className={s.container}>
        <div className={s.block}>

          <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
            <Item<FieldType>
              label="section"
              name="section">
                <Select
                  defaultValue="lucy"
                  style={{ width: 150 }}
                  onChange={handleChange} //Опыт, Образование, Навыки, Сертификаты, О себе.
                  options={[
                    { value: 'experience', label: 'Опыт' },
                    { value: 'education', label: 'Образование' },
                    { value: 'skills', label: 'Навыки' },
                    { value: 'certificates', label: 'Сертификаты' },
                    { value: 'aboutme', label: 'О себе'},
                  ]}
                />
            </Item>
            <Item label={null}>
              <Button htmlType="submit">Добавить секцию</Button>
            </Item>
          </Form>
          {/* {sections && sections?.map((name) => {
            <Section<ExperienceFieldType> name='Опыт' array={arrExperience} />
          })} */}
            
          <Section<ExperienceFieldType> name='experience' />
          <Section<EducationFieldType> name='education' />
          <Section<SkillsFieldType> name='skills' />
          {/* experience, education, skills, certificates, aboutme */}
        </div>


        <div className={s.block}>
          {experience && <SectionPreview<ExperienceFieldType> 
            arrState={arrStateExperience} 
            objEngRu={objExperience} 
            name='Опыт'
            />}

          {education && <SectionPreview<EducationFieldType>
            arrState={arrStateEducation}
            objEngRu={objEducation}
            name={'Образование'}
          />}

          {skills && <SectionPreview
            arrState={arrStateSkills}
            objEngRu={objSkills}
            name={'Навыки'}
          />}

        </div>
      </div>
    </main>
  );
}
