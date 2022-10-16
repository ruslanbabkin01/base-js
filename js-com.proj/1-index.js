//Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = Number(prompt("Ведіть кількість хвилин"));
// // console.log( typeof time);

// let hours = time / 60;
// hours = Math.floor(hours);
// hours = String(hours).padStart(2, 0);

// // let minutes = time - hours * 60;
// let minutes = time % 60;
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

// Task-2_____________________________________

//Використовуючи функцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"

// const userInputInLowerCase = prompt("Яка офіційна назва JavaScript?").toLowerCase();

// console.log(userInputInLowerCase);
// const officialName = "ECMAScript".toLowerCase();

// // if (userInputInLowerCase === officialName) {
// //   alert("Вірно!");
// // } else {
// //   alert("Не знаєте? ECMAScript!");
// // }

// let message = "Не знаєте? ECMAScript!"
// message = userInputInLowerCase === officialName ? "Вірно!" : message;
// alert(message);

// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від  max  до min
// const max = 50;
// const min = 23;
// let sum = 0;
// for (let i = max; i > min; i-=1) {

//     if (i % 2 !== 0) {

//         continue;
//     }
//     sum += i;
// }
// console.log(sum);

//При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введене значення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.

// let number = Number(prompt("Введіть число"));
// let total = 0;

// while (number) {
//     total += number;
//     number = Number(prompt("Введіть число"));

// }
//     alert(total);
//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//Ввести ще раз і так далі.
//Цикл має запитувати число, доки відвідувач не
//введе число більше 100, або натисне кнопку
//Скасування в prompt
//Потрібно додати перевірку, що користувач вводить числа
// let number = prompt("Введіть число більше 100");
// while (number < 100 && number !== null) {
//   number = prompt("Введіть число більше 100");
// }
// console.log(`Ви ввели ${number}`);

// Task - 6

//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = "sdd";

// const firstLetter = string[0];

// const message = firstLetter === 'a' ? 'так' : 'ні';
// console.log(message);

// const string = 'aashgk';

// console.log(string.startsWith('a'));
// const message = string.startsWith('a') ? 'так' : 'ні';
// console.log(message);

// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 45;

// if (min > 0 && min <= 14) {
//   console.log("Перша четверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга четверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя четверть");
// } else if (min >= 45 && min < 60) {
//   console.log("Четверта четверть");
// } else {
//   console.log("Ми не потрапили в діапазон");
// }
