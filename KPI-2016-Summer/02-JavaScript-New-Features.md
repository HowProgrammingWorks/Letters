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
  getCity: function() {
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
  var i = 5;
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
  {
    function getValue() {
      return 'Second';
    }
    console.log(getValue());
  }
  console.log(getValue());
}
```

## Arrow functions (толстые стрелки, fat arrow)

Правая часть может быть просто выражением, без блока кода:

```js
let fn = () => 5;
console.log(fn());
```

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
let query = (person) => (
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

for (let i of fibonacci(10)) {
  console.log(i);
}
```
