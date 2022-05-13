/* eslint-disable no-unused-vars */
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

let duration;
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const timer = new Timer(durationInput, startButton, pauseButton, {

  onStart(totalDuration) {
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
      // eslint-disable-next-line no-mixed-operators
      perimeter * timeRemaining / duration - perimeter);
  },
});