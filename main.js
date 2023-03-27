// Получаем ссылки на изображения шестеренок
const gear1 = document.getElementById("gear1");
const gear2 = document.getElementById("gear2");
const gear3 = document.getElementById("gear3");

// Устанавливаем скорость вращения шестеренок
let gear1Speed = 1;
let gear2Speed = -2;
let gear3Speed = 3;

// Функция для вращения шестеренок
function rotateGears() {
  gear1.style.transform = `rotate(${gear1Speed}deg)`;
  gear2.style.transform = `rotate(${gear2Speed}deg)`;
  gear3.style.transform = `rotate(${gear3Speed}deg)`;

  gear1Speed += 1;
  gear2Speed -= 2;
  gear3Speed += 3;

  // Задержка для снижения нагрузки на процессор
  setTimeout(rotateGears, 50);
}

rotateGears();

// Массив символов Майя для вывода
const mayanSymbols = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

// Функция для вычисления символа Майя на основе выбранной даты
function getMayanSymbol(date) {
  const daysInTzolkinCycle = 260;
  const symbolIndex = (date.getDay() + date.getMonth() * 20) % daysInTzolkinCycle;
  return mayanSymbols[symbolIndex % mayanSymbols.length];
}

// Получаем элемент, куда будем выводить символ Майя
const mayanSymbolElement = document.getElementById("mayan-symbol");

// Получаем текущую дату
const currentDate = new Date();

// Выводим символ Майя для текущей даты
mayanSymbolElement.textContent = getMayanSymbol(currentDate);
