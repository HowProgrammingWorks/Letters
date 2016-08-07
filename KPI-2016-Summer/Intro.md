# Летняя школа по Node.js в КПИ

## Вступительная лекция

Тимур Шемсединов  
НИИ Системных Технологий

Контакты по организационным вопросам:
- [github.com/tshemsedinov](https://github.com/tshemsedinov)
- [habrahabr.ru/users/marcusaurelius](https://habrahabr.ru/users/marcusaurelius/)
- timur.shemsedinov@gmail.com

Практику будут проводить:
- Тимур Шемсединов
- Алексей Орленко
- Дмитрий Нечай
- Влад Дзюба и другие

## Группы митапов

Группа [meetup.com/KievNodeJS](http://www.meetup.com/KievNodeJS/)
- Группа появилась 11 апреля 2014 года
- За это время было 6 митапов
- Собралось всего 852 человека

Группа [meetup.com/NodeUA](http://www.meetup.com/NodeUA/)
- Новая группа для более широкого сообщества
- Уже 251 человека

Чат на гиттере:  
https://gitter.im/nodeua/NodeJS

## КПИ и Node.js

Node.js введен в учебные курсы:
- Архитектура и проектирование программных систем (ФИВТ: АСОИУ, ВТ)
- Распределенные системы обработки данных (ТК)
- Архитектура корпоративных систем (ТК)
- Проектирование сетевых протоколов (ТК)

## Планы обучения для "Программной инженерии" по треку Node.js

Ссылка на программу:  
https://github.com/HowProgrammingWorks/Letters/tree/master/Docs/NODEJS

Экзаменационные вопросы по предмету "Архитектура и проектирование программного обеспечения"  
https://github.com/HowProgrammingWorks/Letters/tree/master/Docs/SOFTARCH

Учебные репозитории:
- Оргенизация: https://github.com/HowProgrammingWorks
- Письма студентам: https://github.com/HowProgrammingWorks/Letters

Примеры лабораторных работ:
- https://github.com/HowProgrammingWorks
- https://github.com/InversionOfControl
- https://github.com/AbstractionLayers
- https://github.com/NodeServer
- https://github.com/Metaprogramming
- https://github.com/WebsocketChat
- https://github.com/InterProcessCommunication
- https://github.com/EventDrivenProgramming

Репозитории технологического стека Metarhia, который разрабатывает наша команда:
- https://github.com/metarhia
- https://github.com/metarhia/Impress
- https://github.com/metarhia/MetaSync
- https://github.com/metarhia/JSTP
- https://github.com/metarhia/JSQL
- https://github.com/metarhia/GlobalStorage

## Еще ссылки

Несколько моих лекций по Node.js и докладов на конференциях тут:

- Архитектура программных систем на Node.js  
  https://www.youtube.com/watch?v=Try7lmWikao
- Вводная лекция по Node.js (с коллегами)  
  https://www.youtube.com/watch?v=0oIiPJtfUpw
- Примеры быстрой разработки API на масштабируемом сервера приложений  
  https://www.youtube.com/watch?v=f6McffaVq78

## Подготовка среды

Как установить Node.js и подготовить среду для разработки:

Все есть на первой странице https://nodejs.org/
Ставьте версию 6.3.1 (или последнюю на текущий момент) или вот тут лежат у меня скрипты установки для разных версий Ubuntu, Debian, CentOS

https://github.com/tshemsedinov/impress/tree/master/deploy

Скрипты, которые ставят полный набор, с MongoDB, Node.js, Impress и вспомогательные вещи.
Там есть варианты, из исходников и бинарные сразу.

Например, для установки на Ubuntu сразу бинарников:
```
sudo apt-get -y install build-essential openssl libssl-dev pkg-config python
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Обновить npm можно так: `sudo npm update npm -g`

## Основные темы для летней школы

1. Особенности мультипарадигменного программирования на JavaScript под Node.js: асинхронное программирование, прототипное и классовое наследование, событийное программирование, реактивное и функциональное программирование, метапрограммирование.
2. Техники программирования и библиотеки: использование итераторов, библиотека async, параллельная и последовательная коммутация вызовов, промисы, EventEmitter, асинхронное программирование через события.
3. Работа с файлами, файловыми потоками и буферами, обработка двоичных данных, шифрование.
4. Работа с сетью, основные понятия и библиотеки для работы с сокетами, протоколы для передачи гипертекста для ветхого веба, создание базовых TCP и UDP серверов, стриминг видео и аудио файлов.
5. Межпроцессовое взаимодействие, распределенные вычисления, многопользовательский чат, масштабирование серверов событий и чат-серверов, многопользовательские электронные таблицы.
6. Альтернативные подходы к коммуникации приложений, SPA, XMLHTTPRequest и AJAX, Websocket и Socket.io, Server Sent Events, альтернативный технологический стек Metarhia: JSTP, Impress, JSQL и GlobalStorage.
7. Метапрограммирование, техники программирования, используемые для метапрограммирования, примеры кода, вебсервер с использованием метапрограммирования, рефлексия, интроспекция, скаффолдинг.
8. Масштабирование приложений, проектирование систем без узких мест, классификация и выборов принципов балансировки, оптимизация коммуникаций и построение приватных вычислительных и коммуникационных облачных сервисов.

## Митапы NodeUA

1. Node.js как бекенд для игровых приложений (интерактивность, реактивность реального времени)  
сб 13 августа
2. Node.js как бекенд для мобильных приложений (API, RPC, MQ, уведомления)  
сб 20 августа
3. Node.js как бекенд для корпоративных приложений (базы данных, безопасность, надежность, интеграция)  
дата уточняется

##Расписание

Расписание на август  
2016 https://github.com/HowProgrammingWorks/Letters/blob/master/KPI-2016-Summer/Meetings.md
