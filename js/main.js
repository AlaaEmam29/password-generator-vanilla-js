"use strict";
const copyBtn = document.querySelector(".btn-copy")
const passwordDOM = document.querySelector(".password")
const lengthPassword = document.querySelector("#lengthPassword")
const upperCaseLetterDOM = document.querySelector("#upperCaseLetter")
const lowerCaseLetterDOM = document.querySelector("#lowerCaseLetter")
const numberDOM = document.querySelector("#number")
const symbolDOM = document.querySelector("#symbol")
const generateBtn = document.querySelector(".generate-btn")
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function validateInput() {
    const len = lengthPassword.value
    if (len > 8 && len < 30) {
        return true;
    }
    else {
        passwordDOM.textContent = "Length Must be between minimum 8 and maximum 30"

        return false;
    }
}
function generateRandomPassword() {
    if (validateInput() === true) {
        let password = "";
        const len = lengthPassword.value

        if (upperCaseLetterDOM.checked) {
            password += getUppercase();
        }
        if (lowerCaseLetterDOM.checked) {
            password += getUppercase();
        }
        if (numberDOM.checked) {
            password += getNumber();
        }
        if (symbolDOM.checked) {
            password += getSymbol();
        }

        for (let i = password.length; i < len; i++) {
            const item = generateAnonymous();
            password += item;
        }

        if (password) passwordDOM.textContent = password;
        else passwordDOM.textContent = "Must be checked any box first"


    }
}
function generateAnonymous() {
    const passwordList = [];
    if (upperCaseLetterDOM.checked) {
        passwordList.push(getUppercase());
    }
    if (lowerCaseLetterDOM.checked) {
        passwordList.push(getUppercase());
    }
    if (numberDOM.checked) {
        passwordList.push(getNumber());
    }
    if (symbolDOM.checked) {
        passwordList.push(getSymbol());
    }
    if (passwordList.length === 0) return "";
    return passwordList[Math.floor(Math.random() * passwordList.length)];

}
generateBtn.addEventListener("click", generateRandomPassword)
copyBtn.addEventListener("click", function () {
    const value = passwordDOM.textContent;
    const textarea = document.createElement("textarea");

    if (!value) return;
    textarea.value = value;
    document.querySelector(".password-output").appendChild(textarea)
    textarea.select();
    textarea.remove();

    textarea.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(textarea.value);

    alert("Password copied to clipboard");

})