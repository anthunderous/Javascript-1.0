function calc(){
  let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    $('#total').hide();
    total = (daysSum + personsSum) * 4000;
    if ((restDays.value == '') || (persons.value == '') || (restDays.value <= 0) || (persons.value <= 0) || (restDays.value != parseInt(restDays.value)) || (persons.value != parseInt(persons.value))) {
      totalValue.innerHTML = 0;
      $('#total').fadeIn();
    } else {
      totalValue.innerHTML = total;
      $('#total').fadeIn();
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    $('#total').hide();
    total = (daysSum + personsSum) * 4000;
    if ((restDays.value == '') || (persons.value == '') || (restDays.value <= 0) || (persons.value <= 0) || (restDays.value != parseInt(restDays.value)) || (persons.value != parseInt(persons.value))) {
      totalValue.innerHTML = 0;
      $('#total').fadeIn();
    } else {
      totalValue.innerHTML = total;
      $('#total').fadeIn();
    }

  });

  place.addEventListener('change', function () {
    $('#total').hide();
    if ((restDays.value == '') || (persons.value == '') || (restDays.value <= 0) || (persons.value <= 0) || (restDays.value != parseInt(restDays.value)) || (persons.value != parseInt(persons.value))) {
      totalValue.innerHTML = 0;
      $('#total').fadeIn();

    } else {
      totalValue.innerHTML = total * +this.options[this.selectedIndex].value;
      $('#total').fadeIn();
    }
  });
}

module.exports = calc;