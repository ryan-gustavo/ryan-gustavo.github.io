const download = document.getElementById("block-download");
const mensagem = document.getElementById('mensagem-block');

download.addEventListener("click", function() {
    console.log("download clicked")
    mensagem.classList.remove('oculto');

    // Para esconder a mensagem após alguns segundos (opcional):
    setTimeout(() => {
        mensagem.classList.add('oculto');
    }, 3000); // 3000 milissegundos = 3 segundos
})