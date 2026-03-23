let receitas = JSON.parse(localStorage.getItem("receitas")) || [];

function adicionar(){

let r = {

nome:document.getElementById("nome").value,

foto:document.getElementById("foto").value,

ingredientes:document.getElementById("ingredientes").value.split(","),

preparo:document.getElementById("preparo").value,

quantidade:document.getElementById("quantidade").value,

tipo:document.getElementById("tipo").value,

preco:parseFloat(document.getElementById("preco").value),

precoIfood:parseFloat(document.getElementById("precoIfood").value)

}

receitas.push(r)

localStorage.setItem("receitas",JSON.stringify(receitas))

mostrar()

economia()

}

function mostrar(){

let html=""

receitas.forEach((r,index)=>{

html+=`

<div class="card">

<img src="${r.foto}">

<h3>${r.nome}</h3>

<p><b>Tipo:</b> ${r.tipo}</p>

<p><b>Preço caseiro:</b> R$ ${r.preco}</p>

<p><b>Preço iFood:</b> R$ ${r.precoIfood}</p>

<p><b>Ingredientes:</b> ${r.ingredientes.join(", ")}</p>

<p><b>Preparo:</b> ${r.preparo}</p>

<button onclick="mercado(${index})">🛒 Gerar lista</button>

<button onclick="remover(${index})">Remover</button>

</div>

`

})

document.getElementById("lista").innerHTML = html

}

function remover(i){

receitas.splice(i,1)

localStorage.setItem("receitas",JSON.stringify(receitas))

mostrar()

economia()

}

function sortear(){

let r = receitas[Math.floor(Math.random()*receitas.length)]

document.getElementById("resultado").innerText="Hoje vocês vão comer: "+r.nome

}

function economia(){

let total=0

receitas.forEach(r=>{

total += r.precoIfood - r.preco

})

document.getElementById("economia").innerText="Economia possível: R$ "+total.toFixed(2)

}

function mercado(i){

let lista = receitas[i].ingredientes

let html="<ul>"

lista.forEach(item=>{

html+="<li>"+item+"</li>"

})

html+="</ul>"

document.getElementById("mercado").innerHTML=html

}

mostrar()

economia()
