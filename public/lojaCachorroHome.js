let cachorro={
    nome:"Billy",
    descricao: "Billy é um cachorro muito agitado, por que ainda é filhote.",
    idade:"6 meses",
    img: "https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png"
} 
let cachorro2={
    nome:"Bob",
    descricao:"Bob é uma cachorro mansinho, ideal para casas pequenas",
    idade:"1 ano",
    img: "https://conteudo.imguol.com.br/c/entretenimento/11/2019/08/02/cachorrinho-sosia-de-salvador-dali-e-usado-para-campanha-de-adocao-1564760772496_v2_960x960.jpg"
}
let cachorro3={
    nome:"Hawf",
    descricao:"Half é tão grande que parece um dinosauro",
    idade:"2 ano",
    img: "https://www.petlove.com.br/dicas/wp-content/uploads/2018/04/dogue-alem%C3%A3o.jpg"
}
let listaDeCachorro=[];
listaDeCachorro.push(cachorro)
listaDeCachorro.push(cachorro2)
listaDeCachorro.push(cachorro3)
console.log (listaDeCachorro);

let cardGroup = document.querySelector('.card-group');
console.log(cardGroup);

let card = document.createElement('div');
cardGroup.appendChild(card);
card.classList.add('card');

let img = document.createElement('img');
card.appendChild(img);
img.classList.add('fit-img-cachorro');
img.setAttribute('src', cachorro.img);

let divCardBody = document.createElement('div');
card.appendChild(divCardBody);
divCardBody.classList.add('card-body');
divCardBody.classList.add('text-center');

let paragrafo = document.createElement('p');
divCardBody.appendChild(paragrafo);
paragrafo.textContent = cachorro.descricao;

let botao = document.createElement('button');
divCardBody.appendChild(botao);
botao.textContent ='Saiba mais';


let card1 = document.createElement('div');
cardGroup.appendChild(card1);
card1.classList.add('card');

let img1 = document.createElement('img');
card1.appendChild(img1);
img1.classList.add('fit-img-cachorro');
img1.setAttribute('src', cachorro.img);

let divCardBody1 = document.createElement('div');
card1.appendChild(divCardBody1);
divCardBody1.classList.add('card-body');
divCardBody1.classList.add('text-center');

let paragrafo1 = document.createElement('p');
divCardBody1.appendChild(paragrafo1);
paragrafo1.textContent = cachorro.descricao;

let botao1 = document.createElement('button');
divCardBody1.appendChild(botao1);
botao1.textContent ='Saiba mais';
