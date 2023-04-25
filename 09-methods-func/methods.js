// foo.call(obj, arg1, arg2, ...)
// Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj,
// а також передасть аргументи arg1, arg2 тощо.
function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: 'Манго',
};
const poly = {
  username: 'Полі',
};

greetGuest.call(mango, 'Ласкаво просимо'); // Ласкаво просимо, Манго.
greetGuest.call(poly, 'З прибуттям'); // З прибуттям, Полі.

// Метод apply - це аналог методу call за винятком того, що синтаксис передачі аргументів вимагає не перерахування,
//   а масив, навіть якщо аргумент всього один.
// foo.call(obj, arg1, arg2, ...)
// foo.apply(obj, [arg1, arg2, ...])

// Метод apply викличе функцію foo таким чином, що в this буде посилання на об'єкт obj,
// а також передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango2 = {
  username: 'Манго',
};
const poly2 = {
  username: 'Полі',
};

greetGuest.apply(mango2, ['Ласкаво просимо']); // Ласкаво просимо, Манго.
greetGuest.apply(poly2, ['З прибуттям']); // З прибуттям, Полі.

// Метод bind()
// Методи call і apply викликають функцію «на місці», тобто відразу.Але у разі колбек - функцій,
//   коли необхідно не відразу викликати функцію, а передати посилання на неї, причому з прив'язаним контекстом, використовується метод bind.
// foo.bind(obj, arg1, arg2, ...)

// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо.
// Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Полі'); // "Полі, ласкаво просимо в «Gmail»."
