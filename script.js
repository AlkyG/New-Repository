let receitas = JSON.parse(localStorage.getItem("receitas")) || [];

function adicionar(){

let receita = {
nome:document.getElementById("nome").value,
ingredientes:document.getElementById("ingredientes").value,
preparo:document.getElementById("preparo").value,
quantidade:document.getElementById("quantidade").value,
tipo:document.getElementById("tipo").value,
preco:document.getElementById("preco").value
}

receitas.push(receita);

localStorage.setItem("receitas", JSON.stringify(receitas));

mostrar();

limpar();
}

function mostrar(){

let html="";

receitas.forEach((r,index)=>{

html += `

<div class="card">

<h3>${r.nome}</h3>

<p><b>Tipo:</b> ${r.tipo}</p>

<p><b>Quantidade:</b> ${r.quantidade}</p>

<p><b>Preço:</b> ${r.preco}</p>

<p><b>Ingredientes:</b><br>${r.ingredientes}</p>

<p><b>Preparo:</b><br>${r.preparo}</p>

<button onclick="remover(${index})">Remover</button>

</div>

`;

});

document.getElementById("lista").innerHTML = html;

}

function remover(index){

receitas.splice(index,1);

localStorage.setItem("receitas", JSON.stringify(receitas));

mostrar();

}

function limpar(){

document.getElementById("nome").value="";
document.getElementById("ingredientes").value="";
document.getElementById("preparo").value="";
document.getElementById("quantidade").value="";
document.getElementById("preco").value="";
}

mostrar();
