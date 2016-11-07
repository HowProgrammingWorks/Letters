# Новые возможности в JavaScript

## Property definition

Появились новые возможности объявления ключей у объектов/хешей

```js
// Так раньше писали
let name = 'Marcus Aurelius',
    city = 'Rome';
let a = {
  name: name,
  city: city
};

// А так можно теперь
let b = { name, city };

console.dir({ a, b });
```

Теперь можно задавать ключи из переменных, т.е. динамически их подставлять. Но нельзя злоупотреблять этим, может плохо сказаться на оптимизации кода. Разнообразие получаемых структур не должно быть большим, чтобы был смысл строить скрытые классы.

```js
let fieldName = 'city',
    fieldValue = 'Roma';
let person = {
  name: 'Marcus Aurelius',
  [fieldName]: fieldValue
};
console.dir(person);
```

Можно использовать для ключей и выражения:

```js
let fieldValue = 'Roma';
let person = {
  name: 'Marcus Aurelius',
  ['city' + 'Born']: fieldValue
};
console.dir(person);
```

А где выражения, там и функции:

```js
let fieldValue = 'Roma';
function fn(s) {
  return s + 'Born';
}
let person = {
  name: 'Marcus Aurelius',
  [fn('city')]: fieldValue
};
console.dir(person);
```

## Функции объектов/хешей

Раньше функции в хеши нужно было добавлять так:

```js
let person = {
  name: 'Marcus Aurelius',
  getCity: function functionName() {
    return 'Roma';
  }
};
console.dir(person.getCity());
```

Теперь можно опустить слово `function` и двоеточие:

```js
// Теперь можно опустить слово function
let person = {
  name: 'Marcus Aurelius',
  getCity() {
    return 'Roma';
  }
};
console.dir(person.getCity());
```

## Destructuring assignment

Появилась возможность из массива одним присвоением получить несколько переменных, соответствующих каждому элементу:

```js
let a = [1, 2, 3];
let [k, l, m] = a;
console.log({k,l,m});
```

## Константы

```js
const a = 5;
a = 2;
```


В предыдущем коде получаем ошибку, но вот значения массива менять можно:

```js
const a = [1, 2, 3];
a[1] = 4;
console.log(a);
```

Это потому, что константно фиксируется только тип переменной. А вот если мы объявим объект или массив, то поля и элементы менять можно:

```js
const a = {
  name: 'Marcus Aurelius',
  city: 'Rome'
};
a.city = 'Kiev';
console.dir(a);
```

В константной строке нельзя менять буквы по индексу, но и ошибку оно не выдаст:

```js
const a = 'asd';
a[2] = 'k';
a['b'] = 'l';
a.c = 'm';
console.log(a);
console.log(a[2]);
console.log(a['b']);
console.log(a.c);
```

## Блоки видимости

Block-scoped variable and functions. Это новая возможность ограничивать пределы видимости переменных и функций более кратким синтаксисом. Раньше мы делали это при помощи замыканий:

```js
function() {
  {
    var i = 5;
    {
      var c = 'Hello';
    }
    console.log(c);
  }
  (function() {
    var i = 7;
  })();
}
```

Это работало, потому, что функции имели свои контексты. А теперь контексты есть не только у функций, но и у любых блоков кода, ограниченных `{}`, у `if`, `for` и т.д. Да и просто можно написать так:

```js
{
  let i = 5;
  {
    let i = 7;
  }
}
```

Пример использования variable scope:

```js
const a = [1, 2, 3];
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  console.log(i, item);
  {
    let c = 5;
  }
  console.log(c);
}
console.log(i, item);
```

Пример переопределения функций в контекстах:

```js
{
  function getValue() {
    return 'First';
  }
  let ogv = getValue;
  {
    function getValue() {
      return getValue() + 'Second';
    }
    console.log(getValue());
  }
  console.log(getValue());
}
```

