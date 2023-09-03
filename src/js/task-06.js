const inputValidationRef = document.querySelector("#validation-input");

inputValidationRef.addEventListener("blur", handleInputValidationBlur);

function handleInputValidationBlur(event) {
  const inputValidation = event.currentTarget;

  if (inputValidation.value.length == inputValidation.dataset.length) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
    return;
  }

  inputValidation.classList.add("invalid");
  inputValidation.classList.remove("valid");
}
