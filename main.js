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
