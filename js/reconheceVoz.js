const grupoElemento = document.querySelector('[data-chute="caixa"]');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    let chute = e.results[0][0].transcript;
    constroiHtml(chute);
}

function constroiHtml (fala) {
    console.log('entrou');
    grupoElemento.innerHTML = `
        <h3>Você disse:</h3>
        <span data-chute="usuario" class="caixa__numero">${fala}</span>
        <span>
            <i class="fa-solid fa-circle-arrow-up"></i>
                O número secreto é maior que isso!!
            <i class="fa-solid fa-circle-arrow-up"></i>
        </span>
    `;

}