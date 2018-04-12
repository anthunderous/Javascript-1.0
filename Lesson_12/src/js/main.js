$(document).ready(function () {
  $('[href = "#sheldure"]').on('click', function () {
    showModal();
  });

  $('.main_btna').on('click', function () {
    showModal();

  });

  $('.main_btn').on('click', function () {
    showModal();
  });

  $('.close span').on('click', function () {
    closeModal();
  });

  $('.form-inline').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: false,
      cache: false,
      processData: false,
      success: function () {
        console.log('Вот что получено: ' + date);
      }
    });
  });

  function showModal() {
    $('.overlay').fadeIn('slow');
    $('.modal').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 2000);
  }

  function closeModal() {
    $('.modal').slideUp('slow');
    $('.overlay').fadeOut('slow');
  }
});