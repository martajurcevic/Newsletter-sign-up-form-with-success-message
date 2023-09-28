const doc = document;

const isValidEmail = (email) => {
  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(email);
};

const $emailInput = doc.getElementById("email");
const $errorMessage = doc.getElementById("error-message");
const $newsletterForm = doc.getElementById("newsletter-form");
let touched = false;
let validEmail = false;

const showErrorMessage = () => {
  const value = $emailInput.value.trim(); // Trim whitespace from input
  const isValid = isValidEmail(value);

  $errorMessage.classList.toggle("error-message--hidden", isValid || !touched);
  $emailInput.classList.toggle(
    "newsletter__email-input--error",
    !isValid && touched
  );

  validEmail = isValid;
};

$emailInput.addEventListener("input", () => {
  touched = true;
  showErrorMessage();
});

$newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validEmail) {
    alert("The email is not valid.");
  } else {
    $emailInput.value = "";
    window.location.href = "success.html";
  }
});
