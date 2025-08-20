document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    
    alert("Login enviado: " + usuario);
});
