//desafio (https://github.com/lira1705/mentoria-typescript/blob/main/src/desafios/desafio3.js)

export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparCampo();
    }
}

function limparCampo(){
    soma.value="";
}

function limparSaldo() {
   if(campoSaldo){
        saldo =0;
        campoSaldo.innerHTML = saldo.toString();
   }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}