const $ = document;
var listaCachorro=[];
const botaoAddOnClick = ()=>{
    let botaoAdicionar = document.getElementById('botaoAdicionar');
    let form = document.querySelector('.form');
    console.log(botaoAdicionar)
    botaoAdicionar.addEventListener('click', function () {
        botaoAdicionar.classList.toggle('active');
        form.classList.toggle('show');
    });
}

const salvarCachorro = ()=>{
    const salvarCachorro = $.querySelector('.salvarCachorro');
    salvarCachorro.addEventListener('click', (event)=>{
        event.preventDefault();
        const inputCachorroImg = $.querySelector('#inputImg');
        const textareaDescricao = $.querySelector('#textareaDescricao');
        console.log(textareaDescricao.value)
        const cachorro= {
            img: inputCachorroImg.value,
            descricao: textareaDescricao.value
        }
        const cachorroProduto = criarCachorroProduto(cachorro);
        let cardGroup = $.querySelector('.card-group');
        cardGroup.appendChild(cachorroProduto);
    })
}

const app = ()=>{
    botaoAddOnClick();
    salvarCachorro();
}

const criarCachorroProduto = (cachorro)=> {
    let divCardProduto = createElement('div', 'card-produto');
    console.log(divCardProduto)
    criarCardHeader(divCardProduto, cachorro);
    criarCardBody(divCardProduto, cachorro);
   return divCardProduto; 
}

function criarCardHeader(divCardProduto, cachorro) {
    let divCardProdutoHeader = createElement('div', 'card-produto-header');
    divCardProduto.appendChild(divCardProdutoHeader);

    let cardProdutoImg = createElement('img', 'card-produto-image');
    cardProdutoImg.src = cachorro.img;
    divCardProdutoHeader.appendChild(cardProdutoImg);
}

function criarCardBody(divCardProduto, cachorro) {
    let divCardContent = createElement('div', 'card-produto-content', 'text-center');
    divCardProduto.appendChild(divCardContent);

    let p = createElement('p');
    p.textContent = cachorro.descricao;
    divCardContent.appendChild(p);

    let botaoSaibaMais = createElement('button');
    botaoSaibaMais.textContent = "Saiba Mais";
    divCardContent.appendChild(botaoSaibaMais);
}

const createElement = (element=undefined, ...classList) =>{
    if(!element)
        element = 'div';
    element = $.createElement(element);
    console.log(classList)    
    for (const className of classList) {
        console.log(className)    
        element.classList.add(className);
    };
    return element;
}

app();

