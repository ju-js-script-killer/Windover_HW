// Examples. 2 conditions.
var x = 15;
  while (x > 5 || x % 5 == 0) {
  console.log (x);
  x--;
  }



/*Task 1.  Даны положительные числа a и b (a > b). На отрезке длины a
 размещено максимально возможное количество отрезков
 длины b (без наложений).Не используя операции
 умножения и деления, найти длину незанятой части отрезка a .*/
var a = 10;
var b = 3;
var i = a;
  while ( i >= b  ) {
  i = i - b;
}
console.log(i);

/*Task 2. Даны положительные числа a и b (a > b). На отрезке длины a размещено
максимально возможное количество отрезков длины b (без наложений).
Не используя операции умножения и деления, найти количество
отрезков b, размещенных на отрезке a.*/
var a = 10;
var b = 3;
var i = 0;
var max = a;
  while ( max - b >= 0) {
  max = max - b;
  i++;
}
console.log(i);

/*Task 3. Даны целые положительные числа N и K. Используя только операции
 сложения и вычитания, найти частное от деления нацело N на K ,
 а также остаток от этого деления.*/

 var a = 10;
 var b = 2;
 var remainder = a;
 var quotient = 0;
   while ( remainder >= b  ) {
   remainder = remainder - b;
   quotient++;
 }
 console.log(remainder);
 console.log(quotient);

 /*Task 4. Дано целое число N (N > 0). Если оно является степенью числа 3,
 то вывести True, если не является — вывести False.*/

 var N = 9;
  while (N % 3 == 0) {
   N /= 3;
  }
console.log(N == 1);


/* While5. Дано целое число N (N > 0), являющееся некоторой степенью числа 2:
N=2 в степени k.
Найти целое число k — показатель этой степени.*/
var N = 32;
var a = 2;
var i = 0;
var max = N;
while( max % a == 0 ) {
  max /= a;
i++;
}
console.log (i);
