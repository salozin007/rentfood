let total = 0
let contador = 0
let carrinho = []

function adicionar(nome, preco){

    contador++
    total += preco

    carrinho.push({nome, preco})

    atualizarCarrinho()
}

function atualizarCarrinho(){

    let lista = document.getElementById("lista")
    lista.innerHTML = ""

    carrinho.forEach(function(item, index){

        let li = document.createElement("li")

        li.innerHTML = `
            ${item.nome} - R$ ${item.preco}
            <button onclick="removerItem(${index})">❌</button>
        `

        lista.appendChild(li)

    })

    document.getElementById("contador").innerText = contador
    document.getElementById("total").innerText = "Total: R$ " + total

}

function removerItem(index){

    total -= carrinho[index].preco
    contador--

    carrinho.splice(index, 1)

    atualizarCarrinho()
}

function limparCarrinho(){

    total = 0
    contador = 0
    carrinho = []

    atualizarCarrinho()
}

function concluirCompra(){

    if(total === 0){
        alert("Seu carrinho está vazio!")
        return
    }

    alert("Compra realizada com sucesso! 🎉")

    limparCarrinho()
    fecharCarrinho()
}

function abrirCarrinho(){

    document.getElementById("carrinho").classList.add("ativo")
    document.getElementById("overlay").classList.add("ativo")

}

function fecharCarrinho(){

    document.getElementById("carrinho").classList.remove("ativo")
    document.getElementById("overlay").classList.remove("ativo")

}

function mostrar(tipo){

    let bolos = document.querySelectorAll(".card")

    bolos.forEach(function(bolo){

        if(tipo === "todos"){
            bolo.style.display = "block"
        }
        else if(bolo.classList.contains(tipo)){
            bolo.style.display = "block"
        }
        else{
            bolo.style.display = "none"
        }

    })

}