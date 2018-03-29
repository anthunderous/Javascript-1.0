/*jshint esversion: 6 */
let
  budget,
  shopName,
  time = 13,
  price = 999,
  mainList = {
    mlBudget: budget,
    mlName: shopName,
    mlShopGoods: [],
    mlEmployers: {},
    open: true,
    discount: екгу
  };

function start() {
  budget = +prompt("Ваш бюджет?");
  while (isNaN(budget) || budget == "" || budget == null) {
    alert("Вы не ввели данные");
    budget = +prompt("Ваш бюджет?");
  }
  shopName = prompt("Название вашего магазина?").toUpperCase();
};

function chooseGoods() {
  for (let i = 0; i < 5; i++) {
    let typeProducts = prompt("Какой тип товара будем продавать?");

    if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) !== null) && (typeProducts !== '') && (typeProducts.length <= 50)) {
      mainList.mlShopGoods[i] = typeProducts;
    } else {
      alert("Вы не заполнили поле или ввели больше 50 символов");
      i--;
    }
  }
}

function getDailyBudget() {
  alert("Это ваш ежедневный бюджет: " + budget / 30)
}

function getDiscount(discount) {
  if (discount) {
    price *= 0.8;
    console.log("Цена после скидки: " + price)
  }
}

function takeEmployers() {
  for (let i = 0; i < 4; i++) {
    let employersName = prompt("Введите имя сотрудника");
    if (((typeof (employersName)) === 'string') && ((typeof (employersName)) !== null) && (employersName !== '')) {
      mainList.mlEmployers[i] = i+1 + " - " + employersName;
    } else {
      alert("Вы не заполнили поле");
      i--;
    }
  }
}

function workTime(time) {
  if ((time >= 8) && (time <= 20)) {
    mainList.open = true;
    console.log("Добро пожаловать!=)")
  } else
    mainList.open = false;
}

start();
chooseGoods();
getDailyBudget();
getDiscount();
workTime(19);
takeEmployers();

//Debug
console.log("Budget = " + budget);
console.log("Name = " + shopName);
console.log("Price = " + price);
console.log("Time = " + time;
console.log(mainList);