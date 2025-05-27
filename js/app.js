const $formSection = document.querySelector(".form-section");

const $inputFirstName = document.querySelector("#input-first-name");
const $inputLastName = document.querySelector("#input-last-name");
const $inputEmail = document.querySelector("#input-email");
const $inputPassword = document.querySelector("#input-password");

const $errorTexts = document.querySelectorAll(".error-text");

async function checkForm({ firstName, lastName, email, password }) {
  let err = false;

  if (firstName === "") {
    $inputFirstName.classList.add("error");
    $errorTexts[0].classList.remove("hidden");
    err = true;
  } else {
    $inputFirstName.classList.remove("error");
    $errorTexts[0].classList.add("hidden");
  }

  if (lastName === "") {
    $inputLastName.classList.add("error");
    $errorTexts[1].classList.remove("hidden");
    err = true;
  } else {
    $inputLastName.classList.remove("error");
    $errorTexts[1].classList.add("hidden");
  }

  if (email === "") {
    $inputEmail.classList.add("error");
    $errorTexts[2].textContent = "Email cannot be empty";
    $errorTexts[2].classList.remove("hidden");
    err = true;
  } else if (
    email.includes(".com") === false &&
    email.includes(".fr") === false
  ) {
    $inputEmail.classList.add("error");
    $errorTexts[2].textContent = "Looks like this is not an email";
    $errorTexts[2].classList.remove("hidden");
    err = true;
  } else {
    $inputEmail.classList.remove("error");
    $errorTexts[2].classList.add("hidden");
  }

  if (password === "") {
    $inputPassword.classList.add("error");
    $errorTexts[3].classList.remove("hidden");
    err = true;
  } else {
    $inputPassword.classList.remove("error");
    $errorTexts[3].classList.add("hidden");
  }
}

$formSection.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = $inputFirstName.value;
  const lastName = $inputLastName.value;
  const email = $inputEmail.value;
  const password = $inputPassword.value;

  const sendAccount = await checkForm({ firstName, lastName, email, password });
});
