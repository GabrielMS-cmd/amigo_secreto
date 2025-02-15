let listaDeAmigos = [];
let lista = document.getElementById("listaAmigos");


function adicionarAmigos(){
    
    let amigos = document.getElementById("amigo").value;

    if (amigos === "") {
        exibirConflitos("h2", "O campo está vazio");

    } else if (listaDeAmigos.includes(amigos)) {
        exibirConflitos("h2", "O nome já consta na lista");
    
    } else {
        listaDeAmigos.push(amigos);
        console.log(listaDeAmigos);

    }
  
    limparCampo();
    exibirAmigos();

    
}


function limparCampo(){
    amigos = document.getElementById("amigo").value = "";

}


function exibirAmigos(){
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let nome = document.createElement("li");
        nome.textContent = listaDeAmigos[i];
        lista.appendChild(nome);
        
    }
    
}


function sortearAmigos() {
    
    if (listaDeAmigos.length === 0) {
        exibirConflitos("h2", "Não há amigos para serem sorteados");
        return; // Sai da função se não houver amigos
    }

    // Função interna para sortear um amigo por vez
    function sortearProximo() {
        if (listaDeAmigos.length === 0) {
            // Se a lista estiver vazia, limpa o resultado e exibe uma mensagem
            exibirResultado("");
            exibirConflitos("h2", "Todos os amigos foram sorteados!");
            return;
        }

        // Sorteia um índice aleatório
        let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        let nomeSorteado = listaDeAmigos[indiceSorteado];

        
        exibirResultado(nomeSorteado);
        listaDeAmigos.splice(indiceSorteado, 1); // remove da lista o nome já sorteado


        exibirAmigos();
        
    }

    
    sortearProximo();
}


function exibirResultado(nomeSorteado) {
    let sorteio = document.getElementById("sorteio");

    if (listaDeAmigos.length === 0){
        exibirConflitos("h2", "Digite o nome dos seus amigos");
        sorteio.innerHTML = "";
    
    } else {
        sorteio.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
    }
        
}
      
    

function exibirConflitos(tag,texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

// acionar botao enter
document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
    
        var btn = document.querySelector("#enter");
      
      btn.click();
    }
});