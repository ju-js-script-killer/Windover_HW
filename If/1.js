/* 27.09.2019 Task 1. Дано целое число. Если оно является положительным,
то прибавить к нему 1; в противном случае не изменять его.
 Вывести полученное число.*/
var a = Math.ceil(Math.random() * 10);
if ( a > 0) {
    a++;
}
console.log( a );

/* task 2. Дано целое число. Если оно является положительным,
то прибавить к нему 1; в противном случае вычесть из него 2.
Вывести полученное число.*/
var a = Math.ceil(Math.random() * 10) -5;
console.log("a=" + a);
if (a > 0) {
   a++;
}
else {
  a -= 2;
}
console.log(a);

/* task 3. Дано целое число. Если оно является положительным,
то прибавить к нему 1; если отрицательным, то вычесть из него 2;
 если нулевым, то заменить его на 10.
Вывести полученное число.*/
var a = Math.ceil(Math.random() * 10) -5;
console.log("a=" + a);
 if (a > 0) {
   a++;
 }
 else {
   if (a < 0) {
      a -= 2;
   }
   else {
     a = 10;
   }
 }
 console.log(a);

/*02.10.2018 task 4. Даны три целых числа.
 Найти количество положительных чисел в исходном наборе.
 mine solution the longest*/

var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);

  if (a > 0 && b > 0 && c > 0) {
    console.log (3);
  }
     else if (a > 0 && b > 0 && c <= 0)  {
    console.log (2);
     }
  else if (a > 0 && b <= 0 && c > 0)  {
    console.log (2);
       }
      else if (a <= 0 && b > 0 && c > 0)  {
         console.log (2);
            }
            else if (a > 0 && b <= 0 && c <= 0)  {
               console.log (1);
                  }
                  else if (a <= 0 && b <= 0 && c > 0)  {
                     console.log (1);
                        }
                        else if (a <= 0 && b > 0 && c <= 0)  {
                           console.log (1);
                              }
                  else {
                    console.log(0);
                        }
      /* task 4.0
      mine solution
    */
    var a = Math.ceil(Math.random() * 10) -5;
    console.log("a= " + a);
    var b = Math.ceil(Math.random() * 10) -5;
    console.log("b= " + b);
    var c = Math.ceil(Math.random() * 10) -5;
    console.log("c= " + c);

if (a > 0){
  a = 1
}
else {
  a = 0
}
  if (b > 0){
  b = 1
}
else {
  b = 0
}
 if (c > 0){
  c = 1
}
else {
  c = 0
}
var count = a + b + c;
console.log(count);

//task 4.1  not mine solution
      var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);

if(a>0) {
  if(b>0) {
    if(c>0) {
      console.log(3);
    }
    else {
      console.log(2);
    }
  }
  else if (c>0){
    console.log(2);
  }
  else {
    console.log(1);
  }
}
else if (b>0) {
  if(c>0) {
    console.log(2);
  }
  else {
    console.log(1);
  }
}
else if (c>0) {
  console.log(1);
}
else {
  console.log(0);
}


//task 4.2 not mine solution
var arr = [];
var count = 0;
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);

arr = [a, b, c];

for (var i=0; i<3; i++) {
  if(arr[i]>0) {
    count = count+1;
  }
}

console.log(count);

//task 4.3
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);
var count = 0;
 if (a > 0) {
   count++;
 }
 if (b > 0) {
   count++;
 }
 if (c > 0) {
   count++;
 }
 console.log(count);

//task 4.4 solution in one string
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);
console.log((a > 0) + (b > 0) + (c > 0));

/*task 5.
Даны три целых числа. Найти количество положительных
и количество отрицательных чисел в исходном наборе.
*/
var arr = [];
var count = 0;
var t = 0;
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);

arr = [a, b, c];

for (var i=0; i<3; i++) {
  if(arr[i]>0) {
    count = count+1;
  }
  if(arr[i]<0) {
    t = t+1;
  }
}
console.log(count);
console.log(t);


//task 5.1
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);
console.log((a > 0) + (b > 0) + (c > 0));
console.log((a < 0) + (b < 0) + (c < 0));

//task 5.2
var arr = [];
var count = 0;
var t = 0;
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);
var c = Math.ceil(Math.random() * 10) -5;
console.log("c= " + c);
var i = 0;
arr = [a, b, c];

 if(arr[i]>0) {
 count= count+1;
 }
if(arr[i]<0) {
  t=t+1;
}
i++;
if(arr[i]>0) {
count= count+1;
}
if(arr[i]<0) {
 t=t+1;
}
i++;
if(arr[i]>0) {
count= count+1;
}
if(arr[i]<0) {
 t=t+1;
}
i++;
console.log(count);
console.log(t);


// task 6. Даны два числа. Вывести большее из них.
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);

if (a > b) {
   console.log(a);
}
else {
console.log(b);
}

/* task 7. Даны два числа.
Вывести порядковый номер меньшего из них.*/
var a = Math.ceil(Math.random() * 10) -5;
console.log("a= " + a);
var b = Math.ceil(Math.random() * 10) -5;
console.log("b= " + b);

if (a < b) {
   console.log(1);
}
else {
console.log(2);
}

<<<<<<< HEAD
// task 8. Даны два числа.


var k = 3;
var n = 5;

 for (var i = 0; i < n; i++) {
   console.log (k);
 }

 var a = 1;
 var b = 5;
console.log (b - a + 1);
 for ( var i = a; i <= b; i++) {
   console.log(i);
 }
=======
/* task 8. Даны два числа.
 Вывести вначале большее, а затем меньшее из них.*/
 var a = Math.ceil(Math.random() * 10) -5;
 console.log("a= " + a);
 var b = Math.ceil(Math.random() * 10) -5;
 console.log("b= " + b);

 if (a > b) {
    console.log(a, b);
 }
else  {
 console.log(b, a);
 }

/* task 9. Даны две переменные вещественного типа: a, b .
 Перераспределить значения данных переменных так,
 чтобы в a  оказалось меньшее из значений, а в  b — большее.
 Вывести новые значения переменных  a и b.
>>>>>>> cb4fcbb68f93f8f7fce2a01c252f6e7325b93ed9
