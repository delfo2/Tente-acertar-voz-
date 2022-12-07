const grupoElemento = document.querySelector('[data-chute="caixa"]');
const btnPause = document.querySelector('[data-botao="pause"]');
const btnPauseText = document.querySelector('[data-botao="texto"]')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

let podeJogar = false;

btnPause.addEventListener('click', () => {
    if(podeJogar) {
        podeJogar = false;
        btnPause.innerHTML = `
            <i class="fa-solid fa-circle-play"></i>
            Retornar
        `;
        btnPauseText.innerHTML = `
            <i class="fa-solid fa-microphone-slash"></i>
            Microfone desativado
        `
        recognition.stop();
    } else {
        podeJogar = true;
        btnPause.innerHTML = `
            <i class="fa-solid fa-circle-pause"></i>
            Pausar
        `;
        btnPauseText.innerHTML = `
            <i class="fa-solid fa-microphone"></i>
            Microfone ativado
        `;
        recognition.start();
    }
})

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    let chute = e.results[0][0].transcript;
    constroiHtml(chute);
    validaNumero(chute);
}

function constroiHtml (fala) {
    grupoElemento.innerHTML = `
        <h3>Você disse:</h3>
        <span data-chute="usuario" class="caixa__numero">${fala}</span>
    `;
}

recognition.addEventListener('end', () => {
    if(podeJogar) {
        recognition.start();
    }
});