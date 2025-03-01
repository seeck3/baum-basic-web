function handleSubmit() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let agree = document.getElementById("agree").checked;

    if (username === "" || email === "") {
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