
// // Задание 1

// function strCount(str, letter) {
    
//      str = str.toLowerCase();
//     letter = letter.toLowerCase();
//     return str.split(``).filter(i => i === letter).length;
//   }
  

// strCount('Hello', 'o');
// strCount('Hello', 'l');
// strCount('', 'z');

// // Задание 2

// const squareSum = (numbers) => numbers.map((element) => element**2).reduce((a, b) => a + b, 0);
return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);

// // Задание 3


function nearestSq(n) {
    let nearstLow = nearst_low(n);
    let nearstHigh = nearst_high(n);
  
    return n-nearstLow < nearstHigh-n ? nearstLow : nearstHigh;
  }
  
  function nearst_high(n) {
    if (Math.sqrt(n)%1 === 0) {
      return n;
    }
  
    return nearst_high(++n);
  }
  
  function nearst_low(n) {
    if (Math.sqrt(n)%1 === 0) {
      return n;
    }
  
    return nearst_low(--n);
  }


// // // Задание 4

// function solution(str){
//     return str.split('').reverse().join('');
//   }


//   // Задание 5

//     return str.split(" ").map((e) => e + " " + e.length);


    // // Задание 6
        // let qua = quantity - Math.floor(quantity / 3);
        // return qua * price;




// // Задание 7

// function litres(time) {
//     let litr = time * 0.5;
//     return Math.floor(litr);
//   }

  // // Задание 8


// let result = array.map(elem => elem*-1);
// return result;


  // // Задание 9

//     let result = [];
//     for (let i = 0; i <= n; i++) {
//       result.push(Math.pow(2, i));
//     }
//     return result;


// // Задание 10

    // return x.reduce((a, b)=> a * b, 1);

