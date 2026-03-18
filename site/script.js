<<<<<<< HEAD
let total = 0
let contador = 0
let carrinho = []

function adicionar(nome, preco){

    contador++
    total += preco

    carrinho.push({nome, preco})

    atualizarCarrinho()
=======
// =======================
// DADOS DOS BOLOS - 28 BOLOS COM FOTOS REAIS! 🎉
// =======================
let bolos = [
    // 🍫 CHOCOLATE (10 bolos)
    { id: 0, nome:"🍫 Bolo de Chocolate", preco:25, categoria:"chocolate", img:"bolochoc.avif" },
    { id: 1, nome:"🇧🇷 Bolo Brigadeiro", preco:30, categoria:"chocolate", img:"bolobri.jpg" },
    { id: 2, nome:"🍫 Bolo de Chocolate com Morango", preco:32, categoria:"chocolate", img:"bolomo.png" },
    { id: 3, nome:"🍫 Bolo Trufado", preco:35, categoria:"chocolate", img:"bolotru.jpg" },
    { id: 4, nome:"🍫 Bolo de Chocolate Branco", preco:28, categoria:"chocolate", img:"bolobran.jpg" },
    { id: 5, nome:"🍫 Bolo Meio Amargo", preco:29, categoria:"chocolate", img:"boloamar.avif" },
    { id: 6, nome:"🍫 Bolo 3 Chocolates", preco:38, categoria:"chocolate", img:"bolo3.avif" },
    { id: 7, nome:"🍫 Bolo Chocolate com Doce de Leite", preco:33, categoria:"chocolate", img:"bolodoc.jpg" },
    { id: 8, nome:"🍫 Bolo Floresta Negra", preco:34, categoria:"chocolate", img:"boloflo.jpg" },
    { id: 9, nome:"🍫 Bolo Ferrero Rocher", preco:42, categoria:"chocolate", img:"boloferr.jpg" },

    // 🍓 FRUTAS (10 bolos)
    { id: 10, nome:"🍓 Bolo de Morango", preco:28, categoria:"frutas", img:"bolomorang.jpg" },
    { id: 11, nome:"🍋 Bolo de Limão", preco:22, categoria:"frutas", img:"bololim.webp" },
    { id: 12, nome:"🥭 Bolo Maracujá", preco:27, categoria:"frutas", img:"bolomara.jpg" },
    { id: 13, nome:"🍍 Bolo de Abacaxi", preco:24, categoria:"frutas", img:"boloabac.jpg" },
    { id: 14, nome:"🍌 Bolo de Banana", preco:23, categoria:"frutas", img:"bolobana.jpg" },
    { id: 15, nome:"🍑 Bolo de Pêssego", preco:26, categoria:"frutas", img:"bolopess.jpeg" },
    { id: 16, nome:"🍊 Bolo Laranja", preco:25, categoria:"frutas", img:"bololar.jpg" },
    { id: 17, nome:"🥝 Bolo Kiwi", preco:29, categoria:"frutas", img:"bolokiwi.jpg" },
    { id: 18, nome:"🍒 Bolo Cereja", preco:31, categoria:"frutas", img:"bolocer.jpg" },
    { id: 19, nome:"🍇 Bolo Uva", preco:28, categoria:"frutas", img:"bolouva.jpg" },

    // ⭐ ESPECIAL (8 bolos)
    { id: 20, nome:"❤️ Red Velvet", preco:35, categoria:"especial", img:"bolored.jpg" },
    { id: 21, nome:"🥛 Bolo Ninho", preco:34, categoria:"especial", img:"bolonin.jpg" },
    { id: 22, nome:"🍪 Bolo Oreo", preco:36, categoria:"especial", img:"bolooreo.jpg" },
    { id: 23, nome:"🌰 Bolo de Castanha", preco:37, categoria:"especial", img:"bolocas.webp" },
    { id: 24, nome:"🥥 Bolo de Coco", preco:26, categoria:"especial", img:"bolococo.png" },
    { id: 25, nome:"☕ Bolo de Café", preco:30, categoria:"especial", img:"bolocafe.png" },
    { id: 26, nome:"🥜 Bolo de Amendoim", preco:28, categoria:"especial", img:"boloamen.jpg" },
    { id: 27, nome:"🌈 Bolo Rainbow", preco:45, categoria:"especial", img:"bolorain.jpg" }
];

let carrinho = [];
let notaAtual = 0;
let boloAtual = null;

// =======================
// RESTO DO CÓDIGO (igual ao anterior)
// =======================
function mediaEstrelas(id) {
    let avaliacoes = JSON.parse(localStorage.getItem("avaliacoes_" + id)) || [];
    if (avaliacoes.length === 0) return "⭐ 0";
    let soma = 0;
    avaliacoes.forEach(a => soma += a.nota);
    let media = (soma / avaliacoes.length).toFixed(1);
    return "⭐ " + media;
}

function carregar(lista) {
    let container = document.getElementById("produtos");
    if (!container) return;

    container.innerHTML = "";

    lista.forEach((bolo, index) => {
        let estrelas = mediaEstrelas(bolo.id);

        container.innerHTML += `
        <div class="card" onclick="abrirDetalhe(${index})">
            <div class="card-img">
                <img src="${bolo.img}" alt="${bolo.nome}" loading="lazy">
                <div class="rating">${estrelas}</div>
            </div>
            <h3>${bolo.nome}</h3>
            <p>R$ ${bolo.preco.toFixed(2)}</p>
            <button onclick="event.stopPropagation(); adicionar(${index})">
                ➕ Adicionar
            </button>
        </div>
        `;
    });
}

function filtrar(categoria) {
    let botoes = document.querySelectorAll(".categorias button");
    botoes.forEach(btn => btn.classList.remove("ativo"));

    if (event) event.target.classList.add("ativo");

    if (categoria === "todos") {
        carregar(bolos);
        return;
    }

    let filtrados = bolos.filter(b => b.categoria === categoria);
    carregar(filtrados);
}

function adicionar(index) {
    let bolo = bolos[index];
    let item = carrinho.find(p => p.nome === bolo.nome);

    if (item) {
        item.qtd++;
    } else {
        carrinho.push({ ...bolo, qtd: 1 });
    }
    atualizarCarrinho();
>>>>>>> 10134f1401cd9f20df9e2facad06c8adf91e447b
}

function atualizarCarrinho() {
    let lista = document.getElementById("lista");
    if (!lista) return;

<<<<<<< HEAD
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
=======
    lista.innerHTML = "";
    let subtotal = 0;

    carrinho.forEach((item, i) => {
        subtotal += item.preco * item.qtd;

        lista.innerHTML += `
        <li style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #eee;">
            <span>${item.nome}</span>
            <div style="display: flex; align-items: center; gap: 15px;">
                <button onclick="diminuir(${i})" style="width: 30px; height: 30px; border-radius: 50%; border: none; background: #ff6b6b; color: white; cursor: pointer;">-</button>
                <span style="font-weight: 600; min-width: 25px; text-align: center;">${item.qtd}</span>
                <button onclick="aumentar(${i})" style="width: 30px; height: 30px; border-radius: 50%; border: none; background: #ff6b6b; color: white; cursor: pointer;">+</button>
                <span style="font-weight: 600; color: #ff6b6b;">R$ ${(item.preco * item.qtd).toFixed(2)}</span>
                <button onclick="remover(${i})" style="background: none; border: none; font-size: 18px; cursor: pointer; color: #ff4757;">❌</button>
            </div>
        </li>
        `;
    });
>>>>>>> 10134f1401cd9f20df9e2facad06c8adf91e447b

    let entrega = 5;
    document.getElementById("contador").innerText = carrinho.reduce((sum, item) => sum + item.qtd, 0);
    document.getElementById("subtotal").innerText = "Subtotal: R$ " + subtotal.toFixed(2);
    document.getElementById("total").innerText = "Total: R$ " + (subtotal + entrega).toFixed(2);
}

<<<<<<< HEAD
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
=======
function aumentar(i) { carrinho[i].qtd++; atualizarCarrinho(); }
function diminuir(i) {
    if (carrinho[i].qtd > 1) { carrinho[i].qtd--; }
    else { carrinho.splice(i, 1); }
    atualizarCarrinho();
}
function remover(i) { carrinho.splice(i, 1); atualizarCarrinho(); }
function limparCarrinho() { carrinho = []; atualizarCarrinho(); }

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("ativo");
    document.getElementById("overlay").classList.add("ativo");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("ativo");
    document.getElementById("overlay").classList.remove("ativo");
}

