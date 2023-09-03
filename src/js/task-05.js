const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

const orirginalOutputNameRef = outputNameRef.textContent;

inputNameRef.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  if (event.currentTarget.value !== "") {
    return (outputNameRef.textContent = event.currentTarget.value);
  }

  return (outputNameRef.textContent = orirginalOutputNameRef);
}
