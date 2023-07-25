//  Перевіряє чи можна сформувати заданий рядок S з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.
// Символи в P1 і P2 мають бути в тому самому порядку, що й у S.
// Приклад:  'radency' можна сформувати за допомогою 'rdnc’ та 'aey':
//   S:  r a d e n c y   = radency
// P1:  r    d    n c      = rdnc
// P2:    a    e       y   = aey

function stringChecker(s, part1, part2) {
  return !s
    ? !(part1 || part2)
    : (s[0] == part1[0] && stringChecker(s.slice(1), part1.slice(1), part2)) ||
        (s[0] == part2[0] && stringChecker(s.slice(1), part1, part2.slice(1)));
}

console.log(stringChecker('radency', 'rdnc', 'aey'));
console.log(stringChecker('radency', 'rdncc', 'aey'));
console.log(stringChecker('w27y7', '27', 'w7y'));
