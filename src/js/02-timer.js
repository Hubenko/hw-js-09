import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
};
let currentTime = null;
refs.input.addEventListener('click', flatpickr);
refs.buttonStart.disabled = true;
// refs.buttonStart.addEventListener('click', qwe);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      refs.buttonStart.disabled = false;
      currentTime = selectedDates[0].getTime();
    }
    console.log(selectedDates[0].getTime());
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  start() {
    const startTime = currentTime - options.defaultDate;
    console.log(startTime);
  },
};
timer.start();
