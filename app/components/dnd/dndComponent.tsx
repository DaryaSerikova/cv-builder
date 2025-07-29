import { useEffect } from 'react';
import { useDraggable, useDroppable, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';
import Section from '../section/section';
import { reorderSections } from 'store/slices/sectionsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import s from './dndComponent.module.scss'



const DraggableSection = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const { setNodeRef: setDroppableRef } = useDroppable({ id: id });
  const sections = useAppSelector((state) => state?.sections?.sections);
  const section = sections?.filter((item) => +item.id === +id)[0];
  console.log('section: ', section)

  // useEffect(() => {
  //   console.log('id: ', id, ', section:', section);
  // }, [id])

  if (!section) return null;


  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDragging ? 0.8 : 1,
    cursor: 'grab',
  };


  return (
    <div ref={setDroppableRef} >
      <div ref={setNodeRef} style={style} {...attributes} className={s.dndWrapper}>
        <div {...listeners} className={s.dndIcon}>
          <span>&equiv;</span>
        </div>
        <Section id={section?.id} name={section?.type} />
      </div>
    </div>
  );
};

export const SectionsList = () => {
  const dispatch = useAppDispatch();
  const sectionIds = useAppSelector((state) => state?.sections?.ids);

  console.log('sectionIds: ', sectionIds);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      dispatch(reorderSections({ activeId: active?.id, overId: over?.id }));
    }
  };

  return (
    <DndContext 
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={sectionIds} strategy={verticalListSortingStrategy}>
        {sectionIds.map(id => (
          <DraggableSection key={id} id={id} />

        ))}
      </SortableContext>
    </DndContext>
  );
};