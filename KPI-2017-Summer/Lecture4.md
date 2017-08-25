# Лекция 4: Введение в Node.js и серверный JavaScript

- Презентация тут: [node-kpi-2017.pdf](https://github.com/HowProgrammingWorks/Letters/blob/master/KPI-2017-Summer/node-kpi-2017.pdf)
- В качестве домашнего задания берем пустой шаблон [HowProgrammingWorks/Project](https://github.com/HowProgrammingWorks/Project)
  - Клонируем через `git clone https://github.com/HowProgrammingWorks/Project`
  - Устанавливаем зависимости через `npm install`
  - Добавить в него через `npm install concolor` библиотеку
  [concolor](https://www.npmjs.com/package/concolor), тут же лежит документация,
  как делать разноцветный вывод и задавать стили шрифта
  - Открыть файл `main.js` и подгрузить `concolor` через `require` по примеру
  того, как подгружена библиотека `metasync`
  - При помощи `Object.keys(metasync)` берем все методы из `metasync` в массив
  строк и итерируем их через `for..of` или `Array.prototype.forEach()`.
  Подсмотриеть синтаксис можно на [MDN](https://developer.mozilla.org/)
  - Теперь можно вывести их на экран, добавляя кол-во параметров и оформляя
  вывод разными цветами
  - Проверяем сиснтаксис через `eslint .` или `npm run lint`
  - Запускаем через `node main`
  - Все вмест (линтер и запуск) через `npm test`
