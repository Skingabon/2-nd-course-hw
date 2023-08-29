




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

// //Trening 8  метод FILTER()-------------------------------------
// // Необходимо отфильтровать значения массива, чтобы остались только чётные значения. Результат фильтрации присвоить переменной even.

// const arr = [3,5,8,2,9,10];
// const even = arr.filter(el => el % 2 === 0);

// //Trening 9 метод MAP()---------------------------------------
// // Дан массив, содержащий список зарплат:
// // Необходимо в массив tax записать какой налог будет уплачен с каждой заработной платы, налог 13%.

// const salary = [45000, 39000, 105000, 76000, 77000];
// const tax =salary.map(el => el * 0.13)

// //Trenning 10 метод REDUCE()-------------------------------------
// берет первые два елемента с складывает их (или какая там опереция математическая указана) затем рещультат складывает с третим элементом массива , заче результат с четвертым элементом и т.д.

// const arr = [1, 2, 3, 4];
// const result = arr.reduce((intermediate, value => intermediate + value));
// console.log(result);

// //Trening 11 Перебор элементов массива----------------------------------------

// let products = ['Кресло', 'Стул', 'Стол'];
// for (let item of products) {
//     console.log(item);
// }

// //Trening 12 ПЕРЕБОР МНОГОМЕРНЫХ МАССИВОВ, что бы найти все элементы многомерного массива
// let arr = [
//     [1, 2],
//     [3, 4]
// ];
// for (let arrIn of arr) {// где arrIn - это элемент массива [1, 2] и [3, 4]
//     for (let element of arrIn) {// где element - элементы дочерних масивов 1, 2 и 3, 4
//     console.log(element);
//     }
// }
// //---------------------------------------------------------
// let studentsData = [['Андрей', 24], ['Настя', 23],];

// // перебираем элементы массива studentsData
// studentsData.forEach((student) => {
//     student.forEach((data) => {
//         console.log(data);
//     });
//     console.log(student);
// });

// //----------------------------------------------------------
// let studentsData = [['Андрей', 24], ['Настя', 23],];

// for (let i of studentsData) {
//   for (let j of i) {
//     console.log(j);
//   }

// }

// //-----------------------------------------------------------
// let studentsData = [['Андрей', 24], ['Настя', 23],];

// // проходим по элементам «внешнего» массива
// for(let i = 0; i < studentsData.length; i++){

//     // вычисляем длину «внутреннег» массива
//     let innerArrayLength = studentsData[i].length;
    
//     // проходим по элементам «внутреннего» массива
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }

// //------------------------------------------------------------
// function multiplyAll(arr) {
//     // let product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//       }
//     }
//     // Only change code above this line
//     // return product;
//   }
  
//   multiplyAll([[1,2],[3,4],[5,6,7]]);










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
////Дан массив чисел: [1, 3, 5, 10, 20].
//// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// let arr = [1, 3, 5, 10, 20];
// let str = arr.join(' ');
// console.log(str);

// //Zadacha 4-------------------------------------
//// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

let arr = [];
    arr[0] = [];
    arr[1] = [];
    arr[2] = [];
for (let i = 1; arr.length <= 3; i++){
    arr[i].unshift(1);
}
// arr = arr.concat([2, 2, 2]);
console.log(arr);



// let arr = [[1, 3, 7], [5, 10, 6], [7, 20, 4]];
// console.log(arr);

// //Zadacha 5-------------------------------------
// Дан массив: [1, 1, 1]
// Добавьте в конец массива значения 2, 2, 2.

// 1й вариант ----
// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// 2й вариант ----
// let arr = [1, 1, 1];
// arr = arr.concat([2, 2, 2]);
// console.log(arr);


// //Zadacha 6 -----------------------------------
//// Дан массив: [9, 8, 7, 'a', 6, 5] 
//// С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

//// pop - удаляет последний
//// push - добавляет в конец
//// unshift - добавляет в начало
//// shift - удаляет первый

// let arr = [9, 8, 7, 'a', 6, 5];
// arr = arr.sort();
// arr.pop();
// console.log(arr);


// //Zadacha 7 -----------------------------------
//// Дан массив: [9, 8, 7, 6, 5]
//// Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».

// const arr = [9, 8, 7, 6, 5];
// let num = Number(prompt('Угадайте ка число, которое я загадал.')); 
// let ok = arr.find(el => el == num)
//     if (ok == num) {
//         alert('Надо же, Вы угадали!');
//     } else {alert('Повезет другому.')};