function abrirDetalhe(index) {
    let bolo = bolos[index];
    boloAtual = bolo.id;

    document.getElementById("detalhe-img").src = bolo.img;
    document.getElementById("detalhe-img").alt = bolo.nome;
    document.getElementById("detalhe-nome").innerText = bolo.nome;
    document.getElementById("detalhe-preco").innerText = "R$ " + bolo.preco.toFixed(2);

    let estrelas = document.querySelectorAll(".estrela");
    estrelas.forEach(e => e.classList.remove("ativa"));

    document.getElementById("detalhe").classList.add("ativo");
}

function fecharDetalhe() {
    document.getElementById("detalhe").classList.remove("ativo");
}

function avaliar(n) {
    notaAtual = n;
    let estrelas = document.querySelectorAll(".estrela");
    estrelas.forEach((e, i) => {
        if (i < n) e.classList.add("ativa");
        else e.classList.remove("ativa");
    });
}

function enviarOpiniao() {
    let texto = document.getElementById("opiniao").value;

    if (notaAtual === 0) {
        alert("⚠️ Escolha quantas estrelas dar!");
        return;
    }

    let lista = JSON.parse(localStorage.getItem("avaliacoes_" + boloAtual)) || [];
    lista.push({ nota: notaAtual, texto: texto, data: new Date().toLocaleDateString() });

    localStorage.setItem("avaliacoes_" + boloAtual, JSON.stringify(lista));
    alert("✅ Avaliação enviada com sucesso! ⭐");
    
    notaAtual = 0;
    document.getElementById("opiniao").value = "";
    fecharDetalhe();
    carregar(bolos);
}

