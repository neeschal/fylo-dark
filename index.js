const form = document.getElementById("form");
const email = document.getElementById("input");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  let emailValue = email.value;
  if (validateEmail(emailValue) && emailValue !== "") {
    error.classList.remove("view");
  } else {
    error.classList.add("view");
  }
});
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
