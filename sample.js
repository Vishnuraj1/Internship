let loginForm = document.getElementById("loginForm");
// console.log(loginForm)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (name.value == "" || username.value == "" || password.value == "") {
        alert("Ensure you input a value in All fields!");
    } else {
        alert("This form has been successfully submitted!");
        document.write(
            `This form has a username of ${name.value} and his Email id is ${username.value}`
        );
    }
});