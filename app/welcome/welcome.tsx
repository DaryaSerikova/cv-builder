import { useState, useEffect } from 'react';
import type { MenuProps, FormProps } from 'antd';
import { Select, Button, Form } from 'antd';
import SectionPreview from '~/components/sectionPreview/sectionPreview';
import { SectionsList } from '~/components/dnd/dndComponent';
import { useAppSelector,  useAppDispatch } from 'store/hooks';
import { updateCurrentId } from 'store/slices/currentIdSlice';
import { addSection } from 'store/slices/sectionsSlice';
import s from './welcome.module.scss';



type FieldType = {
  section?: string;
};

export function Welcome() {
  const [section, setSection] = useState(null);

  const mainState = useAppSelector((state) => state);
  const sections = useAppSelector((state) => state.sections?.sections);
  const currentId = useAppSelector((state) => state.currentId)
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [sections]);

  console.log("state.sections: ", mainState?.sections)


  const { Item } = Form;

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    // console.log('Success:', values);
    dispatch(addSection({'id': currentId, 'type': section})) 
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
    },
    {
      key: '4',
      label: 'Сертификаты',
    },
    {
      key: '5',
      label: 'О себе'
    }
  ];


  return (
    <main className={s.page}>
      <header className={s.header}>
        RESUME BUILDER
      </header>
      <div className={s.container}>


        <div className={s.block}>

          {/* {sections && sections?.map((item) => {
            return <Section id={item.id} name={item?.type} />
          })} */}
          <SectionsList />

          <div className={s.addSection}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
              <Item<FieldType>
                label=""
                name="section">
                  <Select
                    defaultValue='Тип секции'
                    style={{ width: 150 }}
                    onChange={handleChange}
                    options={[
                      { value: 'experience', label: 'Опыт' },
                      { value: 'education', label: 'Образование' },
                      { value: 'skills', label: 'Навыки' },
                      { value: 'certificates', label: 'Сертификаты' },
                      { value: 'aboutme', label: 'О себе'},
                    ]}
                  />
              </Item>
              <Button htmlType="submit">Добавить секцию</Button>
            </Form>
          </div>
        </div>


        <div className={`${s.block} ${s.fixed}`}>
          <div className={s.previewHeader}>
            Live View
          </div>
          <div className={s.resumeList}>
            {sections && sections?.map((item) => { //рабочая версия
              return <SectionPreview data={item}/>
            })}
          </div>

        </div>
      </div>
    </main>
  );
}
