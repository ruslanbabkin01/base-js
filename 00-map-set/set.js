// new Set(iterable) – створює Set, якщо аргументом виступає об’єкт-ітератор, тоді значення копіюються в Set.
// set.add(value) – додає нове значення до Set, повертає Set.
// set.delete(value) – видаляє значення з Set, повертає true, якщо value наявне в множині значень на момент виклику методу, інакше false.
// set.has(value) – повертає true, якщо value присутнє в множині Set, інакше false.
// set.clear() – видаляє всі значення множини Set.
// set.size – повертає кількість елементів в множині.
const set = new Set();

const ivan = { name: 'Іван' };
const petro = { name: 'Петро' };
const maria = { name: 'Марія' };
const value = 44;

set.add(value);
set.add(ivan);
set.add(petro);
set.add(maria);
set.add(ivan);
set.add(maria);

// console.log(set);
// console.log(set.size);
// console.log(typeof set);

// Як Set підтримує add, has і delete, але не підтримує size, keys() та ітерацію

const weakSet = new WeakSet();

const john = { name: 'John' };
const petro2 = { name: 'Петро' };
const bob = { name: 'Bob' };

weakSet.add(john);
weakSet.add(petro2);
weakSet.add(bob);

// console.log(weakSet);
// console.log(weakSet.has(john));
// console.log(typeof weakSet);
