function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", handleChangeColorClick);

function handleChangeColorClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
}
