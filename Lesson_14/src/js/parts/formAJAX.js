function formAJAX(){
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
}

module.exports = formAJAX;