// ATIVIDADE 1 - Alterando HTML

// Ex 2
let nome = document.querySelector('.avatar-content>div');
nome.innerHTML = '<strong>Vanessa Rodrigues</strong>';

// Ex 3
// let input = document.querySelectorAll('.form-auth input');
// input[1].setAttribute('placeholder', 'Primeiro Nome');

// Ex 4
let input2 = document.getElementsByName('name') [0];
input2.setAttribute('placeholder', 'Primeiro Nome');


// ATIVIDADE 2 - Alterando CSS

// Ex 1 e Ex 4
let bordaInputs = document.querySelectorAll('input');

bordaInputs.forEach(element => {
    element.style.borderRadius = '5px';
    element.style.cssText = 'width: 80%';
});

// Ex 2
let botao = document.querySelector('button');
botao.style.width = '95%';

// Ex 3 
let fundo = document.querySelector('body');
fundo.style.backgroundColor = '#fafafa';

