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
let listaDeCachorro=[];
listaDeCachorro.push(cachorro)
listaDeCachorro.push(cachorro2)
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

let cardBody = document.createElement("div");
card.appendChild(cardBody);
cardBody.classList.add('card-body');
