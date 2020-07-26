// 1. Предположим, есть страница, на которой всего одно поле:

// <style>.red {color: red;}</style>
// <input type="text" name="name" id="name_input" value="Xxxx">

// Задача: без хардкода и без использования глобальных переменных
//  написать скрипт, который при вводе данных в поле будет 
//  добавлять ему класс red, если его текущее значение поля 
//  не совпадает с изначальным, и удалять этот класс, если 
//  значения совпадают


const inputChangeColor = document.getElementById("name_input");

inputChangeColor.onchange = () => {
  inputChangeColor.value === "Xxxx" ?
    inputChangeColor.classList.remove("red") :
    inputChangeColor.classList.add("red");
}