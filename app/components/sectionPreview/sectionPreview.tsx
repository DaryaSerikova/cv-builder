import s from './sectionPreview.module.scss';
import { objEngRu } from '../section/data';
import type { TSection } from '~/types/types';



interface ISectionPreview {
  data: TSection
}

const SectionPreview = ({ data }: ISectionPreview) => {
  const { type, id, ...newData } = data;

  let isOneField = false;
  if (type === 'skills' || type === 'certificates' || type === 'aboutme') {
    isOneField = true;
  }

  const arrState = Object.entries(newData);

  return (
    <article className={s.section}>
      <div className={s.name}>{objEngRu[`${type}`].ru}</div>
      <div className={s.body}>

        {!isOneField && arrState.length !== 0 && arrState?.map((field) => {
          const nameField = objEngRu[`${type}`].arr[`${field[0]}`];
          let dataNode = field[0] === 'period' && !!field?.[1]
          ? <p className={s.period}><p>{field?.[1][0]}</p> - <p>{field?.[1][1]}</p></p>
          : <>{field?.[1]}</>;

          // return(<>
          //     <div className={s.item}>{nameField}</div>
          //     <div className={s.item}>{dataNode}</div>
          //   </>)
          return(<div className={s.field}>
            <div className={s.title}>{nameField}</div>
            <div className={s.text}>{dataNode}</div>
          </div>)
          })
        }
        {isOneField && arrState.length !== 0 && <div className={s.field}>{arrState?.[0][1]}</div>}
      </div>
    </article>
  )
}

export default SectionPreview;