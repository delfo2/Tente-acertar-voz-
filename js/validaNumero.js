const pagina = document.querySelector('[data-corpo]');

function validaNumero (chute) {
    const number = +chute;
    
    if (numeroIsTrue(number)) {
        grupoElemento.innerHTML += '<h3 class="corpo__erro">Chute inválido: O chute precisa ser um número.</h3>';
        return;
    }

    if (numeroIsBetween(number)) {
        grupoElemento.innerHTML += `<h3 class="corpo__erro">Chute inválido: O número precisa estar entre ${maiorNumero} e ${menorNumero}.</h3>`;
        return;
    }

    if (number === numeroSecreto) {
        pagina.innerHTML = `
        <h1 class="corpo__titulo">
            <i class="fa-solid fa-comment"></i>
            Tente Acertar o Número
            <i class="fa-solid fa-microphone"></i>
        </h1>
        <h2 class="corpo__acerto">Você acertou!</h2>
        <h3 class="corpo__dica">O número secreto era: ${numeroSecreto}.</h3>
        <button class="corpo__botao" id="btn-jogar_novamente">Jogar novamente</button>
        `;
    } else if (number > numeroSecreto) {
        grupoElemento.innerHTML += `
            <span>
                <i class="fa-solid fa-circle-arrow-down"></i>
                    O número secreto é menor que isso!!
                <i class="fa-solid fa-circle-arrow-down"></i>
            </span>
        `
    } else {
        grupoElemento.innerHTML += `
        <span>
            <i class="fa-solid fa-circle-arrow-up"></i>
                O número secreto é maior que isso!!
            <i class="fa-solid fa-circle-arrow-up"></i>
        </span>
    `
    }
}

function numeroIsTrue (chute) {
    return isNaN(chute);
}

function numeroIsBetween (chute) {
    return chute > maiorNumero || chute < menorNumero;
}

window.addEventListener('click', e => {
    if(e.target.id == 'btn-jogar_novamente') {
        window.location.reload();
    }
})