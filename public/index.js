let inputText = document.getElementById("inputTexto");
console.log(inputText);
let variavelParaGuardarOBotao = document.getElementById("botao");
console.log(variavelParaGuardarOBotao);
let textAreaResultado = document.getElementById("textAreaResultado");
console.log(textAreaResultado);

variavelParaGuardarOBotao.addEventListener("click", function(){
    console.log(inputText.value);   
    textAreaResultado.textContent = textAreaResultado.textContent +"\n"+ inputText.value;
    console.log(1 + 1);
});