// const range = document.getElementsByClassName('slider__input');
// const img = document.getElementsByClassName('slider__image');
// const maxRange = 100;
// const minRange = 1;

// range.addEventListener('mousemove', onMouseMove);
// function onMouseMove(event) {
//     img.style.width += '10px';
// };

const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

// Задаємо значення для зображення
let imageSize = 300;

// Змінюємо розмір зображення
function changeImageSize(value) {
  imageSize = value;
  image.style.width = `${imageSize}%`;
}

const debounceChangeImageSize = _.debounce(changeImageSize);

// Додаємо івент на переміщення слайдера
slider.addEventListener('input', function(event) {
  const value = event.target.value;
  debounceChangeImageSize(value);
});


const square = document.getElementById('box'); // отримуємо елемент, який треба переміщувати

// виконуємо функцію, при переміщенні мишкою
function handleMouseMove (event) {
  const x = event.clientX;
  const y = event.clientY;
//   square.style.transform = `translate(${x}px, ${y}px)`;
    square.style.top = `${y}px`;
    square.style.left = `${x}px`;
    console.log(x, y);
};

// прослуховуємо подію руху миші
document.addEventListener('mousemove', _.debounce(handleMouseMove, 100));
