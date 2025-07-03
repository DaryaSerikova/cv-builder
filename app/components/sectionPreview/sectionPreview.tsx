import React from 'react';
import s from './sectionPreview.module.scss'

type Props = {}

interface ISectionPreview<T> {
  arrState: T,
  oblEngRu: object,
  name: string,
}

const SectionPreview = <T,>({arrState, objEngRu, name}: ISectionPreview) => {
  return (
    <article className={s.section}>
      <div className={s.name}>{name}</div>
      <div className={s.body}>
      {/* {experience && <>

      </>} */}
      {arrState?.map((field) => {
        const nameField = objEngRu[`${field[0]}`];
        return(<>
            <div className={s.item}>{nameField}</div>
            <div className={s.item}>{field?.[1]}</div>
          </>)
        })
      }
      </div>
    </article>
  )
}

export default SectionPreview