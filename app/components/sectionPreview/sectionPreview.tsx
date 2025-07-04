import React from 'react';
import s from './sectionPreview.module.scss';
import { objEngRu } from '../section/data';
import { useAppSelector } from 'store/hooks';



interface ISectionPreview {
  name: string,
}

const SectionPreview = ({ name, data }: ISectionPreview) => {
  
  // const stateSection = useAppSelector((state) => state[`${name}`]?.[`${name}`]);
  // const arrState = stateSection ? Object.entries(stateSection) : null;
  const { type, id, ...newData } = data;
  const arrState = Object.entries(newData);
  console.log("arrState: ", arrState)

  return (
    <article className={s.section}>
      <div className={s.name}>{objEngRu[`${data.type}`].ru}</div>
      <div className={s.body}>

      {arrState?.map((field) => {
        console.log('field: ', field)
        console.log('!!field?.[1]: ', !!field?.[1])
        const nameField = objEngRu[`${data.type}`].arr[`${field[0]}`];
        let dataNode = field[0] === 'period' && !!field?.[1]
        ? <><p>{field?.[1][0]}</p> - <p>{field?.[1][1]}</p></>
        : <>{field?.[1]}</>;
        return(<>
            <div className={s.item}>{nameField}</div>
            <div className={s.item}>{dataNode}</div>
          </>)
        })
      }
      </div>
    </article>
  )
}

export default SectionPreview;