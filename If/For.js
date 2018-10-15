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
