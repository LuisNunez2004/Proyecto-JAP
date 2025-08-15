document.getElementById("login-button").addEventListener("click", function() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect") || "index.html";
  window.location.replace(redirect);
  sessionStorage.setItem("loggedIn", "true");
}); //redirecciona al usuario a la pagina anterior, para resumir su actividad
