const menorNumero = 1;
const maiorNumero = 100;

const chuteMinimo = document.querySelector('[data-chute="minimo"]');
chuteMinimo.innerHTML = menorNumero;
const chuteMaximo = document.querySelector('[data-chute="maximo"]');
chuteMaximo.innerHTML = maiorNumero;

const numeroSecreto = sorteiaNumero();

function sorteiaNumero () {
    return parseInt(Math.random() * maiorNumero + 1);
}

console.log('número sorteado foi:', numeroSecreto);