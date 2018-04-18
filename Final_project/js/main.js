/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', () => {
  let
    overlay = document.querySelector('.overlay'),
    main = document.querySelector('.main'),
    custom = document.querySelector('.custom'),
    overlayBtn = overlay.querySelector('#popup-btn'),
    readyBtn = custom.querySelector('#ready'),
    resetBtn = main.querySelector('#reset'),
    skinSlider = document.querySelector('.skin'),
    hairSlider = document.querySelector('.hair'),
    clothesSlider = document.querySelector('.clothes'),
    genderRadioBtn = document.querySelector('.radio');
    
genderRadioBtn.addEventListener('change', (event)=>{
  let target = event.target,
  female = genderRadioBtn.querySelector('#female'),
  male = genderRadioBtn.querySelector('#male');

   if(target.List.contains('#female'))
   console.log('fsdfsdf');

});
  overlayBtn.addEventListener('click', () => {
    let
      customBlocks = custom.querySelectorAll('.custom > div');

    overlay.style.display = 'none';
    main.style.display = 'none';
    custom.style.display = 'flex';
    for (let i = 0; i < customBlocks.length; i++) {
      customBlocks[i].style.display = 'block';
    }
    skinSlider.showSlider(1);
    hairSlider.showSlider(1);
    clothesSlider.showSlider(1);
  });

  readyBtn.addEventListener('click', () => {
    custom.style.display = 'none';
    main.style.display = 'block';
  });

  resetBtn.addEventListener('click', () => {
    custom.style.display = 'flex';
    main.style.display = 'none';
  });



  class newCandidate {
    constructor(fullName, age, gender, politViews, biography, skinColor, hairStyle, clothes) {
      this.fullName = fullName;
      this.age = age;
      this.gender = gender;
      this.politViews = politViews;
      this.biography = biography;
      this.skinColor = skinColor;
      this.hairStyle = hairStyle;
      this.clothes = clothes;
    }
    addCandidate() {}
  }

  class slider {
    constructor(slider, slides, prev, next) {
      this.slider = slider;
      this.slides = slides;
      this.prevArrow = prev;
      this.nextArrow = next;
      this.slideIndex = 1;
    }
    showSlider(n) {
      if (n > this.slides.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = this.slides.length;
      }

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none';
      }

      this.slides[this.slideIndex - 1].style.display = 'block';
    }
    changeSlide(n) {
      this.showSlider(this.slideIndex += n);
    }
    prev() {
      this.changeSlide(-1);
    }
    next() {
      this.changeSlide(1);
    }
  }

  skinSlider = new slider(
    skinSlider,
    skinSlider.querySelectorAll('.skin-color'),
    skinSlider.querySelector('.prev'),
    skinSlider.querySelector('.next')
  );

  hairSlider = new slider(
    hairSlider,
    hairSlider.querySelectorAll('.hair-style'),
    hairSlider.querySelector('.prev'),
    hairSlider.querySelector('.next')
  );

  clothesSlider = new slider(
    clothesSlider,
    clothesSlider.querySelectorAll('.clothes-style'),
    clothesSlider.querySelector('.prev'),
    clothesSlider.querySelector('.next')
  );


  skinSlider.slider.addEventListener('click', (event) => {
    arrows.call(skinSlider);
  });
  hairSlider.slider.addEventListener('click', (event) => {
    arrows.call(hairSlider);
  });
  clothesSlider.slider.addEventListener('click', (event) => {
    arrows.call(clothesSlider);
  });
  function arrows() {
    let target = event.target;
    if (target.parentNode == this.prevArrow)
      this.prev();
    if (target.parentNode == this.nextArrow)
      this.next();
  }

  skinSlider.showSlider(1);
  hairSlider.showSlider(1);
  clothesSlider.showSlider(1);
});