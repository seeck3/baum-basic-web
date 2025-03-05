function handleSubmit() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let agree = document.getElementById("agree").checked;

    if (username === "" || password === "") {
        document.getElementById("error").innerText = "Please fill in all fields.";
        return false;
    }

    if (!agree) {
        document.getElementById("error").innerText = "You must agree to the terms.";
        return false;
    }

    document.getElementById("message").innerText = "Registration successful!";
    return false; // Prevent page refresh
}