//// 3.20 -----------
//function multiple(num1, num2) {
//  if (num1 % num2) {
//    return false;
//  }
//  return true;
//}
//console.log(multiple(81, 9));
////3.22--------------
//function square() {
//  let number = +prompt('Please, insert number');
//  let result = '';
//  for (let i = 0; i < number; i++) {
//    for (let i = 0; i < number; i++) {
//      result += '*';
//    }
//    result += '\n';
//  }
//  console.log(result);
//}
//square();

//// 3.26--------------
//function sumofSec(hour, minute, second) {
//  let seconds = hour * 3600 + minute * 60 + second;
//  return seconds;
//}
//console.log(sumofSec(1, 12, 10));
//// 3.30-----------
//function findPrimeNum() {
//  let count = 0;
//  console.log(2);
//  for (let i = 3; i < 10000; i = i + 2) {
//    count++;
//    let done = true;
//    for (let j = 3; j <= Math.floor(Math.sqrt(i)); j++) {
//      if (i % j === 0) {
//        done = false;
//        break;
//      }
//    }
//    if (done) {
//      console.log(i);
//    }
//  }
//  console.log(count);
//}
//findPrimeNum();
////   3.31-------------

//function reverse(number) {
//  let revNum = 0;
//  let count = 0;
//  let temp = 1;
//  while (temp) {
//    temp = number / 10;
//    lastNum = parseInt((temp - parseInt(temp)) * 10);
//    revNum += lastNum;
//    if (count)
//      number = temp;
//    temp = parseInt(temp);
//    console.log(lastNum + 'temp' + temp);
//    count++;
//  }
//  return revNum;
//}

//console.log(reverse(42));

//// 3.32-----------
//function GCD(num1, num2) {
//  let gcd;
//  for (let i = 1; i < Math.min(num1, num2); i++) {
//    if (num1 % i === 0 && num2 % i === 0) {
//      gcd = i;
//    }
//  }
//  console.log(gcd);
//}
//GCD(24, 36);

////  3.35---------------

//function f() {
//  let num1 = Math.floor(Math.random() * 11);
//  let num2 = Math.floor(Math.random() * 11);
//  let rigthAnw = num1 * num2;
//  let answer;
//  while (rigthAnw !== answer) {
//    answer = +prompt(`Please, insert answer  ${num1} * ${num2} ? `);
//    if (rigthAnw !== answer) {
//      alert("It's false");
//    }
//  }
//  alert("It's true");
//}
//f();

////  3.37 -------------------

//function f() {
//  let count = 0;
//  let num1 = Math.floor(Math.random() * 11);
//  let num2 = Math.floor(Math.random() * 11);
//  let rigthAnw = num1 * num2;
//  let answer;
//  while (rigthAnw !== answer) {
//    answer = +prompt(`Please, insert answer  ${num1} * ${num2} ? `);
//    if (rigthAnw !== answer) {
//      alert("It's false");
//      count++;
//    }
//  }
//  alert("It's true");
//  return count;
//}

//function monitoring() {
//  let countQues = 10;
//  let loop = countQues;
//  let count = 0;
//  while (loop) {
//   // f();
//    count += f();
//    loop--;
//  }
//  let per = ((countQues - count) / countQues) * 100;
//  alert(`Your score is ${per}%`);
//}

//monitoring();

////   3.42 ------------------

//// 3.45 -----------------

//function factorial(n) {
//  if (n <= 1) {
//    console.log(n);
//    return n;
//  }
//  console.log(n);
//  return n * factorial(n - 1);
//}
//console.log(factorial(5));
