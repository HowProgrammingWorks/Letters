# Новые возможности в JavaScript

##Property definition

```js
// Так раньше писали
let name = 'Marcus Aurelius',
    city = 'Rome';
let a = {
  name: name,
  city: city
};
let b = { name, city };
console.dir({ a, b });
```

```js
// Ключи из переменных
let fieldName = 'city',
    fieldValue = 'Roma';
let person = {
  name: 'Marcus Aurelius',
  [fieldName]: fieldValue
}
console.dir(person);
```

```js
// Ключи из выражений
let fieldValue = 'Roma';
let person = {
  name: 'Marcus Aurelius',
  ['city' + 'Born']: fieldValue
};
console.dir(person);
```

```js
// Ключи из функций
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

##Функции объектов/хешей

```js
// Раньше так писали
let person = {
  name: 'Marcus Aurelius',
  getCity: function() {
    return 'Roma';
  }
};
console.dir(person.getCity());
```

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

##Destructuring assignment

```js
let a = [1, 2, 3];
let [k, l, m] = a;
console.log({k,l,m});
```

##Block-scoped variable and functions

```js
// Константы
const a = 5;
a = 2;
```

```js
const a = [1, 2, 3];
a[1] = 4;
console.log(a);
```

```js
// Тип не может меняться, а содержание может
const a = [1, 2, 3];
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  console.log(i, item);
}
console.log(i, item);
```

```js
const a = {
  name: 'Marcus Aurelius',
  city: 'Rome'
};
a.city = 'Kiev';
console.dir(a);
```

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

```js
let i = 0;
{
  function getValue() {
    return 'First';
  }
  {
    function getValue() {
      return 'Secont';
    }
    console.log(getValue());
  }
  console.log(getValue());
}
```

##Arrow functions (толстые стрелки, fat attow)

let fn = () => 5;
console.log(fn());
```

```js
let inc = (a) => {
  return ++a;
};
console.log(inc(2));
```

```js
let persons = [
  { name: 'Marcus Aurelius', city: 'Rome' },
  { name: 'Victor Glushkov', city: 'Rostov on Don' },
  { name: 'Ibn Arabi', city: 'Murcia' },
  { name: 'Mao Zedong', city: 'Shaoshan' },
  { name: 'Rene Descartes', city: 'La Haye en Touraine' }
];

let query = (person) => (
  person.name !== '' &&
  person.city === 'Rome'
);

console.dir(persons.filter(query));
```

```js
let a = [1, 2, 3, 4, 5, 6];
let b = a.filter(n => n % 2 === 0);
console.dir(b);
```

```js
let a = [1, 2, 3, 4, 5, 6];
let b = a.filter(function(n) {
  return n % 2 === 0;
});
console.dir(b);
```

```js
fs = require('fs');
fs.readFile('Intro.md', (err, data) => {
  console.log(data);
});
```

## Значения папаметров по умолчанию
Default parameter values

```js
function fn(a, b = 'Marcus') {
  console.log({ a, b });
}
fn(5);
fn(6, 'Mao Zedong')
fn(7, 'Victor Glushkov', 'Kiev');

let  max = (a, b, ...c) => {
  if (c.length === 0) return a > b ? a : b;
  else {
    let m = max(a, b);
    c.push(m);
    return max.apply(null, c);
  }
}

console.log(max(1,2));
console.log(max(1,2,3));
```

#Spread

```js
let name = 'Marcus';
let letters = [...name];
console.log(letters);
```

##Generators

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