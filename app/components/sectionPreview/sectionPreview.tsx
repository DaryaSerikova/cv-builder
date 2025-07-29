import s from './sectionPreview.module.scss';
import { objEngRu } from '../section/data';
import type { TSection } from '~/types/types';



interface ISectionPreview {
  data: TSection
}

type TValueField = string |  number | string[];


const SectionPreview = ({ data }: ISectionPreview) => {
  const { type, id, ...newData } = data;

  let isOneField = false;
  if (type === 'skills' || type === 'certificates' || type === "aboutme") {
    isOneField = true;
  }

  const arrState = Object.entries(newData);
  console.log('arrState: ',  arrState)

  return (
    <article className={s.section}>
      <div className={s.name}>{objEngRu[`${type}`].ru}</div>
      <div className={s.body}>

        {!isOneField && arrState.length !== 0 && arrState?.map((field, index) => {
          const nameFieldRu: string = objEngRu[`${type}`].arr[`${field[0]}`];
          const nameField: string = field?.[0];
          const valueField: TValueField = field?.[1];

          let dataNode = (nameField === 'period' && !!valueField)
          ? <p className={s.period}><p>{valueField?.[0]}</p> - <p>{valueField?.[1]}</p></p>
          : <>{valueField}</>;

          return(<div className={s.field} key={`${nameField}_${index}`}>
            <div className={s.title}>{nameFieldRu}</div>
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