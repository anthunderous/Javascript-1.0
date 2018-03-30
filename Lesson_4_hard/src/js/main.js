/*jshint esversion: 6 */
let
  j,
  array = [];

function getQuestion() {
  j = prompt("Какое количество подмассивов нужно создать?", "");
}
getQuestion();
console.log(array);
for (let i = 0; i < 10; i++) {
  array[i] = [5];
  
}
console.log(array);


for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    document.write("array[" + i + "][" + j + "] = " + array[i][j]+ "  ");
  }
    document.write("<br>");
}