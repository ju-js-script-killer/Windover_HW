/*Функция это отрывок кода который может быть вызван из другого кода или вызван собой,
или это variable которая ссылается на функцию.
Когда функция вызвана, аргументы переданы в функцию как вход,
и функция может необязательно вернуть вывод. Функция в JavaScript
 это object.

Имя функции это identifier объявлённый как часть объявления функции
 или выражения функции. Имя функции scope зависит от того является
 ли имя функции объявлением или выражением.*/

//ТИПЫ ФУНКЦИЙ

/*Example 1. Анонимная функция, без имени. */
function turnRight () {  /* Set the parametrs for turnRight function.*/
  console.log  ("decrease the speed");
  console.log  ("turn the weel-drive to the right");
  console.log  ("wait for turning");
  console.log  ("turn the weel-drive back");
}

function turnLeft ()  {    /* Set the parametrs for turnLeft function.*/
  console.log  ("decrease the speed");
  console.log  ("turn the weel-drive to the left");
  console.log  ("wait for turning");
  console.log  ("turn the weel-drive back");
}

turnRight();   /*Исполнение функции. Function perfomance */
turnLeft();    /*Исполнение функции. Function perfomance */
turnRight();   /*Исполнение функции. Function perfomance */

/*Example 2. Именованная функция, с именем.*/
function turn (side) {
  console.log  ("decrease the speed");
  console.log  ("turn the weel-drive" + ["to the right", "to the left"] [side]);
  console.log  ("wait for turning");
  console.log  ("turn the weel-drive back");
}
 turn(0);
 turn(1);
 turn(0);

 function turn (side) {
   console.log  ("decrease the speed");
   console.log  ("turn the weel-drive" + side);
   console.log  ("wait for turning");
   console.log  ("turn the weel-drive back");
 }

turn (" to the right");
turn (" to the left");

/*Example 3. Функция с переменной.*/
var foo = function () {
  console.log (10);
};
var bar = function (f) {
   f();
};

bar(foo);

/*Example 4. Рекурсивная функция, которая вызывает саму себя.*/
var foo = function (x, y) {
   return x * y;
};
console.log (5 + foo(5, 5));

/*Example 4.1 */
function loop(x) {
   if (x >= 10)
   return;
    loop(x + 1);
}

/*Example 4.2 */
var pow = function (a, p) {
  var res = 1;
  for (var i = 0; i < p; i++) {
    res = res * a;             //res *=a
  }
return res;
};

console.log(1 + pow(2, 3));


/*Example 5. Immediately Invoked Function Expressions (IIFE)
 это функция которая вызывается прямо после того как функция
 загружена в компилятор браузера. Способ объявления IIFE это
путём размещения левых и правых круглых скобок
в конце объявления функции.*/
​function foo(){
 console.log('Hello, Foo');
}();


(function foo() {
​ console.log('Hello, Foo');
}());


(function food(){
    console.log('Hello, Foo');
})();


/*Example 6. Установка интервала вызова функции.*/
var i = 10;
function foo () {
   console.log("i =", i);
}

setInterval (foo, 1000);

/*Example 7.*/
var a = {"qwe": 10, "asd": 20};
var b = [ 10, 20 ];

console.log(a ["qwe"], a.qwe, a["asd"], a.asd);
console.log(b[0], b ["0"], b[1], b ["1"]);

/*Example 8.*/
var a = {
  name: "Jules",
  age: 29,
  sayHello: function () {
    console.log ("Hello! My name is " + this.name + ". I am "  + this.age + " years old. " );
  } /* this.name вызывает свойство из объекта*/
};

a.sayHello();

/*Example 8.1*/
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
      alert("Hi from " + this.name + ". Who is " + this.age + " years old.");
  };
}

var a = new Human ("Jules", 20);
var b = new Human ("Jusy", 30);

a.sayHello ();
b.sayHello ();
