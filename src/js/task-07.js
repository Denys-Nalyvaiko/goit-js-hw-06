const fontSizeControlRef = document.querySelector("#font-size-control");
const textControlRef = document.querySelector("#text");

textControlRef.style.fontSize = `${fontSizeControlRef.value}px`;

fontSizeControlRef.addEventListener("input", handleFontSizeControlInput);

function handleFontSizeControlInput(event) {
  textControlRef.style.fontSize = `${event.currentTarget.value}px`;
}
