/*jshint esversion: 6 */
let
  str = "урок-3-был слишком легким",
  str2 = "",
  arr = [20, 33, 1, "Человек", 2, 3];

console.log(str);
str = str[0].toUpperCase() + str.slice(1);
console.log(str);
for (let i = 0; i < str.length; i++) {
  if (str[i] == "-") {
    str = str.slice(0, i) + ' ' + str.slice(i + 1);
  }
}
console.log(str);

str2=str.slice(str.indexOf("легким"));
str2=str2.slice(0,str2.length-2)+"o";
str = str.slice(0,str.indexOf("легким"));

console.log(str);
console.log(str2);

let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof (arr[i]) !== 'string') {
    result += Math.pow(arr[i], 3);
  }
}
result = Math.sqrt(result);
console.log(result);