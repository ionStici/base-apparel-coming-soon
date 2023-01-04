"use strict";

const form = document.querySelector(".form");
const btn = document.querySelector(".form__btn");
const input = document.querySelector(".form__input");
const message = document.querySelector(".form__message");
const errorIcon = document.querySelector(".form__error-icon");

function checkIfEmailIsValid(input) {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        // Valid
        return true;
    } else {
        // Invalid
        return false;
    }
}

const valid = function () {
    message.textContent = "Email sent, thank you!";
    message.style.opacity = "1";
    setTimeout(() => {
        message.style.opacity = "0";
        input.value = "";
    }, 2000);
    errorIcon.style.opacity = "0";
    input.style.border = "1px solid rgba(238, 139, 139, 1)";
    input.setAttribute("readonly", "readonly");
};

const invalid = function () {
    message.textContent = "Please provide a valid email";
    message.style.opacity = "1";
    errorIcon.style.opacity = "1";
    input.style.border = "2px solid rgba(249, 100, 100, 1)";
};

const checkEmailController = function (e) {
    e.preventDefault();

    const email = input.value;
    const isValid = checkIfEmailIsValid(email);
    isValid ? valid() : invalid();
};

btn.addEventListener("click", checkEmailController);
form.addEventListener("submit", checkEmailController);
