function modal(){
  
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
}

module.exports = modal;