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
        if (((typeof (items)) === 'string') && ((typeof (items)) !== null) && (items !== '')) {
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
mainList.chooseShopItems();
console.log(mainList);

