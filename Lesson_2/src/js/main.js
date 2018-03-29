/*jshint esversion: 6 */
var
  budget = +prompt("Какой ваш бюджет?", -100500),
  shopName = prompt("Какое название вашего магазина?", "Петя и партнёры"),
  shopGoods = [],
  time = 21;
mainList = {
  mlBudget: budget,
  mlName: shopName,
  mlShopGoods: shopGoods,
  mlEmployers: {},
  open: true
};

for (let i = 0; i < 5; i++) {
  let typeProducts = prompt("Какой тип товара будем продавать?", "Который мама посоветует");

  if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) !== null) && (typeProducts !== '') && (typeProducts.length <= 50)) {
    shopGoods[i] = typeProducts;
  } else {
    alert("Вы не заполнили поле или ввели больше 50 символов")
    i--;
  }
}

// let i = 0;
// while (i < 5){
//   let typeProducts = prompt("Какой тип товара будем продавать?", "Который мама посоветует");
// if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) !== null) && (typeProducts !== '') && (typeProducts.length <= 50)) {
//   shopGoods[i] = typeProducts;
// } else {
//   alert("Вы не заполнили поле или ввели больше 50 символов")
//   i--;
// }
// }

// let i = 0;
// do{
//  let typeProducts = prompt("Какой тип товара будем продавать?", "Который мама посоветует");
// if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) !== null) && (typeProducts !== '') && (typeProducts.length <= 50)) {
//   shopGoods[i] = typeProducts;
// } else {
//   alert("Вы не заполнили поле или ввели больше 50 символов")
//   i--;
// }
// }
// while (i < 5)

alert("Это ваш бюджет на день = " + budget / 30);

if ((time >= 8) && (time <= 20)) {
  mainList.open = true;
} else
  mainList.open = false;


//Debug
console.log("Budget = " + budget);
console.log("Name = " + shopName);
for (let i = 0; i < 5; i++) {
  console.log((i + 1) + " shopGoods' element = " + shopGoods[i]);
}

console.log('');
// console.log("mlBudget = " + mainList.mlBudget);
// console.log("mlName = " + mainList.mlName);
// for (let i = 0; i < 3; i++) {
//   console.log((i + 1) + " mlShopGoods' element = " + mainList.mlShopGoods[i]);
// }
// for (let i = 0; i < 3; i++) {
//   console.log((i + 1) + " mlEmployers' element = " + mainList.mlEmployers[i]);
// }
// console.log("mlOpen = " + mainList.open);
console.log(mainList);