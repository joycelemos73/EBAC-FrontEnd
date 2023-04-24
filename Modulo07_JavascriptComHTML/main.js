var form = document.getElementById("form-validacao");

form.addEventListener("submit", function(event) {

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.querySelector(".error-message").style.display = "";
        document.querySelector(".success-message").style.display = "block";
        document.getElementById("campoA").value = "";
        document.getElementById("campoB").value = "";
    } else {
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".success-message").style.display = "";
        document.getElementById("campoA").value = "";
        document.getElementById("campoB").value = "";
    }

    event.preventDefault();
});