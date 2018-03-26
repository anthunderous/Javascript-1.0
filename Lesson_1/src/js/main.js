/*jshint esversion: 6 */
var
  budget    = +prompt("Какой ваш бюджет?", -100500),
  name      = prompt("Какое название вашего магазина?", "Петя и партнёры"),
  shopGoods = [],
  mainList  = {
    mlBudget: budget,
    mlName: name,
    mlShopGoods: shopGoods = [],
    mlEmployers: employers = {},
    open: true
  };

for (let i = 0; i < 3; i++) {
  shopGoods[i] = prompt("Какой тип товара будем продавать?", "Который мама посоветует");
}
alert("Это ваш бюджет на день - " + budget / 30);


//Debug
console.log("Budget = " + budget);
console.log("Name = " + name);
for (let i = 0; i < 3; i++){
  console.log((i+1) + " shopGoods' element = " + shopGoods[i]);
}

console.log('');
console.log("mlBudget = " + mainList.mlBudget);
console.log("mlName = " + mainList.mlName);
for (let i = 0; i < 3; i++){
  console.log((i+1) + " mlShopGoods' element = " + mainList.mlShopGoods[i]);
}
for (let i = 0; i < 3; i++){
  console.log((i+1) + " mlEmployers' element = " + mainList.mlEmployers[i]);
}
console.log("mlOpen = " + mainList.open);


