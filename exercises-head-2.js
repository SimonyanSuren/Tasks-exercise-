////2.16-------------
//      function petrolOutgo () {
//      	let petrol, mile;
//      	let outgo = 0;
//      	let count = 0;
//      	while(true) {
//      	petrol = +prompt('Please insert your petrol outgo');
//      	mile = +prompt('Please insert passed mile');
//      	if(!petrol || !mile) {
//      		if(Number.isNaN(petrol + mile)) {
//      		alert('Please insert number')
//      		};
//      		break;
//      	}
//      	outgo += (mile/petrol);
//      	count++;
//      	}
//      let avergOutgo = outgo/count;
//      alert('Your average petrol outgo is ' +( avergOutgo|| "0"))
//      }

//      petrolOutgo()

//      // 2.17--------------------
//      function counter (numOfBal, primaryBal, costs, income, credit ) {
//      	let newBalance = primaryBal+costs-income;
//      	alert(`Счет:  ${numOfBal},
//      Предел.кредита: ${credit},
//      Баланс: ${newBalance},
//      Предел кредита: ${credit<newBalance ? 'превышен' : 'не превышен'}`
//      )
//      }

//      counter(100,5394.78, 1000, 500, 5500);

//      //  2.18------------------

//      function sallaryCount (sales) {
//      	let fixedSal = 200;
//      	let weekSal = fixedSal+ sales*9/100;
//      	alert( weekSal);
//      }
//      sallaryCount(1088.89)

//      //2.19------------------

//      function sallaryCount (hours) {
//      	let salOfHour = 10;
//      	let salOfBonusHour = 5;
//      	let standardHours = 40;

//      	let sallary = hours*salOfHour;
//      	if(hours>standardHours) {
//      		sallary += (hours-standardHours)*salOfBonusHour;
//      		}
//      	alert(sallary)
//      }

//      sallaryCount(39)

//      //2.20--------------
//      function maxNumber() {
//      	let max = 0;
//      	let count = 0;
//      	while(count<10) {
//      	let number = +prompt('Please insert number');
//      	let temp = number;
//      	if(max<temp) {
//      		max = temp;
//      	}
//      	count++
//      	}
//      alert(max);
//      }

//      maxNumber()

//      //  2.21 --------------------

      //function foo() {
      //	console.log(`N  10*N  100*N  1000*N`);
      //	for(let i = 1; i<=5; i++ ) {
      //		console.log(`${i}  ${i*10}    ${i*100}    ${i*1000}`);
      //	}
      //}
      //foo()

//      //   2.22---------------
//      // chi stacvel
//      function maxNumber() {
//      	let max = 0;
//      	let nextMax = 0;
//      	let count = 0;
//      	while(count<10) {
//      	let number = +prompt('Please insert number');
//      	let temp = number;
//      	if( nextMax<max ) {
//      		nextMax = temp
//      	}
//      	if(max<temp) {
//      		max = temp;
//      	}

//      	count++
//      	}
//      alert(max);
//      alert(nextMax)
//      }

//      maxNumber()

//      //  2.23-----------------

//      function resultsOfExam () {
//      	let passes = 0;
//      	let failures = 0;
//      	let studentscounter = 0;
//      	while(studentscounter<10) {
//      		let result = prompt('Please import resualt of exams', "1 or 2");
//      		if(result!=='1' && result!=='2') {
//      			alert('Please insert 1 or 2')
//      			continue;
//      		}
//      	if(result==='1') {
//      		passes++;
//      	} else failures++;
//      	studentscounter++;
//      	}
//      	alert(`Exam passed ${passes}, failed ${failures}`);

//      	if(passes>8) {
//      		 alert('Raise tuition fees');
//      }
//      }

//      resultsOfExam()

//      // 2.24-------------------

//      function foo()  {
//      let count = 1;
//      while (count <= 10) {
//      console.log( count % 2 ? "****" : "++++++++" );
//      ++count;
//      }
//      }

