imprimirNoConsole("Atenção, estamos carreganto a pagina!");
let inputText = document.getElementById("inputTexto");
console.log(inputText);
let variavelParaGuardarOBotao = document.getElementById("botao");
console.log(variavelParaGuardarOBotao);
let textAreaResultado = document.getElementById("textAreaResultado");
console.log(textAreaResultado);
let segundoInput = document.getElementById("segundoValor");
let operador = document.getElementById("operador");

variavelParaGuardarOBotao.addEventListener("click", function(){
    console.log(inputText.value);  
    let resultado = 0; 
    if(operador.value === "+"){
        resultado = parseFloat(inputText.value) + parseFloat(segundoInput.value);
    }      
    if(operador.value === "*")
        resultado = parseFloat(inputText.value) * parseFloat(segundoInput.value);
    if(operador.value === "/")
        resultado = parseFloat(inputText.value) / parseFloat(segundoInput.value);
    if(operador.value === "-")
        resultado = parseFloat(inputText.value) - parseFloat(segundoInput.value);
    textAreaResultado.textContent = textAreaResultado.textContent  +"\n"+ resultado;
    console.log(1 + 1);
    imprimirNoConsole("O botão foi clicado");
});

imprimirNoConsole("A função foi executada com sucesso!");

function imprimirNoConsole(texto){
    console.log(texto);
}

