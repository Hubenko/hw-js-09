import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let currentTime = null;

refs.input.addEventListener('click', flatpickr);
refs.buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.buttonStart.disabled = false;
      currentTime = selectedDates[0];
      Notiflix.Notify.success('The date is correct');
    }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const qwe = currentTime;
    setInterval(() => {
      const asd = Date.now();
      this.isActive = true;
      const deltaTime = qwe - asd;
      const time = convertMs(deltaTime);
      updateClock(time);
    }, 1000);
  },
};

refs.buttonStart.addEventListener('click', () => {
  timer.start();
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClock({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
