let loginForm = document.getElementById("loginForm");
// console.log(loginForm)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if ( username.value == "Vishnuraj" && password.value == "Azheekal") {
        alert("You have logged in successfully");
        document.write(`Welcome to home page ${username.value}`)
    } else {
        alert("Invalid username or password");
        // document.write(
        //     `This form has a username of ${username.value}`
        // );
    }
});