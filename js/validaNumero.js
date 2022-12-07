const pagina = document.querySelector('[data-corpo]');

let chances = 7;

function validaNumero (chute) {

    if(chances >= 0) {
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
            chances -= 1;
            grupoElemento.innerHTML += `
            <span>
                <i class="fa-solid fa-circle-arrow-down"></i>
                    O número secreto é menor que isso!!
                <i class="fa-solid fa-circle-arrow-down"></i>
                <br>
                tentativas restantes: ${chances}
            </span>
            `
        } else {
            chances -= 1;
            grupoElemento.innerHTML += `
            <span>
                <i class="fa-solid fa-circle-arrow-up"></i>
                    O número secreto é maior que isso!!
                <i class="fa-solid fa-circle-arrow-up"></i>
                <br>
                tentativas restantes: ${chances}
            </span>
            `
        }
        if(chances === 0) {
            podeJogar = false;
            recognition.stop();
            pagina.innerHTML = `
                <h1 class="corpo__titulo">
                    <i class="fa-solid fa-comment"></i>
                        Tente Acertar o Número
                    <i class="fa-solid fa-microphone"></i>
                </h1>
                <h2 class="corpo__erro">Você perdeu!</h2>
                <h3 class="corpo__dica-erro">Suas dicas acabaram</h3>
                <h3 class="corpo__dica-erro">O número secreto era: <strong>${numeroSecreto}</strong>.</h3>
                <button class="corpo__botao" id="btn-jogar_novamente">Jogar novamente</button>
            `;
        }
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