{
  let a = { field: 5 };
  let myFlag = false;
  function inc(x) {
    if (myFlag) {
      x.field++;
    } else {
      myFlag = true;
      ++x.field;
    }
  }
  let b = inc(a) + inc(a);
}








## Arrow functions (толстые стрелки, fat arrow)

Правая часть может быть просто выражением, без блока кода:

let fn = () => 5;
console.log(fn());


Или блоком кода:

```js
let inc = (a) => {
  return ++a;
};
console.log(inc(2));
```

А если у функции всего один параметр, то можно не писать скобки:

```js
let inc = a => ++a;
console.log(inc(2));
```

Теперь пример чуть сложнее, есть массив объектов и его нужно отфильтровать по условию.

```js

// Объявляем dataset
let persons = [
  { name: 'Marcus Aurelius', city: 'Rome' },
  { name: 'Victor Glushkov', city: 'Rostov on Don' },
  { name: 'Ibn Arabi', city: 'Murcia' },
  { name: 'Mao Zedong', city: 'Shaoshan' },
  { name: 'Rene Descartes', city: 'La Haye en Touraine' }
];

// Запрос для фильтра (просто выражение)
let query = person => (
  person.name !== '' &&
  person.city === 'Rome'
);

// Фильтруем и выводим
console.dir(persons.filter(query));
```

Фильтр для четных чисел:

```js
let a = [1, 2, 3, 4, 5, 6];
let b = a.filter(n => n % 2 === 0);
console.dir(b);
```

Раньше мы бы писали фильтр для четных так:

```js
let a = [1, 2, 3, 4, 5, 6];
let b = a.filter(function(n) {
  return n % 2 === 0;
});
console.dir(b);
```

Применение толстых стрелок в колбеках асинхронных функций:

```js
fs = require('fs');
fs.readFile('Intro.md', (err, data) => {
  console.log(data);
});
```

## Значения папаметров по умолчанию

Default parameter values. Если параметров меньше при вызове, значени берутся из предзаданных:

```js
function fn(a, b = 'Marcus') {
  console.log({ a, b });
}
fn(5);
fn(6, 'Mao Zedong')
fn(7, 'Victor Glushkov', 'Kiev');
```

## Прочие параметры (Spread)

Теперь мы можем отказаться от недомассива `arguments`. В примере все параметры, не вошедшие в заданные (`a` и `b`), попадут в массив `c`.

```js
let max = (a, b, ...c) => {
  if (c.length === 0) return a > b ? a : b;
  else {
    let m = max(a, b);
    c.push(m);
    return max.apply(null, c);
  }
};

console.log(max(1,2));
console.log(max(1,2,3));
```

## Spread для строки

```js
let name = 'Marcus';
let letters = [...name];
console.log(letters);
```

## Генераторы / Generators

```js
let fibonacci = function* (max) {
  let pre = 0, cur = 1;
  while (max-- > 0) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
};

for (let i in { a: 5, b:8 }) {
for (let i of {...}) {

for (let i of fibonacci(10)) {
  console.log(i);
}
```




- Контекст функции

function ext(b) {
  let f = function(x) {
    let a = 5;
    // x,a,b,global
  };
}

- Замыкания

function createLogger(fileName) {
  let file = file(fileName);
  return function log(s) {
    file.write(s);
  };
}

let warnings = createLogger('warnings.log');
let errors = createLogger('errors.log');
errors('Here is an error');

- Примесь

function mixLogging(connection) {
  connection.id = mixLogging.lastId++;
  connection.log = function(s) {
    console.log(connection.id + ' ' + s);
  };
}
mixLogging.lastId = 0;

let socket = tcp('127.0.0.1:2000');
let request = http('127.0.0.1');
mixLogging(socket);
mixLogging(request);

- Карирование















--------

'use strict';

global.api = {};
api.fs = require('fs'),
api.request = require('request');