//      foo()

//      // 2.25 ---------------

//      function foo() {
//      	let row = 10, column;
//      	while(row>=1) {
//      		column = 1;
//      		while(column<=10) {
//      			console.log(row%2 ? "<" : ">");
//      			++column;
//      		}
//      		--row;
//      	}
//      }

//      foo()

//      //2.28------------

//      function foo() {
//        let i = +prompt('Insert number');
//        if(i===1) {
//      	  alert("Please  insert greater than one");
//      	  return;
//        }
//        let asterisk = "*";
//        let space = " ";
//        let a = "";
//        let b = "";
//        let temp = i-2;
//        let c = '';

//        while (i) {
//          a += asterisk;
//          if (i <= temp) {
//            b += space;
//          }
//          i--;
//      	}
//      	b = asterisk + b + asterisk;
//      	while(temp) {
//      		c += `${b+'\n'}`;
//      		temp--;
//      	}
//        console.log(`${a} \n${c}${a}`);
//      }
//      foo();

//      //  2.29-------------------

//      function palindrome(number) {
//        let lastNum = number / 10;
//        lastNum = Math.round((lastNum % Math.trunc(lastNum)) * 10);
//        let fourthNum = (number - lastNum) / 100;
//        fourthNum = Math.round((fourthNum % Math.trunc(fourthNum)) * 10);
//        let midNum = (number - lastNum - fourthNum * 10) / 1000;
//        midNum = Math.round((midNum % Math.trunc(midNum)) * 10);
//        let secNum = (number - lastNum - fourthNum * 10 - midNum * 100) / 10000;
//        secNum = Math.round((secNum % Math.trunc(secNum)) * 10);
//        firstNum =
//          (number - lastNum - fourthNum * 10 - midNum * 100 - secNum * 1000) /
//          10000;

//        if (firstNum === lastNum && secNum === fourthNum) {
//          console.log("Number is palindrome");
//        } else console.log("Number is not palindrome");
//      }

//      palindrome(78877);

//      // 2.30---------------------

//      		function foo(number) {
//      			let lastNum = number%2;
//      			number = (number-lastNum)/10;
//      			let nextNum = number%2;
//      			number = (number-nextNum)/10;
//      			let nextNum2 = number%2;
//      			number = (number-nextNum2)/10;
//      			let firstNum = number%2;

//      let result = lastNum*1+nextNum*2+nextNum2*4+firstNum*8;
//      console.log(result);

//      	}
//      foo(11)

//      // 2.31 ------------

//      function chess (sizeheght,sizeweight){
//             for(let i=1; i<=sizeheght;i++ ){
//                let output=""
//                 if(i%2===0){for(let j=1;j<=sizeweight;j++){
//                 let a="*";
//                 let b=" ";
//                 if(j%2!==0) output=output+b;
//                 if(j%2===0) output=output+a;
//                 }}
//                 if(i%2!==0){for(let j=1;j<=sizeweight;j++){
//                 let a="*";
//                 let b=" ";
//                 if(j%2===0) output+=b;
//                 if(j%2!==0) output+=a;
//                 }}
//                  console.log(output)
//             }}
//             console.log(chess(8,16))

//      // 2.33-------------

//      function

//      // 2.35-----------------

      //function triangle(a,b,c) {
      //	if(a+b>c && a+c>b && b+c>a) {
      //		console.log("Can be triangle");
      //		return;
      //	}
      //	console.log('Can not');
      //}

      //triangle(2,2,3)

//      // 2.36 --------------

//      function isRigthTri (a,b,c) {
//      	if((a**2+b**2)===c**2 || (a**2+c**2)===b**2 || (b**2+c**2)===a**2) {
//      		console.log('Rigth triangle');
//      	}
//      }
//      isRigthTri(97,72,65)

//      // 2.38--------------

