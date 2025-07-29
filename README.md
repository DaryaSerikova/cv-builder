# Визуальный редактор резюме с секциями и превью

### Описание:
Минимальный визуальный редактор резюме с возможностью добавлять,
удалять и редактировать секции (опыт, образование, навыки и т.д.) с моментальным
превью в правой части экрана.

### Cтэк
- React Router 7 (React) 
- TypeScript
- Redux-toolkit
- HTML
- SCSS-modules
- Ant Design
- Vite
- dnd-kit (Drag and Drop)

# Start

Команда для запуска:
```
npm run dev
```
Приложение откроется на `http://localhost:5173`;

# Визуальное представление 


### Выбираем тип секции
![Выбор типа секции](https://github.com/DaryaSerikova/cv-builder/raw/dev/public/picture1.jpg)

### Добавляем секцию
При добавлении каждой новой секции, окошко прокручивается до последней добавленной секции.
Лист Live View зафиксирован и при прокрутке остается на месте.
Информацию можно редактировать, добавлять, удалять
![Выбор типа секции](https://github.com/DaryaSerikova/cv-builder/raw/dev/public/picture2.jpg)

### При заполнении любой секций в live режиме справа в листок добавляется информация
![Выбор типа секции](https://github.com/DaryaSerikova/cv-builder/raw/dev/public/picture3.jpg)

### Еще можно перемещать секции местами, если взять курсором карточку строчку со знаком <span>&equiv;</span>
Функция drag and Drop

Берем нужную нам секцию и меняем ее местами с той секцией, над которой держим нашу.
![Выбор типа секции](https://github.com/DaryaSerikova/cv-builder/raw/dev/public/picture4.jpg)

После отпускам нашу секцию и наблюдаем изменения:
- Карточки слева поменялись местами
- И в Live View тоже изменился порядок секций
![Выбор типа секции](https://github.com/DaryaSerikova/cv-builder/raw/dev/public/picture5.jpg)

Любые изменения слева, моментально отображаются в листке справа.





____
npm i @dnd-kit/core @dnd-kit/sortable
npm install @dnd-kit/modifiers

npm install @dnd-kit/utilities
