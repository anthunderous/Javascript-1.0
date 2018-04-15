/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', () => {
  let
    tab = require("../parts/tab.js"),
    timer = require("../parts/timer.js"),
    formAJAX = require("../parts/formAJAX.js"),
    slider = require("../parts/slider.js"),
    calc = require("../parts/calc.js"),
    modal = require("../parts/modal.js"),
    smoothScroll = require("../parts/smoothScroll.js");

    tab();
    timer();
    formAJAX();
    slider();
    calc();
    modal();
    smoothScroll();
});