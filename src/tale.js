const grandpa = "Дедушка";
const rabbit = "Заяц";
const fox = "Лиса";
const fatherFrost = "Дед Мороз";
const snowMaiden = "Снегурочка";

function kolobok(character) {
  switch (character) {
    case grandpa:
      return "Я от дедушки ушёл!";
    case rabbit:
      return "Я от бабушки ушёл!";
    case fox:
      return "Меня съели!";
  }
}

function newYear(character) {
  switch (character) {
    case fatherFrost:
      return `${fatherFrost}! ${fatherFrost}! ${fatherFrost}!`;
    case snowMaiden:
      return `${snowMaiden}! ${snowMaiden}! ${snowMaiden}!`;
  }
}

console.log(kolobok(fox));
console.log(newYear(fatherFrost));
