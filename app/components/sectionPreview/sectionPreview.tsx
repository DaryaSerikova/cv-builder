import s from './sectionPreview.module.scss';
import { objEngRu } from '../section/data';
import type { Section } from 'store/slices/sectionsSlice';



interface ISectionPreview {
  data: Section
}

const SectionPreview = ({ data }: ISectionPreview) => {
  
  const { type, id, ...newData } = data;
  const arrState = Object.entries(newData);
  console.log("arrState: ", arrState)

  return (
    <article className={s.section}>
      <div className={s.name}>{objEngRu[`${type}`].ru}</div>
      <div className={s.body}>

      {arrState?.map((field) => {
        console.log('field: ', field)
        console.log('!!field?.[1]: ', !!field?.[1])
        const nameField = objEngRu[`${type}`].arr[`${field[0]}`];
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