
// Block_2_HW_4-------------------------------------------------------------------------

// //Задание 1 
// //Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

let num1 = prompt('Введите 1-e число.');
let num2 = prompt('Введите 2-e число.');

const littleNum = function () {
    
    return num1 < num2 ? alert(num1) : alert(num2);
}

littleNum();

// //Задание 2
// //Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
let num = prompt('Введите 1-e число.');

const strNum = function () {
    
    return num % 2==0 ? alert('Число четное') : alert('Число не четное') ;
}

strNum();

//Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

//Способ 1
const stepenNum = (num) => {
    let result = num ** 2;
    console.log(result);
}
stepenNum(3);

//Способ 2
const stepenNum = () => {
    num = Number(prompt("Введите число."));
    let result = num ** 2;
    console.log(result);
}
stepenNum();

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.
function stepenNum() {
    let num = Number(prompt("Введите число."));
    console.log(num ** 2);
    return;
}
stepenNum();

//Задание 4
// Создайте функцию, которая:
// Спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

function question() {
    let year = Number(prompt("Сколько Вам годков?"));
    if (year > 0 && year <= 12) {alert('ПРивет друг.');}
    else if (year >= 13) {alert('Добро пожаловать.');}
    else {alert('Вы ввели неправильное значение.');}
        return;
    }
    question();

// //Задание 5
//Напишите функцию, которая на вход принимает 2 числа:
// Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и isNaN() помогут.)
//     Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
//     Если оба параметра — числа, то вернуть произведение данных чисел.
    function mult() {
        num1 = prompt("Введите 1e число.");
        num2 = prompt("Введите 2e число.");
        
        if (isNaN(num1) || isNaN(num2)) {
         alert('Одно или оба значения не являются числом.');
        }
            else  {
                return alert(num1 * num2);
            }
        }
        mult();

// // Задание 6


const checkNumber = () => {
    let number = Number(prompt("Введите число."));
     if (isNaN(number)) {
        alert('Переданный параметр не является числом.');
     } else {
        let mathOperation = number ** 3;
        return console.log(`${number} в кубе равняется ${mathOperation}`);
     }
}

checkNumber();

// //Задание 7
// // //Создайте объекты circle1 и circle2 со свойством 
// radius
// . У объектов должен быть методам 
// getArea
//  , которое возвращает площадь круга через радиус, а также 
// getPerimeter
//  , который возвращает периметр окружности.

const cicle1 = {
    radius: 4,
    getArea() { 
        let mathRadius = 3.1415926536 * cicle1.radius;
         return mathRadius; 
        },
    getPerimeter() {
        let mathPerimeter = 2 * cicle1.radius * 3.1415926536;
         return mathPerimeter; 
        }
    }
    
    const cicle2 = {
        radius: 8,
        getArea() { 
            let mathRadius = 3.1415926536 * cicle2.radius;
             return mathRadius; 
            },
        getPerimeter() {
            let mathPerimeter = 2 * cicle2.radius * 3.1415926536;
             return mathPerimeter; 
            }
        }
    
        console.log(cicle1.getArea());
        console.log(cicle1.getPerimeter());
    
        console.log(cicle2.getArea());
        console.log(cicle2.getPerimeter());
    
    
    
    