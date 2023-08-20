
// Block_2_HW_3-------------------------------------------------------------------------

//Задание 1

let password = 'пароль';
let message = prompt('Введите пароль');
if (message === password) {
console.log('Пароль введен верно.');}
else {console.log('Пароль введен неправильно');} 

//Задание 2

let c = Number(prompt('Введите число'));
if (c>0 && c<10) {console.log('Верно');}
else {console.log('Не верно');}

//Задание 3

let d = prompt('Введите первое число (e)');
let e = prompt('Введите первое число (d)');

if (d > 100 || e > 100) {console.log('Верно');}
else {console.log('Не верно');}

//Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

//Задание 5
let MonthNumber = Number(prompt('Введите номер месяца в году.'));
if (MonthNumber > 0 && MonthNumber < 13) {
switch (MonthNumber) 
{case 1 : console.log('Январь');
break;

case 2 : console.log('Февраль');
break;

case 3 : console.log('Март');
break;

case 4 : console.log('Апрель');
break;

case 5 : console.log('Май');
break;

case 6 : console.log('Июнь');
break;

case 7 : console.log('Июль');
break;

case 8 : console.log('Август');
break;

case 9 : console.log('Сентябрь');
break;

case 10 : console.log('Октябрь');
break;

case 11 : console.log('Ноябрь');
break;

case 12 : console.log('Декабрь');
break;
}
}
else alert('Чепуха');


