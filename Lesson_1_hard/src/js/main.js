/*jshint esversion: 6 */
var
  num = 33721,
  result = 1;

num = num.toString().split('');
for (let i = 0; i < 5; i++){
  result *= +num[i];
  console.log( (i + 1) + " element" + " = " + num[i]);
}

console.log("Result = " + result);
alert("Result in a cube = " + Math.pow(result,3) );

