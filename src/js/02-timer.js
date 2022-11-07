// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   buttonStart: document.querySelector('button[data-start]'),
// };
// let currentTime = null;

// refs.input.addEventListener('click', flatpickr);
// refs.buttonStart.disabled = true;
// // refs.buttonStart.addEventListener('click', timer.start());

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] <= options.defaultDate) {
//       window.alert('Please choose a date in the future');
//     } else {
//       refs.buttonStart.disabled = false;
//       currentTime = selectedDates[0];
//     }
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr('#datetime-picker', options);

// const timer = {
//   start() {
//     const startTime = new Date();
//     setInterval(() => {
//       const currentTime = new Date();

//       console.log(startTime - currentTime);
//     }, 1000);
//   },
// };
// timer.start();

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
