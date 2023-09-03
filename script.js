document.addEventListener("DOMContentLoaded", function () {
    const mostrarMensagemBtn = document.getElementById("mostrarMensagem");
    const mensagem = document.getElementById("mensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.textContent = "Olá, Mundo!";
        mensagem.style.display = "block";
    });
});
