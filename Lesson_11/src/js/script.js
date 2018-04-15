/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', () => {

  let
    tab = document.getElementsByClassName('info-header-tab'),
    tabContent = document.getElementsByClassName('info-tabcontent'),
    info = document.getElementsByClassName('info-header')[0];

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Timer
  let deadline = '2018-04-22';

  function getTimeRemaining(endtime) {
    let
      t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 60);

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let
      timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.hours < 10) {
        hours.innerHTML = '0' + t.hours;
      } else {
        hours.innerHTML = t.hours;
      }
      if (t.minutes < 10) {
        minutes.innerHTML = '0' + t.minutes;
      } else {
        minutes.innerHTML = t.minutes;
      }
      if (t.seconds < 10) {
        seconds.innerHTML = '0' + t.seconds;
      } else {
        seconds.innerHTML = t.seconds;
      }
      let timeInterval = setInterval(updateClock, 1000);

      if (t.total <= 0) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        clearInterval(timeInterval);
      }
    }

    updateClock();
  }
  setClock('timer', deadline);

  //Smooth scroll
  let
    mainMenu = document.getElementsByTagName('nav')[0];
  mainMenu.addEventListener('click', (event) => {
    let
      to,
      element = document.documentElement,
      target = event.target;

    if (target.classList.contains('about')) {
      to = document.getElementById('about');
    }
    if (target.classList.contains('photo')) {
      to = document.getElementById('photo');
    }
    if (target.classList.contains('price')) {
      to = document.getElementById('price');
    }
    if (target.classList.contains('contacts')) {
      to = document.getElementById('contacts');
    }
    scrollTo(element, to.offsetTop - 60, 1000);

  });

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;
    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }


  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    popup = document.querySelector('.popup'),
    moreTab = document.querySelector('.description-btn'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', () => {

    showModal();

  });

  let info2 = document.querySelector('.info');
  info2.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target.className);
    if (target.className == 'description-btn')
      showModal();

  });

  close.addEventListener('click', () => {
    closeModal();
  });

  function showModal() {
    popup.classList.remove('myAnimationExit');
    popup.classList.add('myAnimation');
    more.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    popup.classList.remove('myAnimation');
    popup.classList.add('myAnimationExit');
    // setTimeout(function () {
    overlay.style.display = 'none';
    // }, 1000);
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
    statusMessage.style.display = 'none';
  }

  //Lesson 10
  class options {
    constructor(height = '100px', width = '100px', bg = 'yellow', fontSize = '10px', textAlign = 'justify') {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    createDiv() {
      let div = document.createElement('div');
      document.body.appendChild(div);
      div.style.cssText =
        `height: ${this.height};\
       width: ${this.width};\
       background: ${this.bg};\
       font-size: ${this.fontSize};\
       text-align: ${this.textAlign};\
      `;
      div.innerHTML = 'May Inglish iz veri gud';
    }
  }

  const newElement = new options(
    // '200px', '200px', 'red', '25px', 'center'
  );
  newElement.createDiv();

  //Form
  let message = new Object();
  message.loading = 'Загрузка...';
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = 'Что-то пошло не так...';

  let
    modal = document.querySelector('.main-form'),
    feedback = document.querySelector('#form');
  var
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  statusMessage.style.display = 'none';

  modal.addEventListener('submit', function (event) {
    sendForm(modal);
  });

  feedback.addEventListener('submit', function (event) {
    sendForm(feedback);
  });

  function sendForm(form) {
    event.preventDefault();
    form.appendChild(statusMessage);
    let
      input = form.getElementsByTagName('input');
    statusMessage.style.display = 'inline-block';

    //AJAX
    let
      request = new XMLHttpRequest(),
      formData = new FormData(form);

    request.open("POST", "server.php");
    request.setRequestHeader("Context-Type", "application/x-www-form-urlencoded");
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = '<img src="img/loading.gif">';
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = '<i class="fas fa-check" style="color: green;"></i>';
        } else {
          statusMessage.innerHTML = '<i class="fas fa-times" style="color: red;"></i>';
        }
      }
    };  
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }
});


