/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // user.mood = 'happy';
// // user["mood"] = 'happy'

// const userMood = "mood";

// user[userMood] = 'happy';

// // user.hobby = "skydiving";
// user['hobby'] = "skydiving";

// user.premium = false;
// // console.log(user);

// const userKeys = Object.keys(user);
// // console.log(userKeys);

// for (const key of userKeys) {
//   // console.log(key);
//   // console.log(user[key]);
//   console.log(`${key}:${user[key]}`);
// }

// Task 2 - 2
/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть метод об'єкта для підсумовування всіх зарплат та збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const totalSalaries = arr => {
//   const values = Object.values(arr);
//   let sum = 0;
//   for (const value of values) {
//     sum += value;

//   }
//   return sum;
// }
// console.log(totalSalaries(salaries));

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок
 під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
//   { name: 'Смарагд', price: 1300, quantity: 4 }
// ];

// const calcTotalPrice = (stones, stoneName) => {
//   let totalPrice = 0;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       console.log(stone);

//       totalPrice += (stone.price * stone.quantity);

//     }

//   }
//     return totalPrice
// }

// console.log(calcTotalPrice(stones, 'Смарагд' ));

//4. Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator.read(5, 10));
// console.log(calculator.sum());

// // Створення масиву значень Фаренгейта із масиву значень Цельсія
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// let fahrenheit = celsius.map((t) => t * 1.8 + 32);
// console.log();\

//Знайти унікальні елементи за допомогою reduce
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// const unityNumbers = numbers.reduce((acc, number) => {
//   if (!acc.includes(number)) {
//     acc.push(number);
//   }

//   return acc;
// }, []);
// console.log(unityNumbers);
// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// const unityNumbers = numbers.reduce(
//   (acc, number) => (acc.includes(number) ? acc : [...acc, number]),
//   []
// );
// console.log(unityNumbers);

//Потрібно перевірити "same" масиви
// числа з першого в квадраті
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// function sameAray(aray1, aray2) {
//   console.log(aray1);
//   console.log(aray2);
//   if (aray1.length !== aray2.length) {
//     console.log("не однакові");
//     return;
//   }
//   const sqrAray2 = aray2.map((number) => Math.sqrt(number));
//   console.log(sqrAray2);
//   const sortedAray1 = aray1.sort((a, b) => a - b);
//   const sortedAray2 = sqrAray2.sort((a, b) => a - b);
//   for (let i = 0; i < sortedAray1.length; i++) {
//     if (sortedAray1[i] !== sortedAray2[i]) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(sameAray(a, b));


// Tusk2-7
// ? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
// ? по збільшенню значення властивості amount.
// */

const cars = [
{
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const sortByAscendingAmount = cars => {
  
//   return [...cars].sort((a, b) => a.amount - b.amount);
// }

// console.table(sortByAscendingAmount(cars));


// task_2-8___________________________
/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return [...cars].sort((a, b) => a.model.localeCompare(b.model))
    
//   }
//   if (order === 'desc') {
//     return [...cars].sort((a, b) => b.model.localeCompare(a.model))
    

//   };
// };
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));



const sortByModel = (cars, order) => {
  // if (order === 'asc') {
  //   return [...cars].sort((a, b) => a.model.localeCompare(b.model))
    
  // }
  // if (order === 'desc') {
  //   return [...cars].sort((a, b) => b.model.localeCompare(a.model))
    

  // };

  // console.log(order !== 'asc');
  // console.log(order !== 'desc');

  if (order !== 'asc' && order !== 'desc') {
    
    return;
  }
  
  return [...cars].sort((a, b) => {
return order === 'asc'? a.model.localeCompare(b.model):b.model.localeCompare(a.model)
})



};
console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));