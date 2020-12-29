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
let cachorro4={
    nome:"Luba",
    descricao:"Luba é cego",
    idade:"6 meses",
    img: "https://www.hypeness.com.br/1/2020/07/Cachorros-podem-reconhecer-pessoas-n%C3%A3o-confi%C3%A1veis-foto-unsplash-3.jpg"
}
let listaDeCachorro=[];
listaDeCachorro.push(cachorro)
listaDeCachorro.push(cachorro2)
listaDeCachorro.push(cachorro3)
listaDeCachorro.push(cachorro4)
console.log (listaDeCachorro);

let cardGroup = document.querySelector('.card-group');
console.log(cardGroup);

for (let index = 0; index < listaDeCachorro.length; index++) {
    const cachorro = listaDeCachorro[index];
    console.log(cachorro);

    //construção do card
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
    //fim construção card
}