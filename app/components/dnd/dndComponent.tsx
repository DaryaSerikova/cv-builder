// components/SectionsList/SectionsList.tsx
import { useDraggable, useDroppable, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { CSS } from '@dnd-kit/utilities';

// import { selectSectionIds, selectSectionById, reorderSections } from 'store/slices/sectionsSlice2';
// import type Section from '../section/section';
import Section from '../section/section';
import { reorderSections } from 'store/slices/sectionsSlice';

const DraggableSection = ({ id }: { id: string }) => {
  // const section = useAppSelector(selectSectionById(id));
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const sections = useAppSelector((state) => state?.sections?.sections);
  const section = sections?.filter((item) => item.id === id)[0];

  
  if (!section) return null;


  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDragging ? 0.8 : 1,
    cursor: 'grab',
  };

  // <div ref={setNodeRef} style={style} {...listeners} {...attributes}>

  return (
    <>
    <div ref={setNodeRef} style={style} {...attributes}>
    <div {...listeners} style={{cursor: 'grab', padding: '8px'}}>
      <span>&equiv;</span>
    </div>
      <Section id={section?.id} name={section?.type} />
    </div>
    </>
  );
};

export const SectionsList = () => {
  const dispatch = useAppDispatch();
  // const sectionIds = useAppSelector(selectSectionIds);
  const sectionIds = useAppSelector((state) => state?.sections?.ids);

  const handleDragEnd = (event: any) => {
    console.log('--- event: ', event)
    const { active, over } = event;

    if(!over || active.id === over.id) return
    // if (active.id !== over.id) {

      dispatch(reorderSections({ activeId: active?.id, overId: over?.id }));
    // }
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