let listadeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
    
}

function exibirmensagemInicial(){
    ExibirTextoNaTela('h1','Jogo do numero secreto');
    ExibirTextoNaTela('p','Escolha um numero entre 1 e 10' );
}
exibirmensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
if(chute == numeroSecreto){
    ExibirTextoNaTela('h1','Acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;

    ExibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');


} else{
    if(chute > numeroSecreto){
        ExibirTextoNaTela('p','o numero é menor ');

    } else {
        ExibirTextoNaTela('p','O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
    
}
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite)[
    listadeNumerosSorteados = []
]

    if (listadeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else{
        listadeNumerosSorteados.push(numeroEscolhido)
        console.log(listadeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarjogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirmensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);

}