//      function factorial(n) {
//             	if(n===1||n===0){return 1}
//             	return n*factorial(n-1)
//             }
//             alert(factorial(5))

//      // 2.40--------------
//      function f(num) {
//      	let result = ' '
//      	while(num) {
//      		result += (' ' +Math.floor(Math.random()*num+1)*100)
//      		num--;
//      	}
//      	console.log(result);
//      }
//      f(5)
//      // 2.43----------------
//      function minNumber() {
//            	let count = 2;
//      			let number = +prompt('Please insert number');
//      			let min = number
//            	while(count<=number) {
//      			let nextNum = +prompt('Please insert number');
//            	let temp = nextNum || number;
//            	if(min>temp) {
//            		min = temp;
//            	}
//            	count++;
//      			console.log(count, number, nextNum);
//            	}
//            alert(min);
//            }
//            minNumber()
//      // 2.44-------------
//      function sumofOdd () {
//      	let count = 0;
//      	let sum = 0;
//      	while(count<=15) {
//      		count++;
//      		if(count%2) {
//      			sum += count
//      		}
//      	}
//      	alert(sum)
//      }
//      sumofOdd()

//      // 2.47---------------

//         function foo() {
//      		let result = '';
//           for (let i = 0; i < 10; i++) {
//           for(let j = 0; j<=i; j++) {
//      		  result += '*' ;
//           }
//      	  for(let k = 0; k<10-i; k++ ) {
//      		result += " ";
//      	  }

//      	  for(let f = 0; f<10-i; f++ ) {
//      		result += "*";
//      	  }
//      	  for(let d = 0; d<=i; d++) {
//      		  result += ' ' ;
//           }
//      	  for(let j = 0; j<=i; j++) {
//      		  result += ' ' ;
//           }
//      	  for(let k = 0; k<10-i; k++ ) {
//      		result += "*";
//      	  }
//      	  for(let k = 0; k<10-i; k++ ) {
//      		result += " ";
//      	  }
//      	  for(let j = 0; j<=i; j++) {
//      		  result += '*' ;
//           }

//      	  result +='\n';
//         }

//      	 console.log(result);
//      }
//         foo();

//      // 2.48----------
//      function f() {
//        let number = +prompt("Please, insert nimber");
//        let result = "";
//        while (number) {
//          result += "*";
//          number--;
//        }
//        console.log(result);
//      }
//      f();

//      // 2.55----------

//      //  2.57----------------

//      let x = 5;
//      let y = 3;
//      let z = 4;
//      let res = !(x<5 ) && !(y>=7);
//      let res2 = !(x<5 || y>=7);
//      let res = ! ( x == y ) || ! ( z != 5 );
//      let res2 = !(x==y && z!=5);
//      let res = ! ( ( x <= 8 ) && ( y > 4 ) );
//      let res2 = !(x<=8) || !(y>4);
//      let res = ! ( (x >4) || (y<=6));
//      let res2 = (!(x>4)&&(y<=6));

//      function compare(a, b) {
//      	return a===b
//      }

//      console.log(compare(res, res2));

//      // 2.58----------
//      function rhombus() {
//        let result = "";
//        for (let i = 0; i < 10; i=i+2) {
//          for (let j = 0; j < (10-i)/ 2; j++) {
//            result += " ";
//          }
//          for (let k = 0; k <= i; k++) {
//            result += "*";
//          }
//          for (let r = 0; r < 10/2-i; r++) {
//            result += " ";
//          }

//          result += "\n";
//        }
//        for (let i = 10; i >= 0; i=i-2) {
//          for (let j = 0; j < (10-i)/ 2; j++) {
//            result += " ";
//          }
//          for (let k = 0; k <= i; k++) {
//            result += "*";
//          }
//          for (let r = 0; r < 10/2-i; r++) {
//            result += " ";
//          }

//          result += "\n";
//        }

//        console.log(result);
//      }
//      rhombus();