// Parse duration to seconds
// Example: duration('1d 10h 7m 13s')
//
function duration(s) {
  if (typeof(s) === 'number') return s;
  let units = {
    days:    { rx: /(\d+)\s*d/, mul: 86400 },
    hours:   { rx: /(\d+)\s*h/, mul: 3600 },
    minutes: { rx: /(\d+)\s*m/, mul: 60 },
    seconds: { rx: /(\d+)\s*s/, mul: 1 }
  };
  let result = 0, unit, match;
  if (typeof(s) === 'string') for (let key in units) {
    unit = units[key];
    match = s.match(unit.rx);
    if (match) result += parseInt(match[1]) * unit.mul;
  }
  return result * 1000;
}

// Metadata
//
let tasks = [
  { interval: 5000, get: 'http://127.0.0.1/api/method1.json', save: 'file1.json' },
  { interval: '8s', get: 'http://127.0.0.1/api/method2.json', put: 'http://127.0.0.1/api/method4.json', save: 'file2.json' },
  { interval: '7s', get: 'http://127.0.0.1/api/method3.json', post: 'http://127.0.0.1/api/method5.json' },
  { interval: '4s', load: 'file1.json', put: 'http://127.0.0.1/api/method6.json' },
  { interval: '9s', load: 'file2.json', post: 'http://127.0.0.1/api/method7.json', save: 'file1.json' },
  { interval: '3s', load: 'file1.json', save: 'file3.json' },
  { interval: '1s', get: 'file3.json', save: 'file4.json' },
];

// Metamodel
//
function iterate(tasks) {

  // Metamodel configuration metadata
  //
  let sources = {
    get:  api.request.get,
    load: api.fs.createReadStream
  };
  let destinations = {
    save: api.fs.createWriteStream,
    post: api.request.post,
    put:  api.request.put
  };

  // Metamodel logic
  //
  function closureTask(task) {
    return () => {
      console.dir(task);
      let key, verb, source, destination;
      for (key in sources) if (task[key]) source = sources[key](task[key]);
      for (key in destinations) if (task[key]) source.pipe(destinations[key](task[key]));
    };
  }
  for (let i = 0; i < tasks.length; i++) {
    setInterval(closureTask(tasks[i]), duration(tasks[i].interval));
  }
}

// Execution
//
iterate(tasks);


------------


// скалярные
let a = 5, // variable exampe of `number` type
    d = 3.2,
    b = 'Hello',
    c = false; // true
        
let d;
// ссылочные
let obj = {
  field1: 5,
  field2: 'Hello',
  subobject: {
    subfield1: 'value1',
    subfield2: 'value2'
  }
};

for (let key in obj) {
  console.log(key);
}







obj.subobject.subfield3 = 100;

obj['field1'] = 6;
obj['field3'] = true;
let fieldName = 'field2';
delete obj[fieldName];










let arr = [5, 'Hello', { a: 3 }, false, [1, 2, 3]];
for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}

let fn = function(prev, cur) {
  return prev + ',' + JSON.stringify(cur);
};

'[' + arr.reduce(fn) + ']';

function stringify(obj) {
  let res;
  ...
  return res;
}

typeof(arr)

if (a === 5) {
  console.log('a is 5');
} else {

}

let b = a === 5 ? 'something' : 'something else';




// log(base, argumant)

function lg(x) {
  return log(10, x);
}

function ln(x) {
  return log(E, x);
}

function log2(x) {
  return log(2, x);
}

let a = ln(25);

//

let createLog = base => x => log(base, x);

let dbConnect = ip => (
  port => (
    name => (
      (user,password) => (
        dbDriver.connect(ip, port, name, user, password)
      )
    )
  )
);

let dbHost = dbConnect('127.0.01');
let dbConnection1 = dbHost(2000);
let dbConnection2 = dbHost(3000);
let dbCampus = dbConnection1('campus');
let dbDekanat = dbConnection2('dekanat');
let campus = dbCampus('Savitskiy', 'ap59qw23'); 
let dekanat = dbDekanat('Vera', 'ls30tm10');


let ln = createLog(E);
let lg = createLog(10);
let log2 = createLog(2);

let a = ln(25);







