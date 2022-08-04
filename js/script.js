// FUNÇÃO - CRIAR TASK
let botao = document.getElementById("criar-nova-task");
let sectionInput = document.getElementById("input-task");

function criarTask(){

    let elemento = document.createElement('input');
    sectionInput.appendChild(elemento);
    botao.classList.add('esconder'); // criando input dinamicamente

    let botaoEnviar = document.getElementById("botaoEnviar"); //pegando botão enviar
    document.getElementById("botaoEnviar").removeAttribute("id");//removendo id original que o esconde
    botaoEnviar.classList.add('mostrar') //adicionando classe que o mostra

}

// ENVIAR TASK PARA CARD

// let valorInput = document.getElementsByClassName("texto-input");
// let texto = valorInput.value;

