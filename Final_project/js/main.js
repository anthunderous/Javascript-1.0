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
    genderRadioBtn = document.querySelector('.radio'),
    gender = 1,
    sex = genderRadioBtn.querySelector('#male'),
    select = document.querySelector('#select'),
    bio = document.querySelector('#bio'),
    mainCards = document.querySelector('.main-cards'),
    mainCardsItem = mainCards.querySelectorAll('.main-cards-item'),
    personSkin = document.querySelector('.person-skin'),
    personHair = document.querySelector('.person-hair'),
    personClothes = document.querySelector('.person-clothes'),
    nameCustom = custom.querySelector('#name'),
    votingBtn = document.querySelector('#voting'),
    crimeBtn = document.querySelector('#crime'),
    ageCustom = custom.querySelector('#age'),
    resultCount = document.querySelectorAll('.result-count'),
    progressBar = document.querySelectorAll('.progress-bar');

  class Candidate {
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
    createCandidate() {
      var
        myCandidateBlock = mainCardsItem[0].cloneNode(true);
      mainCardsItem = mainCards.querySelectorAll('.main-cards-item');
      myCandidateBlock.querySelector('.name').textContent = this.fullName;
      myCandidateBlock.querySelector('.age').textContent = this.age;
      myCandidateBlock.querySelector('.sex').textContent = this.gender;
      myCandidateBlock.querySelector('.views').textContent = this.politViews;
      myCandidateBlock.querySelector('.bio').textContent = this.biography;
      mainCardsItem[0].parentNode.insertBefore(myCandidateBlock, mainCardsItem[0]);

    }
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
      if (gender == 1 && (this.slider != document.querySelector('.skin') && this.slideIndex > 3))
        if (this.slideIndex == this.slides.length)
          this.slideIndex = 3;
        else
          this.slideIndex = 1;

      if (gender == 0 && (this.slider != document.querySelector('.skin') && this.slideIndex < 4))
        if (this.slideIndex == 1)
          this.slideIndex = 4;
        else
          this.slideIndex = 6;
      this.slides[this.slideIndex - 1].style.display = 'block';
      return this.slideIndex;
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

    arrows() {
      let target = event.target;
      if (target.parentNode == this.prevArrow)
        this.prev();
      if (target.parentNode == this.nextArrow)
        this.next();
    }
  }
  var temp = 0;

  function myRandom(n) {
    mainCardsItem = mainCards.querySelectorAll('.main-cards-item');
    resultCount = document.querySelectorAll('.result-count');
    progressBar = document.querySelectorAll('.progress-bar');
    let random = getRandomInt(0, 100 - n),
      result = 100;
    resultCount[0].textContent = random + n + '%';
    progressBar[0].style.height = random + n + '%';
    result -= (random + n);
    random = getRandomInt(0, (100 - random - n));
    resultCount[1].textContent = random + '%';
    progressBar[1].style.height = random + '%';
    result -= random;
    resultCount[2].textContent = result + '%';
    progressBar[2].style.height = result + '%';
    let max = 0,
      j = 0;
    for (let i = 0; i < resultCount.length; i++) {
      if ((parseInt(resultCount[i].textContent.substring(0, resultCount[i].textContent.length - 1))) > max) {
        max = parseInt(resultCount[i].textContent);
        j = i;
      }
      mainCardsItem[i].classList.remove('main-cards-item-active');
    }
    mainCardsItem[j].classList.add('main-cards-item-active');
  }
  votingBtn.addEventListener('click', () => {

    myRandom(0);
    temp = 1;
  });

  crimeBtn.addEventListener('click', () => {
    if (temp == 1)
      myRandom(25);
    else
      return;
  });
  genderRadioBtn.addEventListener('change', function setGender(event) {
    let target = event.target,
      female = genderRadioBtn.querySelector('#female'),
      male = genderRadioBtn.querySelector('#male');

    if (target == female) {
      gender = 0;
      sex = female;
    }
    if (target == male) {
      gender = 1;
      sex = male;
    }
    refresh();
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
    refresh();
  });

  readyBtn.addEventListener('click', () => {

    if (nameCustom.value == '' || ageCustom.value == '' || ageCustom.value < 18 || bio.value == '' || isNaN(ageCustom.value)) {
      alert('Вы не верно ввели данные');
      return;
    } else {
      custom.style.display = 'none';
      main.style.display = 'block';
      myCandidate = new Candidate(
        nameCustom.value,
        ageCustom.value,
        sex.value,
        select.options[select.selectedIndex].value,
        bio.value,
        personSkin,
        personHair,
        personClothes);

      for (let i = 0; i < resultCount.length; i++) {
        resultCount[i].textContent = '0%';
        progressBar[i].style.height = '0';
        mainCardsItem[i].classList.remove('main-cards-item-active');
      }
      myCandidate.createCandidate();
    }
    let
    mainPerson = document.getElementsByClassName('candidate-block')[0],
    temp = mainPerson.querySelector('.photo'),
    customPerson = document.getElementsByClassName('person')[0];
    resultCount = document.querySelectorAll('.result-count');
    mainPerson.removeChild(temp);
    mainPerson.insertBefore(customPerson, mainPerson.querySelector('.result'));
    mainPerson.querySelector('.person').style.marginRight = '25px';
  });

  resetBtn.addEventListener('click', () => {
    mainCardsItem = mainCards.querySelectorAll('.main-cards-item');
    custom.style.display = 'flex';
    main.style.display = 'none';
    nameCustom.value = '';
    ageCustom.value = '';
    genderRadioBtn.querySelector('#female').removeAttribute('checked');
    genderRadioBtn.querySelector('#male').setAttribute('checked', 'checked');
    select.selectedIndex = 0;
    bio.value = '';
    refresh();
    if (mainCardsItem.length > 2)
      mainCardsItem[0].parentNode.removeChild(mainCardsItem[0]);
  });

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
    refreshSkin();
  });
  hairSlider.slider.addEventListener('click', (event) => {
    refreshHair();
  });
  clothesSlider.slider.addEventListener('click', (event) => {
    refreshClothes();
  });

  function refreshSkin() {
    skinSlider.arrows();
    let count = skinSlider.slideIndex;
    if (gender == 0)
      count += 3;
    personSkin.style.background = `url("img/skin/skin-${count}.png") center no-repeat`;
    personSkin.style.backgroundSize = 'cover';
  }

  function refreshHair() {
    hairSlider.arrows();
    personHair.style.background = `url("img/hair/construct/hair-${hairSlider.slideIndex}.png") center no-repeat`;
    personHair.style.backgroundSize = 'cover';
  }

  function refreshClothes() {
    clothesSlider.arrows();
    personClothes.style.background = `url("img/clothes/construct/clothes-${clothesSlider.slideIndex}.png") center no-repeat`;
    personClothes.style.backgroundSize = 'cover';
  }

  function refresh() {
    skinSlider.showSlider(1);
    refreshSkin();
    hairSlider.showSlider(1);
    refreshHair();
    clothesSlider.showSlider(1);
    refreshClothes();
  }

  function getRandomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  refresh();
});