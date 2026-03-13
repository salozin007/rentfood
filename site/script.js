let bolos = [

{ id:0, nome:"Bolo Chocolate", preco:25, categoria:"chocolate", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587" },

{ id:1, nome:"Bolo Brigadeiro", preco:30, categoria:"chocolate", img:"https://images.unsplash.com/photo-1605478522255-0d5c9e9e8f72" },

{ id:2, nome:"Bolo Morango", preco:28, categoria:"frutas", img:"https://images.unsplash.com/photo-1559620192-032c4bc4674e" },

{ id:3, nome:"Bolo Limão", preco:22, categoria:"frutas", img:"https://images.unsplash.com/photo-1621303837174-89787a7d4729" },

{ id:4, nome:"Bolo Maracujá", preco:27, categoria:"frutas", img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52" },

{ id:5, nome:"Bolo Red Velvet", preco:35, categoria:"especial", img:"https://images.unsplash.com/photo-1599785209796-3e1f1c7e8f16" },

{ id:6, nome:"Bolo Ninho", preco:34, categoria:"especial", img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3" },

{ id:7, nome:"Bolo Oreo", preco:36, categoria:"especial", img:"https://images.unsplash.com/photo-1603532648955-039310d9ed75" }

]

let carrinho=[]
let notaAtual=0
let boloAtual=null

function mediaEstrelas(id){

let avaliacoes=JSON.parse(localStorage.getItem("avaliacoes_"+id))||[]

if(avaliacoes.length===0) return "⭐0"

let soma=0

avaliacoes.forEach(a=>soma+=a.nota)

let media=(soma/avaliacoes.length).toFixed(1)

return "⭐"+media

}

function carregar(lista){

let container=document.getElementById("produtos")

container.innerHTML=""

lista.forEach((bolo,index)=>{

let estrelas=mediaEstrelas(bolo.id)

container.innerHTML+=`

<div class="card" onclick="abrirDetalhe(${index})">

<div class="card-img">

<img src="${bolo.img}">

<div class="rating">${estrelas}</div>

</div>

<h3>${bolo.nome}</h3>

<p>R$ ${bolo.preco}</p>

<button onclick="event.stopPropagation(); adicionar(${index})">
Adicionar
</button>

</div>

`

})

}

carregar(bolos)

function adicionar(index){

let bolo=bolos[index]

let item=carrinho.find(p=>p.nome===bolo.nome)

if(item){

item.qtd++

}else{

carrinho.push({...bolo,qtd:1})

}

atualizarCarrinho()

}

function atualizarCarrinho(){

let lista=document.getElementById("lista")

lista.innerHTML=""

let subtotal=0

carrinho.forEach((item,i)=>{

subtotal+=item.preco*item.qtd

lista.innerHTML+=`

<li>

${item.nome}

<div class="qtd">

<button onclick="diminuir(${i})">-</button>

<span>${item.qtd}</span>

<button onclick="aumentar(${i})">+</button>

</div>

R$ ${item.preco*item.qtd}

<button onclick="remover(${i})">❌</button>

</li>

`

})

let entrega=5

document.getElementById("contador").innerText=carrinho.length
document.getElementById("subtotal").innerText="Subtotal: R$ "+subtotal
document.getElementById("total").innerText="Total: R$ "+(subtotal+entrega)

}

function aumentar(i){
carrinho[i].qtd++
atualizarCarrinho()
}

function diminuir(i){

if(carrinho[i].qtd>1){
carrinho[i].qtd--
}else{
carrinho.splice(i,1)
}

atualizarCarrinho()

}

function remover(i){
carrinho.splice(i,1)
atualizarCarrinho()
}

function limparCarrinho(){
carrinho=[]
atualizarCarrinho()
}

function abrirCarrinho(){
document.getElementById("carrinho").classList.add("ativo")
document.getElementById("overlay").classList.add("ativo")
}

function fecharCarrinho(){
document.getElementById("carrinho").classList.remove("ativo")
document.getElementById("overlay").classList.remove("ativo")
}

function finalizar(){

if(carrinho.length==0){
alert("Carrinho vazio")
}else{
alert("Pedido realizado 🎉")
}

}

function abrirDetalhe(index){

let bolo=bolos[index]

boloAtual=bolo.id

document.getElementById("detalhe-img").src=bolo.img
document.getElementById("detalhe-nome").innerText=bolo.nome
document.getElementById("detalhe-preco").innerText="R$ "+bolo.preco

document.getElementById("detalhe").classList.add("ativo")

}

function fecharDetalhe(){
document.getElementById("detalhe").classList.remove("ativo")
}

function avaliar(n){

notaAtual=n

let estrelas=document.querySelectorAll(".estrela")

estrelas.forEach((e,i)=>{

e.style.color=i<n?"gold":"gray"

})

}

function enviarOpiniao(){

let texto=document.getElementById("opiniao").value

if(notaAtual==0){
alert("Escolha estrelas")
return
}

let lista=JSON.parse(localStorage.getItem("avaliacoes_"+boloAtual))||[]

lista.push({
nota:notaAtual,
texto:texto
})

localStorage.setItem("avaliacoes_"+boloAtual,JSON.stringify(lista))

alert("Avaliação enviada ⭐")

notaAtual=0
document.getElementById("opiniao").value=""

carregar(bolos)

}