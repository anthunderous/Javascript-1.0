/*jshint esversion: 6 */
let
  openBtn = document.getElementById('open-btn'),
  mainInfo = document.getElementsByClassName('main-info')[0],
  leftMenu = mainInfo.getElementsByTagName('div'),
  //Мне кажется более рациональное решение, нежели вариант с перечеслением всех классов - они же разные все)
  goodsItem = document.getElementsByClassName('goods-item'),
  mainFunctions = document.getElementsByClassName('main-functions')[0],
  btnTag = mainFunctions.getElementsByTagName('button'),
  products = document.querySelector('.choose-item'),
  timeInput = document.querySelector('.time-value'),
  budgetInput = document.querySelector('.count-budget-value'),
  employers = document.querySelectorAll('.hire-employers-item'),
  discount = document.querySelector('.discountInput'),
  budget,
  shopName,
  time = 13,
  mainList = {
    mlBudget: budget,
    mlName: shopName,
    mlShopGoods: [],
    mlEmployers: {},
    open: true,
    shopItems: [],
    discount: true,
    shopGoods: function chooseGoods() {
      for (let i = 0; i < 5; i++) {
        let typeProducts = prompt("Какой тип товара будем продавать?");

        if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) !== null) && (typeProducts !== '') && (typeProducts.length <= 50)) {
          mainList.mlShopGoods[i] = typeProducts;
        } else {
          alert("Вы не заполнили поле или ввели больше 50 символов");
          i--;
        }
      }
    },
    workTime: function workTime(time) {
      if ((time >= 8) && (time <= 20)) {
        mainList.open = true;
        console.log("Добро пожаловать!=)");
      } else
        mainList.open = false;
    },
    start: function start() {
      budget = +prompt("Ваш бюджет?");
      while (isNaN(budget) || budget == "" || budget == null) {
        alert("Вы не ввели данные");
        budget = +prompt("Ваш бюджет?");
      }
      shopName = prompt("Название вашего магазина?").toUpperCase();
    },
    getDailyBudget: function getDailyBudget() {
      alert("Это ваш ежедневный бюджет: " + budget / 30)
    },
    getDiscount: function getDiscount(discount) {
      if (discount) {
        price *= 0.8;
        console.log("Цена после скидки: " + price)
      }
    },
    takeEmployers: function takeEmployers() {
      for (let i = 0; i < 4; i++) {
        let employersName = prompt("Введите имя сотрудника");
        if (((typeof (employersName)) === 'string') && ((typeof (employersName)) !== null) && (employersName !== '')) {
          mainList.mlEmployers[i] = i + 1 + " - " + employersName;
        } else {
          alert("Вы не заполнили поле");
          i--;
        }
      }
    },
    chooseShopItems: function chooseShopItems() {
      let items = prompt("Перечислите через запятую ваши товары", "");
      choose();

      function choose() {
        if (((typeof (items)) === 'string') && ((typeof (items)) != null) && (items !== '')) {
          mainList.shopItems = items.split(",");
          mainList.shopItems.push(prompt("Подождите, ещё ", ""));
          mainList.shopItems.sort();
        } else {
          alert("Вы неправильно заполнили поле");
          items = prompt("Перечислите через запятую ваши товары", "");
          choose();
        }
      }
    },
    showShopItems: function showShopItems() {
      document.write("У нас вы можете купить: <br>");
      mainList.shopItems.forEach(function (item, i, arr) {
        document.write("  - " + (i + 1) + " - " + item + "<br>");
      });
    },
    getMainList: function getMainList() {
      for (let key in mainList) {
        console.log("Наш магазин включает в себя: " + key);
      }
    }
  };
console.log(mainList);

openBtn.addEventListener('click', () => {
  budget = +prompt("Ваш бюджет?");
  while (isNaN(budget) || budget == "" || budget == null) {
    alert("Вы не ввели данные");
    budget = +prompt("Ваш бюджет?");
  }
  leftMenu[3].textContent = budget;
  leftMenu[1].textContent = prompt("Название вашего магазина?").toUpperCase();

});

btnTag[0].addEventListener('click', () => {
  for (let i = 0; i < goodsItem.length; i++) {
    let typeProducts = goodsItem[i].value;
    if (((typeof (typeProducts)) === 'string') && ((typeof (typeProducts)) != null) && (typeProducts.length <= 50)) {
      mainList.mlShopGoods[i] = typeProducts;
      leftMenu[5].textContent = mainList.mlShopGoods;
    } else {
      alert("Вы неправильно заполнили поля или ввели больше 50 символов");
      break;
    }
  }
});

products.addEventListener('change', () => {
  let items = products.value;

  if (isNaN(items) && items != '') {
    mainList.shopItems = items.split(",");
    mainList.shopItems.sort();
    leftMenu[7].textContent = mainList.shopItems;
  }
});

timeInput.addEventListener('change', () => {
  let time = +timeInput.value;
  if ((time >= 8) && (time < 20)) {
    mainList.open = true;
  } else
    mainList.open = false;


if(mainList.open === true)
  leftMenu[13].style.backgroundColor = 'green';
  else
  leftMenu[13].style.backgroundColor = 'red';
});

btnTag[1].addEventListener('click', () => {
  budgetInput.value = +leftMenu[3].textContent/30;
});

btnTag[2].addEventListener('click', () => {
  for (let i = 0; i<employers.length; i++){
    mainList.mlEmployers[i] = employers[i].value;
    leftMenu[9].textContent += mainList.mlEmployers[i];
     if(i<employers.length-1){
      leftMenu[9].textContent+=', ';
     }
  }
});

btnTag[3].addEventListener('click', () => {
  let temp = parseInt(discount.value);
  console.log(typeof(temp));
  if((temp!='')&&(!isNaN(temp))){
    leftMenu[11].style.backgroundColor = 'green';
    leftMenu[11].textContent = discount.value + '%';
  }
  else{
    leftMenu[11].style.backgroundColor = 'red';
    leftMenu[11].textContent = '';
  }
  

});