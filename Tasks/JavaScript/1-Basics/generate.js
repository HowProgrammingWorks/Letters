const fs = require('fs');
const personAmount = 30;
const data = require('./data.js');

let personId = parseInt(process.argv[2]);

let taskList = [];
if (personId) {
  taskList.push(generateTask(personId));
} else {
  for (let pid = 1; pid <= personAmount; pid++) {
    taskList.push(generateTask(pid));
  }
}
fs.writeFileSync('tasks.json', JSON.stringify(taskList));

let text = '';
taskList.forEach(personTask => {
  text += 'Задание для студента №' + personTask.personId + '\n';
  personTask.tasks.forEach(aTask => {
    text += (
      'Задание №' + aTask.order + '\n' +
      'Текст задания: ' + aTask.task + '\n'
    );
    aTask.variants.forEach(variant => {
      text += 'Вариант: ' + variant + '\n';
    });
    text += '\n';
  });
  text += '--------------------\n';
});
fs.writeFileSync('tasks.txt', text);

let csv = '';
taskList.forEach(personTask => {
  csv += 'Задание для студента №;"' + personTask.personId + '"\n';
  personTask.tasks.forEach(aTask => {
    csv += (
      '№' + aTask.order + ';' + aTask.task + ';'
    );
    aTask.variants.forEach(variant => {
       csv += variant + ';';
    });
    csv += '\n';
  });
  csv += '\n\n';
});
fs.writeFileSync('tasks.csv', csv);

function generateTask(personId) {
  let result = { personId, tasks: [] };
  data.forEach((item, n) => {
    let aTask = {
      order: n + 1,
      task: item.task,
      variants: []
    };
    for (let i = 0; i < item.select; i++) {
      let v = (personId + i) % item.options.length;
      aTask.variants.push(item.options[v]);
    }
    result.tasks.push(aTask);
  });
  return result;
}
