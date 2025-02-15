const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
}))

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Load saved users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length > 0) {
        const lastUser = users[users.length - 1];
        nameInput.value = `${lastUser.name || ""}`;
        emailInput.value = `${lastUser.email || ""}`;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const userData = { name: nameInput.value, email: emailInput.value };

        // Add new user to the array
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Your details have been saved!");
    });
});