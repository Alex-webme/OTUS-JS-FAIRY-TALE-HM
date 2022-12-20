const grandpa = "Дедушка";
const rabbit = "Заяц";
const fox = "Лиса";
const FatherFrost = "Дед Мороз";
const SnowMaiden = "Снегурочка";

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
    case FatherFrost:
      return `${FatherFrost}! ${FatherFrost}! ${FatherFrost}!`;
    case SnowMaiden:
      return `${SnowMaiden}! ${SnowMaiden}! ${SnowMaiden}!`;
  }
}

console.log(kolobok(fox));
console.log(newYear(FatherFrost));
