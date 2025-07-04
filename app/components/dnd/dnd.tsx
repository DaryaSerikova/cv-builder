import { useState } from "react";
import { pointerWithin, useSensors, } from "@dnd-kit/core";
import { useSensor, DndContext, MouseSensor, PointerSensor } from "@dnd-kit/core";
import type { DragStartEvent, DragOverEvent } from "@dnd-kit/core";

const sensorSettings = {
  distance: 2,
};

export default function DndRoot() {
  const [activeDndItemId, setActiveDndItemId] = useState<null | number>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: sensorSettings,
    }),
    useSensor(PointerSensor, {
      activationConstraint: sensorSettings,
    }),
  );
  
  const handleDragStart = ({active}: DragStartEvent) => {
    setActiveDndItemId(active.id as number);
  };
  
  const handleDragEnd = ({over}: DragOverEvent) => {
    setActiveDndItemId(null);
  };
  
  const handleDragOver = ({active, over}: DragOverEvent) => {
    // Обработаем позже
  } 
  
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}>
       {/* Cюда будем добавлять элементы */}
    </DndContext> 
  );
} 