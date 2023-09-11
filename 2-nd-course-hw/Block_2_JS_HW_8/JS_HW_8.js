        // //terning ---------------------------------------


// function funWithCallback(callback) {
//     callback("Artem", "Katkov");
// }
// funWithCallback((nam, surname) => {
//     console.log(`Privet ${nam} ${surname}`);
// })

    
// //trening -----------------------------------------------------
// допишите тело функции так, чтобы код ниже вывел в консоль 1 2 5.

        // function callbackWithArrayLength(arr, callback) {
        //     // console.log(arr);
        //     /* Писать код тут */
        //     callback(arr.length);
        //   }
          
        //   callbackWithArrayLength([1], (length) => {
        //     console.log(length);
        //   });
          
        //   callbackWithArrayLength([1, 1], (len) => {
        //     console.log(len);
        //   });
        //   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
        //     console.log(l);
        // });

        // //trening-----------------------------------
        // Колбэк может быть вызван внутри функции несколько раз. Исправьте код функции each, чтобы в консоль выводились не индексы элементов в массиве, а сами элементы массива. То есть «Глеб», «Олег» и так далее.



// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i]);
//     }
//   }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);



            ////trening---------------------------------
    
    // function first(param) {
    //     alert(`Privet ${param}`);
    // }
    // param('JS');

            ////trening----------------------------------

    // function first(param, callback) { // добавил в параметр колбэк функцию
    //     alert(`Privet ${param}`);
    //     callback();
    // } // появился 1-й алерт Privet JS
     
    //         first('JS', function() {
    //             alert('Super JS');
    //         }); // появился 2-й алерт Supeg JS


            //// trening------------------------------------

// function first(predmet, callback) {
    // alert(`Учи хорошо ${predmet}`);
    // callback();
// }
// function two(predmet, callback) {
    // alert(`Что ты делаешь? Учишь ${predmet}?`);
    // callback();
// }
// function tri() {
    // console.log('Так держать, салага');
// }
// 
// first('JS', tri);
// two('c#', tri);
        
        //// trening ------------------------------------
//вызываем таймер deadline и он НЕ ОСТАНАВАЛИВАЕТСЯ
    // const timer = (deadline) =>{//
        // setInterval(() => {
            // console.log(deadline);
        // }, 1000);
        // };
        // timer(3);


//вызываем таймер deadline и он сразу очищается----------------------------------
        // const timer = (deadline) => {
        //     const interval = setInterval(() => {
        //         console.log(deadline);
        //     }, 1000);
        //     clearInterval(interval);
        // };
        // timer(3); // таймер deadline вызывается но не останавливается


// теперь сделаем - таймер deadline останавлявается после трех вызовов
        // const timer = (deadline) => {
        //     const interval = setInterval(() => {
        //         console.log(deadline);
        //     }, 1000);
        //     setTimeout(() => {
        //         clearInterval(interval);
        //         console.log('Время истекло!');
        //     }, deadline *1000)
        // };
        // timer(3); // таймер deadline останавлявается после трех вызовов


        //ЗАДАЮ КОНКРЕТНОЕ ЗНАЧЕНИЕ ВЫХОДА ИЗ ТАЙМЕРА -----------------------------
// const timer = (deadline) => {
   
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//  console.log(time);       
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('end time');
//     }, deadline * 1000)
// };
// timer(3);

        // ЗАДАЮ ЗНАЧЕНИЕ ВЫХОДА ИЗ ТАЙМЕРА ИЗ ПРОМПТА---------------------------
// const timer = (deadline) => {
//     if (isNaN(+deadline)){
// console.log('Передано некорректное число');
// return;
//     }

//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//  console.log(time);       
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('end time');
//     }, deadline * 1000)
// };

// const deadline = prompt('Нас колько секунд вы хотите поставить таймер?');
// timer(deadline);

                // trening -----------------------------------------

// const my_array = ["hello", "new", "old", "first"];
// new_array = my_array.map(function(item, i, arr) {
//     return item+" 23";
// });
// console.log("новый массив: "+ new_array);
 
                // trening -----------------------------------------

// const my_array = ["hello", "new", "old", "first"];
// new_array = my_array.map(function(item, i, arr) {
//    new_array = item+" 23";
//    return new_array;
// });

// console.log(new_array);



                ////trening------------------------------------------

// function now() {
//     return 21;    
// }

// function later() {
//     answer = answer * 2;
//     console.log("Now year: ", answer);
// }

// var answer = now();
// setTimeout(later, 2000);


            // //trening-------------------------------------------------------------
// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);









        // ZADACHA 1 --------------------------------------------------------------
        // С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 // Допишите колбэк для sort, изучите, как работает колбэк, в документации
 console.log(people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    }
        if (a.age < b.age) {
            return -1;
        }
            return 0;
 }));

            ////Zadacha 2-----------------------------------------------------------------

    // Реализуйте функцию filter, которая должна работать аналогично методу массива filter. За основу возьмите функцию map, которую мы реализовывали на уроке. Чтобы из функции map  сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:

    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];

        function isPositive(element) {
               return element >= 0;
            }

        function isMale(element) {
            return element.gender === 'male';
            }
            
        function filter(arr, ruleFunction) {
           let result = [];
           arr.map(item => {
            if (ruleFunction(item)) {
                result.push(item);
                                    }
                                }
                            );
                return result;
                        }
            
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


                //// Zadacha 3-------------------------------------------
                // Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».


const timer = (deadline) => {

    let time = deadline;
    console.log(time);
    const interval = setInterval(() => {
        time -= 1;
 console.log(Date());       
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Прошло 30 секунд');
    }, deadline * 1000)
};
timer(30);


            //// Zadacha 4-------------------------------------------
            // Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
            // Допишите функцию delayForSecond  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout

 function delayForSecond(callback) {
       setTimeout(() => {
     callback()
  }, 1000)
 }

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

            //// Zadacha 5-------------------------------------------
            // Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке: 
            // Привет, Глеб!
            // Прошла одна секунда
            // Правильный порядок:

            // Прошла одна секунда
            // Привет, Глеб!
            // Исправьте код, чтобы он выводил сообщения в правильном порядке:
    
            // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));

