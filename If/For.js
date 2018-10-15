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
