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
// example 1
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


// example 1.2
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
