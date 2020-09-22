let inputText = document.getElementById("inputTexto");
console.log(inputText);
let variavelParaGuardarOBotao = document.getElementById("botao");
console.log(variavelParaGuardarOBotao);
let textAreaResultado = document.getElementById("textAreaResultado");
console.log(textAreaResultado);
let segundoInput = document.getElementById("inputSegundoValor");

variavelParaGuardarOBotao.addEventListener("click", function(){
    console.log(inputText.value);   
    let resultado = parseFloat(inputText.value) + parseFloat(segundoInput.value);
    textAreaResultado.textContent = textAreaResultado.textContent  +"\n"+ resultado;
    console.log(1 + 1);
});