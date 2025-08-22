document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Aquí rediriges después de validar
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") || "index.html";
    sessionStorage.setItem("loggedIn", "true");
    window.location.replace(redirect);
});
