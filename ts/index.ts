import { Course, Range } from './types';

// Список курсов
let courses: Course[] = [
  { name: 'Courses in England', prices: [0, 100] }, // от 0 до 100
  { name: 'Courses in Germany', prices: [500, null] }, // от 500
  { name: 'Courses in Italy', prices: [100, 200] }, // от 100 до 200
  { name: 'Courses in Russia', prices: [null, 400] }, // до 400
  { name: 'Courses in China', prices: [50, 250] }, // от 50 до 250
  { name: 'Courses in USA', prices: [200, null] }, // от 200
  { name: 'Courses in Kazakhstan', prices: [56, 324] }, // от 56 до 324
  { name: 'Courses in France', prices: [null, null] }, // любая цена
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1: Range = [null, 200]; // до 200
let requiredRange2: Range = [100, 350]; // от 100 до 350
let requiredRange3: Range = [200, null]; // от 200

// Решение
const filterCourses = (courses: Course[], range: Range): Course[] => {
  const minRange: number = range[0] || 0;
  const maxRange: number = range[1] || Infinity;

  return courses.filter((course: Course) => {
    const min: number = course.prices[0] || 0;
    const max: number = course.prices[1] || 1000;

    if (min <= maxRange && (min >= minRange || max >= minRange)) return true;
  });
};

// Результат
console.log(filterCourses(courses, requiredRange1));
console.log(filterCourses(courses, requiredRange2));
console.log(filterCourses(courses, requiredRange3));

// Дополнительное задание
const sortCourses = (courses: Course[], highToLow?: boolean): Course[] => {
  return courses.sort((courseA, courseB) => {
    const maxA: number = courseA.prices[1] || 1000;
    const maxB: number = courseB.prices[1] || 1000;

    const minA: number = courseA.prices[0] || 0;
    const minB: number = courseB.prices[0] || 0;

    return highToLow ? maxB - maxA : minA - minB;
  });
};

// Результат
// console.log(sortCourses(courses)); // от меньшего к большему
// console.log(sortCourses(courses, true)); // от большего к меньшему
