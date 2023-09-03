const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be completed");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log("Form Data:", formData);

  event.currentTarget.reset();
}
