var a = Math.ceil(Math.random() * 10);
if ( a > 0) {
    a++;
}
console.log( a );

var a = Math.ceil(Math.random() * 10) -5;
console.log("a=" + a);
if (a > 0) {
   a++;
}
else {
  a -= 2;
}
console.log(a);


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
