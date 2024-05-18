documnet.addEventListener("DOMContentLoaded", (e) => {

    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");

    if (password.value === confirmPassword.value) {
        return true;
    }
    else {
        alert("passwords do not match!");
    }
});