// // Block_HW_4-------------------------------------------------------------------------
// //тренировка 1 While
// let  i = 1;

// let n = Number(prompt('Сколько раз Вам сказать ПривуЭт?'));

// while (i <= n) {
//     alert('Привет');
//     i++
// }




// //тренировка 2 Do While
// let q
// do {
//     q = Number(prompt('Введите номер 5 для проверки'));
// } while (q !==5); 

// //тренировка 3 Break
// while (!isQueueEmpty) { // Пока очередь перед нами не пуста
// 	if (dontWantToWait) { // Если ждать надоело
// 		console.log("Вы устали ждать и покинули очередь.");
// 		break; // Прерываем ожидание и уходим
// 	}
// 	wait(); // Ждем
// }

// //тренировка 4
// while(true) { // запускаем бесконечный цикл,
//     // т.к. не знаем точной итерации на которой нужно будет выйти из цикла
//         const msg = prompt('Введите ваше сообщение'); // в переменную msg записываем
//         // сообщение введенное пользователем
//         console.log(msg); // выводим сообщение пользователя
//         if (msg === 'end') { // проверяем, сообщение введенное пользователем равно end
//             break; // если равно, то выходим из цикла
//         }
//     }

//повторил сам    
// while(true) {
//     let msg = prompt('Введите ваше что-то');
//     console.log(msg);
//     if (msg === 'end') {
//         break
//     }
// }

// //Тренировка  5
// let i = 0; // задаем начальное значение счетчика
// let sum = 0; // объявляем переменную, в которой будем хранить сумму
// while(i <= 10) { // проверяем, что счетчик меньше 10
// 	i++; // увеличиваем счётчик на 1
// 	if (i % 4 === 0) { // проверяем, что счётчик кратен 4
// 		continue; // если кратен, то код ниже выполнен не будет
// 	}
// 	sum += i; // увеличиваем сумму на текущий счётчик,
// 	// если i будет кратно 4, эта строка не выполится
// }

// console.log(sum); // 54




// //Тренировка 6
//Напишите программу, которая будет выводить в консоль сообщения пользователя, введенные через prompt, пока пользователь не введет 
//break. Если пользователь введёт в prompt continue, то в консоль ничего не нужно выводить, а пользователь должен продолжить вводить сообщения.


// while(true) {
//     const msg = prompt('Введите Ваше сообщение');
    
//     if (msg === 'continue') 
//     {
//    continue
//        }
//        console.log(msg);
// if (msg === 'break') {
// break
// }
// }

// //Тренировка 7

// let monthYear = 1;
// //Number(prompt('Введите номер месяца в году'));
// while (monthYear <=12) {
//     if (monthYear >=1 && monthYear <=2 || monthYear ===12) 
//         {console.log('Зима');}
//     else if (monthYear >=3 && monthYear <=5)
//         {console.log('Весна');}
//     else if (monthYear >=6 && monthYear <=8)
//         {console.log('Лето');}
//     else if (monthYear >=9 && monthYear <=11)
//         {console.log('Осень');}

//     monthYear++;
// }

// //Тренировка 8

// for(let monthNumber = 1; 
//     /* Объявляем переменную monthNumber, которая будет видна только в 
//     пределах нашего цикла */
//     monthNumber <= 12; 
//     /* Проверяем, что monthNumber соответствует номеру месяца 
//     (т. е. 0 < monthNumber <= 12 */
//     monthNumber++ 
//     // Увеличиваем переменную monthNumber на 1 для следующего шага
//     ) {
//         console.log(monthNumber);
//     }

// //Тренировка 9

// for (let monthYear = 1; monthYear <=12; monthYear++) {
//     if (monthYear >=1 && monthYear <=2 || monthYear ===12) 
//         {console.log('Зима');}
//     else if (monthYear >=3 && monthYear <=5)
//         {console.log('Весна');}
//     else if (monthYear >=6 && monthYear <=8)
//         {console.log('Лето');}
//     else if (monthYear >=9 && monthYear <=11)
//         {console.log('Осень');}
// }

// //Тренировка 10

// Объявляем переменную dayNumber, которая равна номеру дня в месяце
// let dayN = Number(prompt('Введите число месяца'));
// for (let dayNumber = dayN; dayNumber <= 31; dayNumber++) { 
//     // Каждый день проверяем, является ли он третьим (выходным)
//       if (dayNumber % 3 == 0) {
//       // Выводим сообщение
//           console.log("Сегодня отдыхаем!"); 
//       // Ждем следующий день
//           continue; 
//       }
//       console.log("Рабочий день, братец. Вот тебе план работ:..."); 
//     // Если проверка не прошла и день не выходной, выводим сообщение
//   }

// //Тренировка 11 isLeap в ХРОМЕ не работает !!!!

// let currentYear = 2021;
// for (let year = currentYear; ; year++) { 
// /* Мы создали еще одну переменную, куда передали значение из переменной 
// currentYear (так как не хотим модернизировать ее). */
// 	if (isLeap(year)) { 
//   /* С помощью вашего решения мы проверяем год. В данном примере 
//   используется проверка c помощью функции isLeap(), что такое функции
//   и как их реализовывать мы рассмотрим на следующем уроке. А пока
//   стоит знать, что isLeap() возвращает true, если год высокосный, и
//   false — если нет */
// 		console.log("Ближайшим високосным годом является: " + year);
// 		break; 
//      /* Если год найден, цикл можно остановить, так как не имеет смысла 
//         дальше его продолжать крутить. */
// 	}
// }
//-------------------------------------------------------------
// Интересный факт
// Цикл for и цикл while занимаются одним и тем же и «под капотом» превращаются в одни и те же инструкции. Вопрос выбора между for и while — вопрос удобства. Если переменная со счетчиком в цикле нужна и она меняется строго в конце итерации, удобнее for. Если переменная со счетчиком цикла не нужна или она может измениться в любой момент, то разработчики предпочитают while .

// // Задание 1
// //Вывести в консоль 2 раза слово привет

let i = 1;
let ne = 2;
while (i<=ne) {
    console.log('Привет');
    i++
}

for(i=1, ne=2; i<=n; console.log('Привет'), i++);

// //Задание 2
// //Вывести в консоль числа от 1 до 5

for(i=1, n=5; i<=n; i++) {console.log(i)};

// //Задание 3
// //Вывести в консоль числа от 7 до 22

for(i=7, n=22; i<=n; i++) {console.log(i)};

// //Задание 4
// //Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};
//console.log(obj.Коля);

for (key in obj) {console.log(key + " - зарплата " + obj[key] + " долларов")};

// //Задание 5
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.

let n = 1000;
let num = 0;
while(n>=50) {
       
    if(n>50) {
        n/=2;
        num++;
    }
    console.log(n);
    
} 
console.log('Количество итераций = ' + num);

// //Задание 6
// В вашей компании пятница является днем отчетным.
// Нам нужно написать программу, которая считает дни месяца по датам, определяет, какой день пятница, и выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.
// Условия задачи:
// Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).
// Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида:
// "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
// В нашем месяце 31 день. В результате у вас должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.


// for (let fr=5; fr <= 31;fr++) { 
//           if (fr % 7 == 0) {
//              console.log("Сегодня пятница " + (fr - 2) + " число. Необходимо сдать отчет!"); 
//               continue; 
//           }
//       }
let friday=5;
for( i=friday; i<=31; i+=7) 
{console.log(`Сегодня пятница ${i} - e число. Необходимо сдать отчет!`)}
    