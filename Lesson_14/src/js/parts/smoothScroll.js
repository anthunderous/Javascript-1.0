function smoothScroll(){
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
}

module.exports = smoothScroll;