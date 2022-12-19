const grandpa = "Дедушка";
const rabbit = "Заяц";
const fox = "Лиса";
const FatherFrost = "Дед Мороз";
const SnowMaiden = "Снегурочка";

function kolobok(character) {
  switch (character) {
    case grandpa:
      return "Я от дедушки ушёл!";
      break;
    case rabbit:
      return "Я от бабушки ушёл!";
      break;
    case fox:
      return "Меня съели!";
      break;
  }
}

function newYear(character) {
  switch (character) {
    case FatherFrost:
      return `${FatherFrost}! ${FatherFrost}! ${FatherFrost}!`;
      break;
    case SnowMaiden:
      return `${SnowMaiden}! ${SnowMaiden}! ${SnowMaiden}!`;
      break;
  }
}
