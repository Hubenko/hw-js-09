const refs = {
  buttonOn: document.querySelector('button[data-start]'),
  buttonOff: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;
console.log(refs);
console.log(refs.buttonOn);

refs.buttonOn.addEventListener('click', startColor);
refs.buttonOff.addEventListener('click', stopColor);

function startColor() {
  timerId = setInterval(onChangeColor, 1000);
  refs.buttonOn.disabled = true;
}

function onChangeColor() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopColor() {
  clearInterval(timerId);
  refs.buttonOn.disabled = false;
}
