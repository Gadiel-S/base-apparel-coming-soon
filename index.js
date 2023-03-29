const button = document.querySelector(".content .button");
const form = document.querySelector(".content form");
const input = document.querySelector("input");
const message = document.querySelector(".error-message");
const icon = document.querySelector(".error-icon");
const inputValue = input.value.trim();

button.addEventListener("click", validate)
form.addEventListener("submit", validate)

function validate(e) {
    e.preventDefault()
  
    const inputValue = input.value.trim()
  
    if (!isEmail(inputValue)) {
        message.classList.remove("hidden");
        icon.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
        icon.classList.add("hidden");
    }
  }

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
  }