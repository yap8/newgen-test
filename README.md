# Тестовое задание

## Описание алгоритма

- Создаётся чистая функция `filterCourses`, которая принимает два аргумента: `courses` и `range`.
- Аргумент `range` раскладывается на две переменные `minRange` и `maxRange` со значениями по умолчанию `0` и `Infinity`.
- Перебираем `courses` с помощью метода `filter`.
- Внутри коллбека присваиваем `min` и `max` минимальную и максимальную цену курса (`0` и `1000` - значения по умолчанию).
- Проверяем входит ли `min` в `maxRange`.
- Проверяем входят ли `min` и `max` в `minRange`.
- Возвращаем результат.
