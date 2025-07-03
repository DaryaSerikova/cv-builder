import React from 'react';
import s from './sectionPreview.module.scss';
import { objEngRu } from '../section/data';
import { useAppSelector } from 'store/hooks';



interface ISectionPreview {
  name: string,
}

const SectionPreview = ({ name}: ISectionPreview) => {
  
  const stateSection = useAppSelector((state) => state[`${name}`]?.[`${name}`]);
  const arrState = stateSection ? Object.entries(stateSection) : null;

  return (
    <article className={s.section}>
      <div className={s.name}>{objEngRu[`${name}`].ru}</div>
      <div className={s.body}>

      {arrState?.map((field) => {
        const nameField = objEngRu[`${name}`].arr[`${field[0]}`];
        let dataNode = field[0] !== 'period' 
        ? <>{field?.[1]}</> 
        : <><p>{field?.[1]?.[0]}</p> - <p>{field?.[1]?.[1]}</p></>;
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