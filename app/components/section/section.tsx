import React from 'react';
import { Select, Button, Form, Input, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import s from './section.module.scss';
import { useAppDispatch } from 'store/hooks';
import { updateExperience } from 'store/slices/experienceSlice';
import { updateEducation } from 'store/slices/educationSlice';
import { updateSkills } from 'store/slices/skillsSlice';
import { arrEducation, arrExperience, arrSkills } from './data';
import dayjs, {Dayjs} from 'dayjs';


export interface IArrItems {
  label: string;
  name: string;
  type: 'input' | 'datepicker' | 'textarea';
}

interface ISection<T> {
  // array: IArrItems[];
  name: string;
}


const Section = <T,>({ name }: ISection<T>) => {
  const { Item } = Form;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const dispatch = useAppDispatch();

  const isSimple = name === 'experience' || name === 'education' ? false : true;

  const objArray = {
    'experience': arrExperience,
    'education': arrEducation,
    'skills': arrSkills,

  }
  // experience, education, skills, certificates, aboutme
  



  const onFinish: FormProps<T>['onFinish'] = (values) => {
    // console.log('values:', values);
  };
  
  const onFinishFailed: FormProps<T>['onFinishFailed'] = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const onValuesChange: FormProps<T>['onValuesChange'] = (changedValues, allValues) => {
    // console.log('changedValues: ', changedValues); //конкретно измененное поле
    // console.log('allValues: ', allValues)
    if (name === 'experience') dispatch(updateExperience(allValues));
    if (name === 'education') dispatch(updateEducation(allValues));
    if (name === 'skills') dispatch(updateSkills(allValues));

    // if (name === 'Опыт') dispatch(updateExperience(allValues))
    // if (name === 'Опыт') dispatch(updateExperience(allValues))
    // if (name === 'Опыт') dispatch(updateExperience(allValues))

  }
  const handleRemove = (e) => {
    console.log('e.target.value: ', e.target.value)
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

        <div className={s.name}>{name}</div>
        { objArray[`${name}`]?.map((field: IArrItems) => {
          let child = <Input></Input>;
          if (field?.type === 'datepicker') child = <RangePicker />
          if (field?.type === 'textarea') child = <TextArea />
          return (<>
            <Item<T>
              // label={isSimple ? '' : field?.label}

              label={field?.label}
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