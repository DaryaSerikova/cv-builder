import { Button, Form, Input, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import { useAppDispatch } from 'store/hooks';
import { arrAboutme, arrCertificates, arrEducation, arrExperience, arrSkills } from './data';
import type { 
  AboutmeFieldType, 
  CertificatesFieldType, 
  EducationFieldType, 
  ExperienceFieldType, 
  SkillsFieldType } from '~/types/types';
import { objEngRu } from './data';
import s from './section.module.scss';
import { updateSection, removeSection } from 'store/slices/sectionsSlice';




export interface IArrItems {
  label: string;
  name: string;
  type: 'input' | 'datepicker' | 'textarea';
}
export type TEnRu = {[key: string]: string};

export interface IObjEnRu {
  'experience': {arr: TEnRu, ru: string},
  'education': {arr: TEnRu, ru: string},
  'skills': {arr: TEnRu, ru: string},
  'aboutme': {arr: TEnRu, ru: string},
  'certificates': {arr: TEnRu, ru: string},
}

interface ISection {
  id: number;
  name: 'experience' | 'education' | 'skills' | 'aboutme' | 'certificates';
}

type FormType = {
  experience: ExperienceFieldType;
  education: EducationFieldType,
  skills: SkillsFieldType,
  aboutme: AboutmeFieldType,
  certificates: CertificatesFieldType,
}


const Section = <K extends keyof FormType>({ id, name }: ISection) => {

  const { Item } = Form;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const dispatch = useAppDispatch();

  const isSimple = (name === 'experience' || name === 'education') ? false : true;

  const objGetArray = {
    'experience': arrExperience,
    'education': arrEducation,
    'skills': arrSkills,
    'aboutme': arrAboutme,
    'certificates': arrCertificates,
  }
  

  const onFinish: FormProps['onFinish'] = (values) => {
    // console.log('values:', values);
  };
  
  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange: FormProps['onValuesChange'] = (changedValues, allValues) => {
    if (allValues?.period) {
      let [start, end] = allValues?.period;
      [start, end] = [start.format('DD.MM.YYYY'), end.format('DD.MM.YYYY')]
      allValues.period = [start, end];
    }

    dispatch(updateSection({id: id, type: name, ...allValues}))
  }
  const handleRemove = () => {
    dispatch(removeSection(id))
  }


  return (
    <article className={s.section}>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        onMouseDown={(e) => { //dnd
          if (e.target instanceof HTMLInputElement) {
            e.stopPropagation();
          }
        }}
      >

        {/* <div className={s.name}>{objEngRu[`${name}`].ru}</div> */}
        <div className={s.name}>{objEngRu[`${name}`]?.ru}</div>

        { objGetArray[`${name}`]?.map((field: IArrItems, index) => {
          let child = <Input></Input>;
          if (field?.type === 'datepicker') child = <RangePicker format={'DD.MM.YYYY'}/>
          if (field?.type === 'textarea') child = <TextArea autoSize={{ minRows: 2, maxRows: 6 }}/>
          return (<>
            <Item<K>
              data-no-drag
              label={isSimple ? '' : field?.label}
              name={field?.name}
              key={`${field?.name}_${index}`}

              >
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