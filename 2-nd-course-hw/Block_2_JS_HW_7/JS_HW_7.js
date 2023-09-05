
///////////////////////////////////---------7 урок начало-----------///////////////////////////


// function myFunction(v, w, x, y, z) {
    
// }
// var args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);
// console.log(myFunction(args));

// const ser1 = [1, 2, 3];
// const ser2 = [9, 8, 7];
// const allSer = [...ser1, 'i love JS',...ser2];
// console.log(allSer);

// let newMass = [].concat(allSer);
// newMass.push('accelent JS');
// newMass.unshift('start mass JS');
// console.log(newMass);

// function byPizza(price, ...rest) { // нахожу стоимость заказа пиццы посетителями
//     return rest.map((quant) => {
//         return price * quant;
//     });
// };

// byPizza(500, 3, 4, 1, 2);
// console.log(byPizza(100,1,2,3));


        // // trening 1 .....................................toLowerCase()

// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает.');
// const answer = 'мороз';
// if (answerUser.toLowerCase() === answer.toLowerCase()) {
//     alert ('Это правильный ответ.')
// } else { alert ('Не угадали.')}

        // // trening 2 .....................................indexOf()

// const str = 'Поезд едет далеко';
// str.indexOf('едет'); //6 совпадение найдено с 6го индекса
// str.indexOf('едит'); //вернет -1 т.к. совпадений не найдено


        // // trening 2 .....................................includes(substr, pos)

// const product = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';

// product.forEach((product) => {
//     if (product.toLowerCase().includes(search.toLowerCase())) {
// console.log(product);
//     }
// }
// );

// // trening 3 .........................str.startsWith и str.endsWidth

// const product = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';

// product.forEach((product) => {
//    if (product.toLowerCase().startsWith(search.toLowerCase())) {
//     console.log(product);
//    }
// });

// // trening 4 .........................split('').reverse().join('') !!!!!!!!!!!!!!!!!!!!

// function palindrom(word) {
//     return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
// }
// //palindrom('мим'); // true
// palindrom('мак'); // false
// // palindrom('заказ'); // true


// //trening 5 
// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья - 0
        //const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// создадим массив, где будем хранить названия месяцев на русском
        //const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        //"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        // let myDate = new Date(); // здесь мы получаем текущую дату
        // let fullDate = "Сегодня: " + myDate.getDate() + // getDate возвращает число
        // " " + months[myDate.getMonth()] + 
// getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
        //" " + myDate.getFullYear() + 
// getFullYear возвращает год
        //", " + days[myDate.getDay()]; 
// getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

        // console.log(fullDate); 
// Сегодня: 1 Февраль 2023, Среда





        // //Zadacha 1 ---------------------------------------------------------
        // Преобразуйте строку js в верхний регистр JS.
let up = 'js';
up = up.toUpperCase();
console.log(up);


        // //Zadacha 2----------------------------------------------------------
        // Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

const array = ['Кошка', 'Кит', 'Комар', 'Носорог']
const search = 'ко'

function searchStart (array, str){

    return array.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}  
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');


        // //Zadacha 3
        // Округлите число 32.58884:
        // До меньшего целого
        // До большего целого
        // До ближайшего целого

let num = Number(32.58884);
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

        // //Zadacha 4
        // Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

       // //1 способ........
let num = [52, 53, 49, 77, 21, 32];
console.log(Math.max.apply(null, num));
console.log(Math.min.apply(null, num));

        // //2 способ........
let num = [52, 53, 49, 77, 21, 32];
Math.max(...num);
Math.min(...num);


        // //Zadacha 5
        // Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
function num(numMin, numMax) {
    return Math.random() * numMax;
}
num(1, 10);

        // //Zadacha 6 --------------------------------------------
        // Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных         целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

function startMass (array) {
let newMass = [];
for ( let i = 0; i < Math.floor(array/2); i++) {

    newMass.push(Math.floor(Math.random()*array));  
}
return newMass;
}

startMass(7); // [6, 2, 7]


        // //Zadacha 7
        // Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
function num(numMin, numMax) {
    return Math.round(Math.random() * numMax);
}
num(1, 10);

        // //Zadacha 8
        // Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
let day = new Date();
console.log(day);

        // //Zadacha 9
        // // Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после      текущей.

let currentDate = new Date();
let currentDateNew = (+currentDate);
 console.log(currentDate);
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let days73 = 73 * 24 * 60 * 60 * 1000;
let serchDate = currentDateNew + days73;
        // console.log(currentDate);
        // console.log(days73);
let next73 = new Date(serchDate);
console.log(next73);

            // //Zadacha 8
            // Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
            // Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
            /* Время: <часы>:<минуты>:<секунды> */
            /* Время, которое будет выведено, также хранится в объекте Date. */


function convertformat(){
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let curr_dt = new Date()
let form_dt = "<" + curr_dt.getDate() +"> " + "<" + months[curr_dt.getMonth()] + "> " + "<" +curr_dt.getFullYear() +"> " + "- " + "это " + "<" + days[curr_dt.getDay() + ">"];
let form_tm = "<" + curr_dt.getHours() + ">:<" + curr_dt.getMinutes()+">:<" + curr_dtgetSeconds() +">";
return [form_dt, form_tm];

  }
//console.log(`Дата: ${convertformat()}`); -- как тут выводить form_dt не знаю
//console.log(`Время: ${convertformat.form_tm()}`); а тут form_tm

///////////////////////////////////---------7 урок КОНЕЦ-----------///////////////////////////