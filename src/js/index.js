
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;



//Passo 2 - dar um jeito de identificar quando o usuário clicar no botão.

botaoTrailer.addEventListener("click", () => {
    //Passo 4 - abrir a moda na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

//Passo 3 - dar um jeito de pegar o elemnto modal no js




//OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal

// - Passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");


//-Passo 2 - dar um jeito de identificar quando o usuário clicar no x

botaoFecharModal.addEventListener("click", () =>{
    //-Passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});





