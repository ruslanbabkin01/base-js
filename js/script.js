// const result = prompt('Какое официальное название JavaScript?');

// console.log(result);

// if (result === 'ECMAScript') {
//     console.log('Все вірно!');
// } else {
//     console.log('He вірно! Подумай ще!');
// }

/////////////////////////////////

// const hour = 15;
// // const minutes = 25;
// const minutes = 0;

// let result;

// if (minutes > 0) {
//     result = `${hour} г. ${minutes} хв.`;
// } else {
//     result = `${hour} г.`;
// }

// console.log(result);

/////////////////////////////////

// const number = prompt('Введи число');

// if (parseInt(number) > 0) {
//     console.log('Це додатнє число!');
// } else if (parseInt(number) < 0) {
//     console.log('Це відʼємне число!');
// } else if (parseInt(number) === 0) {
//     console.log('Це нуль!');
// } else {
//     console.log('Ми ж просили число ввести!');
// }

////////////////////////////////

// // const a = 101;
// const a = 100;
// const b = 202;
// // const b = 50;

// if (a > 100 && b > 100) {
//     // Case 1
//     // if (a > b) {
//     //     console.log(a);
//     // } else {
//     //     console.log(b);
//     // }

//     // Case 2
//     // const max = a > b ? a : b;
//     // console.log(max);

//     // Case 3
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }

//////////////////////////////

// let link = 'https://my-site.com/about/';

// if (!link.endsWith('/')) {
//     link = `${link}/`;
// }

// console.log(link);

////////////////////////////////

// // let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
//     link = `${link}/`;
// }

// console.log(link);

/////////////////////////////////

// let link = 'https://my-site.com/about';

// const result = !link.endsWith('/') ? `${link}/` : link;

// console.log(result)

//////////////////////////////////

// const hours = 33;

// if (hours < 17) {
//     console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//     console.log('Expires');
// } else if (hours < 30) {
//     console.log('Overdue');
// } else {
//     console.log(" To match ");
// }

//////////////////////////////////

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//     console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Післязавтра');
// } else {
//     console.log('Дата в майбутньому');
// }

/////////////////////////////////

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//     case 0: {
//         console.log('Сьогодні');
//         break;
//     }

//     case 1: {
//         console.log('Завтра');
//         break;
//     }

//     case 2: {
//         console.log('Післязавтра');
//         break;
//     }

//     default: {
//         console.log('Дата в майбутньому');
//     }
// }

////////////////////////////////////////

// const daysUntilDeadline = 'Сьогодні';

// switch (daysUntilDeadline) {
//     case 'Сьогодні': {
//         console.log('Кількість днів 0');
//         break;
//     }

//     case 'Завтра': {
//         console.log('Кількість днів 1');
//         break;
//     }

//     case 'Післязавтра': {
//         console.log('Кількість днів 2');
//         break;
//     }

//     default: {
//         console.log('Можна ще нічого не робити');
//     }
// }

///////////////////////////////////

// const max = 100;
// const min = 20;

// for(let i = min; i <= max; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

//////////////////////////////////

// let user;
// let password;

// do {
//     user = prompt('Введи логін');

//     if (user === 'Админ') {
//         password = prompt('Введи пароль');

//         if (!password) {
//             console.log('Отменено');
//         } else if (password !== 'Я админ') {
//             console.log('Я вас не знаю');
//         } else {
//             console.log('Здравствуйте!');
//         }
//     }
// } while (user !== 'Админ' && password !== 'Я админ');

///////////////////////////////////

// const a = 'Lol';

// console.log(a);

// if (true) {
//     console.log(a)
// }

//////////////////////////////////


// function foo () {
//     const a = 'Lol';

//     console.log(a);
// }

// console.log(a)

// foo();

////////////////////////////////

// if (true) {
//     const a = 'Lol';
// }

// console.log(a)

////////////////////////////////

// function foo () {
//     var a = 'Lol';

//     // console.log(a);
// }

// console.log(a)

// foo();

/////////////////////////////////

// var a;

// if (true) {
//     a = 'Lol';
// }

// console.log(a)

// hoisting


// const min = 10;

// console.log('min number - ', min)




////////////////////////

// const BLACK_HEX = '#000';

// const userName = prompt('Введите имя');


//////////////////////////


// const userName = prompt('Enter user name') || 'Unknown';

// console.log(userName)

// let i = 1;

// console.log(i++)
// console.log(i)

// console.log(i+=4)

// console.log(++i);

// const foo = () => {}
