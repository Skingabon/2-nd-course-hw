////Zadacha 1 ==============================================================================
// Создайте функцию, которая принимает строку и один символ и возвращает целое forofчисло, равное количеству вхождений 2-го аргумента, найденного в первом. Если не удается найти ни одного вхождения, должно быть возвращено значение, равное 0.

// split() - метод разбивает строку на массив строк используя для этого заданный разделитель.

// function str_count(str, letter) {
    
// //     str = str.toLowerCase(); //привожу обе переменные (строки) к нижнему регистру
// //     letter = letter.toLowerCase(); //привожу обе переменные (строки) к нижнему регистру
// // return str.split(``).filter(i => i === letter).length;

// ////return str.split(letter).length-1;
// }
// str_count("Hello", 'o'); // returns 1

//===============================================================================================
////Zadacha 2 ===================================================================================
// Завершите функцию square sum таким образом, чтобы она возводила в квадрат каждое переданное в нее число, а затем суммировала результаты вместе.

// function squareSum(numbers){
// let result1 = [];
// let sum = 0;
// for (let elle of numbers) {
//     result1.push(elle ** 2)
// } for (i = 0; i < result1.length; i++) {
// sum += result1[i];
// }
//     return sum
// }
// squareSum([1, 2, 2])

// ////variant 2------------------------------------------
// function squareSum(numbers){
//     return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
//     }
//     squareSum([1, 2, 2])
////==================================================================================================
////Zadacha 3 ========================================================================================


// function nearestSq(n) {
//     let nearstLow = nearst_low(n);
//     let nearstHigh = nearst_high(n);
  
//     return n-nearstLow < nearstHigh-n ? nearstLow : nearstHigh;
//   }
  
//   function nearst_high(n) {
//     if (Math.sqrt(n)%1 === 0) {
//       return n;
//     }
  
//     return nearst_high(++n);
//   }
  
//   function nearst_low(n) {
//     if (Math.sqrt(n)%1 === 0) {
//       return n;
//     }
  
//     return nearst_low(--n);
//   }
// nearestSq(121);

////==================================================================================================

////Zadacha 4 ========================================================================================
// function solution(str){
//   const result = str.split(``).reverse().join(``);
//   return result;
// }
// solution('world');
////Zadacha 5==========================================================================================

// function wow(str) {
//     return str.split(' ').map(ap => ap + ' ' + ap.length)
// }
// wow("ti vse osilish");
// (3) ['ti 2', 'vse 3', 'osilish 7']

//variant 2---------------------
// function addLength(str){
//     return str.split(' ').map(function(v){return v+' '+v.length})
//   }

//variant 3---------------------
  // return str.split(" ").map((e) => e + " " + e.length);
//variant 4---------------------
  //return str.split(" ").map(s => `${s} ${s.length}`)



////Zadacha 6==========================================================================================

// function mango(quantity, price){
//     return price * (quantity - Math.floor(quantity / 3));
//   }

//variant 2 -----------------------------
//   function mango(quantity, price){
//   let qua = quantity - Math.floor(quantity / 3);
//         return qua * price;
//   }

////Zadacha 7==========================================================================================
// function litres(time) {
//     return Math.floor(0.5 * time);
//   }
// //variant 2----------------------------------
//   function litres(time) {
//     return Math.floor(time/2);
//   }
// //variant 3----------------------------------
//   function litres(time) {
//   litres = t => ~~(t / 2);
//   }

////Zadacha 8==========================================================================================
// function invert(array) {
//     let result = array.map(n => n*-1); 
//      return result;
//  }
//  invert([1,2,3,4,5]);

//  //variant 2----------------------------------------------
//  function invert(array) {
//     return array.map(i => 0 - i);
//  }

//  //variant 3-------------------------------WOWWOWOWOOW---------------
//  function invert(array) {
//     return array.map(el => -el);
//  }

////Zadacha 9==========================================================================================
// function powersOfTwo(n){
//     let result = [];
//     for (i=0; i <= n; i++) {
//         result.push(Math.pow(2,i));
//     }
//   return result;
// }
// powersOfTwo(2);

////Zadacha 10==========================================================================================
// function grow(x){
//     return result = x.reduce((umn, current) => umn * current);
// }

//========================================BILET=================================================
