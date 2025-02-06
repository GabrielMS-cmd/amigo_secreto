let listaDeAmigos = []
let lista = document.getElementById("listaAmigos")

// adiona os amigos na array
function adicionarAmigos(){
     let amigos = document.getElementById("amigo").value


    if (amigos === "") {
        console.log("está vazio")

    } else if (listaDeAmigos.includes(amigos)) {
        console.log("O nome já consta na lista")
    
    } else {
        listaDeAmigos.push(amigos)
        console.log(listaDeAmigos)

    }
  
    limparCampo()
    exibirAmigos()
    
    
}

// limpa a entrada a cada nome
function limparCampo(){
    amigos = document.getElementById("amigo").value = ""

}


function exibirAmigos(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""
    listaDeAmigos.forEach(amigo => { // lembrar de trocar para for depois
        let nome = document.createElement("li");
        nome.textContent = amigo;
        lista.appendChild(nome);
    });
    
}

