/*jshint esversion: 6 */
let
  openBtn = document.getElementById('open-btn'),
  mainInfo = document.getElementsByClassName('main-info')[0],
  leftMenu = mainInfo.getElementsByTagName('div'),
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
    discount: true
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