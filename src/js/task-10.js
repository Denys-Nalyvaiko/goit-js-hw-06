function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsInputRef = document.querySelector("#controls input");
const controlsCreateBtnRef = document.querySelector("[data-create]");
const controlsDestroyBtnRef = document.querySelector("[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");

boxesContainerRef.classList.add("container-boxes");

controlsCreateBtnRef.addEventListener("click", handleCreateBtnClick);
controlsDestroyBtnRef.addEventListener("click", handleDestroyBtnClick);

function handleCreateBtnClick() {
  const boxesCount = Number(controlsInputRef.value);
  const boxesArr = [];

  let boxWidth = 30;
  let boxHeight = 30;

  if (boxesCount < controlsInputRef.min || boxesCount > controlsInputRef.max) {
    return alert("You must enter number betweeen 1 and 100");
  }

  for (let i = 0; i < boxesCount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = `${boxWidth}px`;
    divBox.style.height = `${boxHeight}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.borderRadius = "50%";

    boxWidth += 10;
    boxHeight += 10;

    boxesArr.push(divBox);
  }

  boxesContainerRef.append(...boxesArr);
}

function handleDestroyBtnClick() {
  boxesContainerRef.innerHTML = "";
}
