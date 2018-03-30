/*jshint esversion: 6 */
let
  m,
  sum = 0,
  array = [];

function getQuestion() {
  m = prompt("Какое количество подмассивов нужно создать?", "");
}
getQuestion();

for (let i = 0; i < m; i++) {
  array[i] = [];
  for (let j = 0; j < 5; j++) {
    array[i][j] = Math.round(Math.random() * 9);
    sum += array[i][j];
    document.write("array[" + i + "][" + j + "] = " + array[i][j] + " || ");
  }
  document.write("<br>");
}
document.write("<br> <br> sum = " + sum);