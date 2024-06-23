function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function random(def){
    let n = (Math.random()*100) * (Math.random()*100)
    
    while(n >= def){
        n=n/10;
        if(n < def){
            break;
        }
    }
    n = Math.round(n);

    if (numerosReptidos.includes(n)) {
        numerosReptidos.push(n);
        n = random(def);
    }
    else {
        numerosReptidos.push(n);
    }

    return n;
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let acertoFrase = (`Parabens, você acertou com ${tentativas} ${palavraTentativa}!`);

    tentativas++
    if (chute == numeroSecreto){
        exibirNaTela("h1","Acertou!");
        exibirNaTela("p",acertoFrase);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (chute > numeroSecreto) {
            exibirNaTela("p",(`O número secreto é menor que ${chute}`));;
            limparCampo()
        } 

        else {
            exibirNaTela("p",(`O número secreto é maior que ${chute}`));
            limparCampo()
        }
    }
    if (chute == "" || chute == null){
        exibirNaTela("p","Você precisa tentar um número");
        tentativas = tentativas -1;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function fraseInicio(){
    var escolhaNum = ("Escolha um número entre 1 e "+maxRandon);
    exibirNaTela("h1","Jogo dos números");
    exibirNaTela("p",escolhaNum);
    
}

function novoJogo(){
    
    fraseInicio();
    try {
        numeroSecreto = random(maxRandon);


    tentativas = 1
    console.log(numeroSecreto);
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled","true");

    }
    catch(error){
        if (error instanceof RangeError){
            zerarJogo();
        }
    }
}



function zerarJogo(){
    
    exibirNaTela("h1","Jogo dos números");
    exibirNaTela("p","O jogo foi zerado\n clique em novo jogo");
    limparCampo();
    numerosReptidos.splice(0, numerosReptidos.length);
    document.getElementById("reiniciar").setAttribute("disabled","false");
}



var numerosReptidos = []

let maxRandon = 1;
let numeroSecreto = random(maxRandon);
console.log(numeroSecreto);
let tentativas = 1;

fraseInicio();
