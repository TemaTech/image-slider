import './css/styles.css';

const backwardButton = document.querySelector('button#backward');
const forwardButton = document.querySelector('button#forward');
const dotButtons = document.querySelectorAll('.dot');

let currentIndex = 0;

function setIndex(num) {
  currentIndex += num;
}

function displaySlide(num) {
  const slides = document.querySelectorAll('.img');
  if (num > slides.length - 1) {
    currentIndex = 0;
  } else if (num < 0) {
    currentIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentIndex].style.display = 'block';
}

backwardButton.addEventListener('click', () => {
  setIndex(-1);
  displaySlide(currentIndex);
});

forwardButton.addEventListener('click', () => {
  setIndex(1);
  displaySlide(currentIndex);
});

dotButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('selected');
    const array = Array.from(dotButtons);
    const index = array.indexOf(array.find((item) => item.className === 'dot selected'));
    currentIndex = index;
    button.classList.remove('selected');
    displaySlide(currentIndex);
  });
});
