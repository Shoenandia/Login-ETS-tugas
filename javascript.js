function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "untag" && password === "1234") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";
        window.location.href = "https://shoenandia.github.io/ETS-Tugas/";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password!";
    }
    return false;
}


fetch('README.md')
    .then(response => response.text())
    .then(markdown => {
        const html = marked(markdown);
        document.getElementById('readme').innerHTML = html;
    });