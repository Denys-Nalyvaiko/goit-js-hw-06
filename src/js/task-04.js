//* 1 спосіб

// const counterValueRef = document.querySelector("#value");
// let counterValue = Number(counterValueRef.textContent);
// const decrementBtnRef = document.querySelector("[data-action=decrement]");
// const incrementtBtnRef = document.querySelector("[data-action=increment]");

// decrementBtnRef.addEventListener("click", handleDecrementBtnClick);
// incrementtBtnRef.addEventListener("click", handleIncrementtBtnClick);

// function handleDecrementBtnClick() {
//   counterValue -= 1;
//   counterValueRef.textContent = counterValue;
// }

// function handleIncrementtBtnClick() {
//   counterValue += 1;
//   counterValueRef.textContent = counterValue;
// }

//* 2 спосіб

const counterValue = document.querySelector("#value");
const decrementBtnRef = document.querySelector("[data-action=decrement]");
const incrementtBtnRef = document.querySelector("[data-action=increment]");

decrementBtnRef.addEventListener("click", handleDecrementBtnClick);
incrementtBtnRef.addEventListener("click", handleIncrementtBtnClick);

function handleDecrementBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function handleIncrementtBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

//* 3 спосіб

// const listCounterRef = document.querySelector("#counter");
// const counterValue = listCounterRef.children[1];
// const decrementBtnRef = listCounterRef.firstElementChild;
// const incrementtBtnRef = listCounterRef.lastElementChild;

// decrementBtnRef.addEventListener("click", handleDecrementBtnClick);
// incrementtBtnRef.addEventListener("click", handleIncrementtBtnClick);

// function handleDecrementBtnClick() {
//   counterValue.textContent = Number(counterValue.textContent) - 1;
// }

// function handleIncrementtBtnClick() {
//   counterValue.textContent = Number(counterValue.textContent) + 1;
// }
