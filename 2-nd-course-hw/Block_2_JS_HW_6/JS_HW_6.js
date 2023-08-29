// //Тренировка 1

// const numbs = [2, 4, 5, 6, 8];

// console.log(numbs[0]); // 2
// console.log(numbs[1]); // 4
// console.log(numbs[2]); // 5
// console.log(numbs[3]); // 6
// console.log(numbs[4]); // 8



// // Trening 2
// const numbs = [2, 4, 6];
// for (let i = 0; i <numbs.length; i++) {
//     console.log(numbs[i]);
// }


// // Trening 3
// const numbs = [2, 4, 6, 8];
// numbs.forEach((elle) => {
//     console.log(elle);
// });



// //Trening 4
// const numbs = [2, 4, 6, 8];
// numbs.forEach((elle, index) => {
//     console.log(`${index}: ${elle}`);
// });


// //Trening 5 
// const numbs = [2, 4, 6, 8];
// numbs.forEach((elle, index, arr) => {
//     console.log(`${index}: ${elle}, массив ${arr}`);
// });


// //Trening 6

// Ошибка - Нужно спользовать цикл FOR
//const numbs = [2, 4, 6, 8, 12, 10, 15];
// numbs.forEach((elle) => {
//     if (elle == 10) break;
//     console.log(elle);
// });


// //Находим элемент массива = 10 и останавлиавемся.-------------------
    // const numbs = [2, 4, 6, 8, 10, 12];

    // for (let i = 0; i < numbs.length; i++) {
    //     if (numbs[i] ==10) break;
    //     console.log(numbs[i]);
    // }

// //Trening 7
// let word = 'привет=как=дела';
// word = word.split('=');
// // console.log(word);

// // word = word.sort();
// // console.log(word);

// word = word.join(' ');
// console.log(word);




//  //Zadacha 1--------------------------------
//     Дан массив: 
// [1, 5, 4, 10, 0, 3].
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i]==10) break;
//         console.log(numbs[i]);
// }

//  //Zadacha 2-------------------------------
// Дан массив: 
// [1, 5, 4, 10, 0, 3].
// Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.

// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs.indexOf(4));

// //Zadacha 3------------------------------------
//Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

let arr = [1, 3, 5, 10, 20];
let str = arr.join(' ');
console.log(str);

// numbs = numbs.join(' ');
// console.log(numbs);
