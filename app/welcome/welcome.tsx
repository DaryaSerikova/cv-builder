import s from './welcome.module.scss';
import type { MenuProps, FormProps } from 'antd';
import { Select, Button, Form } from 'antd';
import Section from '~/components/section/section';
import SectionPreview from '~/components/sectionPreview/sectionPreview';
import { useAppSelector } from 'store/hooks';
import { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { updateCurrentId } from 'store/slices/currentIdSlice';
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
  const aboutme = useAppSelector((state) => state.aboutme?.aboutme);
  const certificates = useAppSelector((state) => state.certificates?.certificates);
  const sections = useAppSelector((state) => state.sections?.sections);

  const dispatch = useAppDispatch();

  const currentId = useAppSelector((state) => state.currentId)



  console.log('sections (redux): ', sections)
  // console.log("mainState: ", mainState)


  const { Item } = Form;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    // console.log('Success:', values);
    // dispatch(addSection(section)); 
    // console.log('---onFinish---')
    dispatch(addSection({'id': currentId, 'type': section})) // 
    dispatch(updateCurrentId(currentId + 1));

  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`); 
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
                  defaultValue='Тип секции'
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

          {sections && sections?.map((item) => {
            return <Section id={item.id} name={item?.type} />
          })}
        </div>


        <div className={s.block}>
          {sections && sections?.map((section) => {
            console.log('section (preview): ', section)
            return <SectionPreview data={section}/>
          })}
          {/* {sections && sections?.map((section) => {
            if (!mainState?.[`${section}`]?.[`${section}`]) return <></>
            else return <SectionPreview name={section} />
          })} */}


        </div>
      </div>
    </main>
  );
}
