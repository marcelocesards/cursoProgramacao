let botaoAdicionar = document.getElementById('botaoAdicionar');
let form = document.getElementById('form');
console.log(botaoAdicionar)
botaoAdicionar.addEventListener('click', function () {
    if (form.hasAttribute('hidden'))
        form.removeAttribute('hidden');
    else
        form.setAttribute('hidden', 'hidden')
    console.log('bortao adicionar.')
});