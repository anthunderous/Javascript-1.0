/*jshint esversion: 6 */
let
  menuItem = document.getElementsByClassName('menu-item'),
  menu = document.getElementsByClassName('menu')[0],
  temp = document.createElement('li'),
  title = document.getElementById('title'),
  promptShow = document.getElementById('prompt'),
  adv = document.getElementsByClassName('adv')[0];

temp.classList.add('menu-item');
temp.textContent = 'Пятый пункт';
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(temp);

document.body.style.background = 'url(img/apple_true.jpg)';
title.textContent= 'Мы продаем только подлинную технику Apple';
adv.remove();
promptShow.textContent = prompt("Какое у вас отношение к технике Apple?", "");