function finalizar() {
    if (carrinho.length === 0) {
        alert("🛒 Seu carrinho está vazio!");
        return;
    }
    alert("🎉 Pedido realizado com sucesso!\nEm breve entraremos em contato.");
    limparCarrinho();
    fecharCarrinho();
}

// Carrossel
let slideIndex = 0;
let slides = [];
let intervalo;

function mostrarSlide(index) {
    if (slides.length === 0) return;
    slides.forEach(s => s.classList.remove("ativo"));
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].classList.add("ativo");
}
>>>>>>> 10134f1401cd9f20df9e2facad06c8adf91e447b

function proximoSlide() { mostrarSlide(slideIndex + 1); }
function slideAnterior() { mostrarSlide(slideIndex - 1); }

function iniciarCarrossel() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoSlide, 4000);
}

<<<<<<< HEAD
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
=======
// Inicialização
window.addEventListener("load", () => {
    carregar(bolos);

    let pesquisa = document.getElementById("pesquisa");
    if (pesquisa) {
        pesquisa.addEventListener("input", function () {
            let texto = this.value.toLowerCase();
            let filtrados = bolos.filter(b => 
                b.nome.toLowerCase().includes(texto)
            );
            carregar(filtrados);
        });
    }

    slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        iniciarCarrossel();
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharCarrinho();
            fecharDetalhe();
        }
    });
});
>>>>>>> 10134f1401cd9f20df9e2facad06c8adf91e447b
