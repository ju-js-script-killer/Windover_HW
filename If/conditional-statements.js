/*

ветвления:
if
if-else
switch-case
switch-case-default
?: (тернарный оператор)

циклы:
for
while
do-while
for-in

*/
// example 1 switch-case-default.
var month = Math.ceil(Math.random() * 12); // 1..12
console.log(month);
switch(month) {
  case 1:
  case 2:
  case 12: console.log('зима'); break;
  case 3:
  case 4:
  case 5: console.log('весна'); break;
  case 6:
  case 7:
  case 8: console.log('лето'); break;
  default: console.log('осень');
}


// example 1.2 if-else.
if (month == 1 || month == 2 || month == 12) {
  console.log('зима');
}
else {
  if (month == 3 || month == 4 || month == 5) {
    console.log('весна');
  }
  else {
    if (month == 6 || month == 7 || month == 8) {
      console.log('лето');
    }
    else {
      console.log('осень');
    }
  }
}


// example 2.  Cycle "for".
var a = [10, 20, 30];
for (var i = 0; i < a.length; i++ ) {
  console.log ("i=", i, " a[i] ", a[i]);
}
/* Answer i= 0  a[i]  10
          i= 1  a[i]  20
          i= 2  a[i]  30 */

// example 2.1  Cycle  "for".
var x = 10;
for (var x = 0; x < 5; x++){
  console.log("x = ", x);
}
/* Answer   x =  0
            x =  1
            x =  2
            x =  3
            x =  4
Difference there is no "end x" in "for cycle"
in comparison with "do-while". */


// example 3.  cycle "for-in" with an object.
var a = {
  "test1": 10,
  "test2": 20,
  "test3": 30,
}
console.log (a["test1"]);
for (var i in a) {
  console.log ("i=", i, "a[i] ", a[i]);
}
/* Answer  10
           i= test1 a[i]  10
           i= test2 a[i]  20
           i= test3 a[i]  30 */

// example 3.1  cycle  "for-in" with an array (массив).
var a = [10, 20, 30];
for (var i in a) {
  console.log ("i=", i, "a[i] ", a[i]);
}

// example 4.  Cycle  "do-while".
var x = 2;
do {
  console.log ("x = ", x);
  x++
}
while (x < 5);
console.log ("end x = ", x);
/* Answer  x =  2
           x =  3
           x =  4
           end x =  5 */


// example 5.  Cycle "while".
var x = 0;
while (x < 5); {
  console.log ("x = ",x);
  x++
}
  console.log("end x = ", x);

// example 6. "if", counter (счетчик).
var t = [10, -20, 30];
var i = 0;
var k = 0;
if (t [i] > 0) {
  k++;
}
i++;
if (t [i] > 0) {
  k++;
}
i++;
if (t [i] > 0) {
  k++;
}
i++;
console.log(k);


// example 7. "for", counter (счетчик).
var t = [10, -20, 30];
var k = 0;
 for (var i = 0; i < t.length; i++) {
   if (t [i] >0) {
     k++;
   }
 }
 console.log (k);
