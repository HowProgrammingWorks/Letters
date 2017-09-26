# Лекции #7 "Введение в Node.js"

### Ссылки:
- [Пример проекта на JavaScript для Node.js](https://github.com/HowProgrammingWorks/Project)
- Презентация с лекции лежит тут:
[node-kpi-2017.pdf](https://github.com/HowProgrammingWorks/Letters/blob/master/KPI-2017-Summer/node-kpi-2017.pdf)
- Простая установка через [nvm (node version manager)](https://github.com/creationix/nvm)
- Сайт [Node.js](https://nodejs.org/en/)
- Менеджер пакетов [npm](https://www.npmjs.com/)

### Задание:
- Установить Node.js или обновить версию (подходит версия >= 6.0, лучше ставить 8.5)
- Попробовать сделать проект
  - создать пустой каталог, войти в него и написать `npm init`,
  ввести обязательные поля
  - создать файл `main.js` и написать в нем немного кода
  - запустить файл из консоли `node main` или `node main.js`
  - добавьте библиотеку в зависимости `npm install concolor`
  - подключите зависимость через `require`
  - попробуйте вывести что-то в консоль разными цветами с использованием
  `concolor`, документация находится тут: https://www.npmjs.com/package/concolor
- Попробуйте подключить встроенный модуль os
  - Его не нужно устанавливать через npm
  - Просто получите ссылку на него через `require`
  - Документация к модулю: https://nodejs.org/api/os.html
- Так же просмотрите возможности модулей:
  - `process` https://nodejs.org/api/process.html
  - `readline` https://nodejs.org/api/readline.html
  - `console` https://nodejs.org/api/console.html
