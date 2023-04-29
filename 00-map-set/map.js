// new Map() – створює колекцію.
// map.set(key, value) – зберігає значення value за ключем key.
// map.get(key) – повертає значення за ключем; повертає undefined якщо key немає в колекції.
// map.has(key) – повертає true якщо key існує, інакше false.
// map.delete(key) – видаляє елемент по ключу.
// map.clear() – видаляє всі елементи колекції.
// map.size – повертає поточну кількість елементів.
const myMap = new Map([
  ['bill', 1],
  ['bob', 2],
]);

const dog = {};
myMap.set(dog, 'bill');
myMap.get(dog); //bill

myMap.set(undefined, 'qwerty');
myMap.set(undefined, '123');
myMap.set({}, 'qwerty123');

// console.log(myMap);
// console.log(myMap.size);
// console.log(typeof myMap);

// WeakMap має методи:
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

const myWeakMap = new WeakMap();

const bobObj = { name: 'Bob' };
myWeakMap.set(bobObj, 123);

console.log(myWeakMap);
console.log(typeof myWeakMap);
