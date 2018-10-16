/* При написании скриптов зачастую встает задача сделать однотипное действие много раз.
Например, вывести товары из списка один за другим. Или просто перебрать все числа
от 1 до 10 и для каждого выполнить одинаковый код.
Для многократного повторения одного участка кода – предусмотрены циклы.
while – проверка условия перед каждым выполнением.
do..while – проверка условия после каждого выполнения.
for – проверка условия перед каждым выполнением, а также дополнительные настройки.*/
// https://learn.javascript.ru/while-for

/* Cycle for. Вывести числа от а до b */
var a = 1;
var b = 5;
  for (var i = a; i <= b; i++) {
    if (i == 3) continue;  /* Директива continue прекращает выполнение текущей итерации цикла.
                    прерывает не весь цикл,
                   а только текущее выполнение его тела, как будто оно закончилось */
    console.log(i);
  }


/* Cycle while. Вывести числа от а до b */
var a = 1;
var b = 5;
var i = a;
  while (i <= b) {
    console.log (i);
    i++;
  }

  var a = 1;
  var b = 5;
  var i = a;
    while ( i <= b)  {
        if (i == 3) break;
        console.log(i);
        i++;
    }

/* Cycle do-while. Вывести числа от а до b */
  var a = 1;
  var b = 5;
  var i = a;
   do {
    console.log(i);
    i++;
  }
 while (i <= b);


 var a = 1;
 var b = 5;
 var i = a;
do {
    if (i == 3) {
      i++
      continue;
     }
    console.log(i);
    i++;
   }
 while (i <= b);

/* Task 1. Cycle for. Даны целые числа k и n (n > 0).
Вывести n раз число k.*/
var k = Math.ceil(Math.random() * 15);
console.log ("k = ", k);
var n = Math.ceil(Math.random() * 15) + k;
console.log ("n = ", n);
 for (var i = 0; i < n; i++) {
   console.log (k);
 }

 /* Task 2. Cycle for. Даны целые числа a и b (a < b).
 Вывести в порядке возрастания все целые числа, расположенные между a и b.
(включая сами числа  a и b), а также количество n этих чисел */
var a = Math.ceil (Math.random() * 10);
console.log ("a = ", a);
var b = Math.ceil (Math.random() * 20);
console.log ("b = ", b);
  for ( var i = a; i <= b; i++) {
    console.log(i);
  }
console.log(b - a + 1);

/* Task 3. Cycle for. Даны целые числа a и b (a < b).
Вывести в порядке убывания все целые числа, расположенные между a и b.
( не включая сами числа  a и b), а также количество n этих чисел */
var a = Math.ceil (Math.random() * 10);
console.log ("a = ", a);
var b = Math.ceil (Math.random() * 20);
console.log ("b = ", b);
  for ( var i = b - 1; i > a; i--) {
    console.log(i);
  }
console.log(b - a - 1);

/* Task 4. Cycle for. Дано вещественное число — цена 1 кг конфет.
Вывести стоимость 1, 2, …, 10 кг конфет. */

var sweet = Math.ceil(Math.random() *15000) / 10;
console.log("1 kg of candy costs",sweet);
 for (var i = 1; i <= 10; i++) {
   console.log (i + " " + "kg cost" + " " + i*sweet);
 }

 /* Task 5. Cycle for. Дано вещественное число — цена 1 кг конфет.
 Вывести стоимость 0.1, 0.2, …, 1 кг конфет. */
 var sweet = Math.ceil(Math.random() *15000) / 10;
 console.log("1 kg of candy costs",sweet);
  for (var i = 1; i <= 10; i++) {
    console.log (i + " " + "kg cost" + " " + i*sweet);
  }

  /* Task 6. Cycle for. Дано вещественное число — цена 1 кг конфет.
  Вывести стоимость 1.2, 1.4, …, 2 кг конфет. */
  var sweet = Math.ceil(Math.random() *15000) / 10;
  console.log("1 kg of candy costs",sweet);
   for (var i = 12; i <= 20; i+=2) {
    console.log (i/10 + " " + "kg cost" + " " + i/10*sweet);
  }

  /* Task 7. Cycle for. Даны два целых числа a и b (a < b).
  Найти сумму всех целых чисел от a до b включительно. */
  var a = Math.ceil (Math.random() * 10);
  console.log ("a = ", a);
  var b = Math.ceil (Math.random() * 20);
  console.log ("b = ", b);
  var sum = 0;
    for (var i = a; i <= b; i++) {
      sum  +=i;
    }
  console.log (sum);

  /* Task 8. Cycle for. Даны два целых числа a и b (a < b).
  Найти произведение всех целых чисел от a до b включительно. */
  var a = Math.ceil (Math.random() * 10);
  console.log ("a = ", a);
  var b = Math.ceil (Math.random() * 20);
  console.log ("b = ", b);
  var sum = 1;
    for (var i = a; i <= b; i++) {
      sum *= i;
    }
  console.log (sum);

  /* Task 9. Cycle for. Даны два целых числа a и b (a < b).
  Найти сумму квадратов всех целых чисел от a до b включительно. */
var a = 2;
var b = 5;
var sum = 0;
  for ( var i = a; i <= b; i++) {
    sum = sum + i * i;
  }
console.log(sum);

/* Task 10. Cycle for. Дано целое число N ( N > 0).
Найти сумму 1 + 1/2 + 1/3 + ...+ 1/N (вещественное число). */
var N = 6;
var sum = 0;
  for (var i = 1; i <= N; i++) {
    sum = sum + 1/i;
  }
console.log(sum);

/* Task 11. Cycle for. Дано целое число N ( N > 0).
Найти сумму N*N + (N+1)квадрат + (N+2)квадрат + ...+ (2*N)квадрат (целое число). */
var N = 4;
var sum = 0;
var sum_final;
for (var i = 0; i <= N; i++) {
  sum = sum + Math.pow(N + i, 2);
}

sum_final = sum + Math.pow(2 * N, 2);
console.log(sum_final);

// Task 11.1 ??? Разобрать
var N = 4;
var sum = 0;
for (var i = 0; i <= N; i++) {
  sum = sum + Math.pow(N + i, 2);
  if (i == N) {
    Math.pow(N + i, 2)*2;
  }
}
console.log(sum);
