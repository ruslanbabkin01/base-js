// Object.assign() використовується для копіювання значень всіх власних властивостей,
//   що перераховуються, з одного або більше вихідних об'єктів в цільовий об'єкт.Після копіювання він повертає цільовий об'єкт.

// Object.assign(dest, [src1, src2, src3...]);
// Перший аргумент dest – це цільовий об’єкт, у який ми будемо копіювати.
// Наступні аргументи src1, ..., srcN (їх може бути скільки завгодно) – це вихідні об’єкти, з яких ми будемо копіювати.
// Він копіює властивості всіх вихідних об’єктів src1, ..., srcN у цільовийdest.
// Іншими словами, властивості всіх аргументів, починаючи з другого, копіюються в перший об’єкт.
// Виклик повертає dest.

const film = {
  title: 'Matrix',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
    friends: ['Aiden', 'Mason', 'Jimmy'],
  },
  salesplan: {
    mai: 182,
    june: 50,
  },
  // getTitle() {
  //   return this.title;
  // },
};

const newFilm = Object.assign({}, film);
const newFilm2 = _.cloneDeep(film);
const newFilm3 = structuredClone(film);
const newFilm4 = JSON.parse(JSON.stringify(film));

// console.log(newFilm);
console.log(film.salesplan === newFilm.salesplan); //true
console.log(film.salesplan === newFilm2.salesplan); //false
console.log(film.salesplan === newFilm3.salesplan); //false
// console.log(newFilm3);
