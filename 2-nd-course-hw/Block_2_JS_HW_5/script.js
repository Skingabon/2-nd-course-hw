function myFunction() {
// 1 вариант пробывал логику - предлагаем юзеру угадать в каком месяце в году зима, угадал - предлагаем угадать в каком месяйце в году весна и так далее пока все сезоны не угадает и в конце босусный стих ему. Ну не справился на скорую руку. 


//let month = Number(prompt('Привет. Угадай в каком по счету месяце зима.'));

// if (month === 12 || month >= 1 && month <=2) 
//         {
// let da = confirm(`Верно, угадаешь в каком по счету месяце весна, а ?`);
//         } 
//         else {let error = confirm(`Попробуешь еще раз?`); 
//             } error ? myFunction() : alert("Всего хорошего. Возвращайся.")
// -----------------------------------------
// let start = confirm(`Готов?`);
// console.log(start);
// if (start = false) 
// return; else

// { 
// while(true) {
//     const msg = Number(prompt('Угадай в каком по счету месяце зима?'));
    
//     if (msg === 'continue') 
//     {
//    continue
//        }
//        console.log(msg);
// if (msg === 12 || msg >= 1 && msg <= 2 ) {let da = confirm(`Верно, угадаешь в каком по счету месяце весна, а ?`);
// // break
// }}} 
//---------------------------------------------
let monthYear = Number(prompt('Угадай в каком по счету месяце зима.'));
while(true) {
    if (monthYear >=1 && monthYear <=2 || monthYear ===12) 
        {return alert('Ты совершенно прав. Это - Зима');}
    else if (monthYear >=3 && monthYear <=5)
        {return alert('Подумай лучше, это же Весна');}
    else if (monthYear >=6 && monthYear <=8)
        {return alert('Подумай лучше, это же Лето');}
    else if (monthYear >=9 && monthYear <=11)
        {return alert('Подумай лучше, это же Осень');}
    else if (monthYear <= 0 || monthYear > 12)
        {return alert('Тут тебе не шутки шутят. Лови синий экран. Хотел наложить на страницу синий фон но не знаю как=))');}

    // monthYear++;
}

}





// myFunction();

// function myFunction() {
// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	console.log(el);
// });
// alert(el);
// }
// myFunction();