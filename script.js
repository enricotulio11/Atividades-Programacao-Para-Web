// JOGO 1: ADIVINHAÇÃO (CÓDIGO ANTERIOR)

let numeroSecreto = 0;
function gerar(){numeroSecreto=Math.floor(20*Math.random())+1;const e=document.getElementById("mensagem");e.textContent="Um novo número secreto foi gerado! Tente adivinhar qual é.",document.getElementById("num1").value=""}function dica(){const e=document.getElementById("mensagem");0===numeroSecreto?e.textContent="Você precisa gerar um número primeiro! Clique em 'Gerar Novo Jogo'.":numeroSecreto%2==0?e.textContent="Dica: O número secreto é PAR.":e.textContent="Dica: O número secreto é ÍMPAR."}function Adivinhar(){const e=document.getElementById("mensagem"),t=document.getElementById("num1"),n=parseInt(t.value);0===numeroSecreto?e.textContent="Clique em 'Gerar Novo Jogo' para começar!":isNaN(n)?e.textContent="Por favor, digite um número válido.":n===numeroSecreto?(e.textContent=`Parabéns! Você acertou! O número secreto era ${numeroSecreto}.`,numeroSecreto=0):n>numeroSecreto?e.textContent="O número secreto é MENOR que "+n+". Tente de novo!":e.textContent="O número secreto é MAIOR que "+n+". Tente de novo!",t.value=""}

// JOGO 2: PEDRA, PAPEL E TESOURA (NOVO CÓDIGO)

function jogarJokenpo() {
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?");

    if (escolhaUsuario === null) {
        console.log("Jogo cancelado.");
        return;
    }
    
    escolhaUsuario = escolhaUsuario.toLowerCase().trim();

    if (escolhaUsuario !== 'pedra' && escolhaUsuario !== 'papel' && escolhaUsuario !== 'tesoura') {
        console.error("Escolha inválida! Por favor, digite Pedra, Papel ou Tesoura.");
        return;
    }
    
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const indiceComputador = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoes[indiceComputador];
    
    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Resultado: Empate!");
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        console.log("Resultado: Você venceu! 🎉");
    } else {
        console.log("Resultado: O computador venceu! 🤖");
    }
    console.log("--------------------");
}

// FERRAMENTA 3: TABUADA (NOVO CÓDIGO)

function gerarTabuada() {
    const inputElemento = document.getElementById('numeroTabuada');
    const resultadoElemento = document.getElementById('resultadoTabuada');
    const numero = parseInt(inputElemento.value);

    if (isNaN(numero)) {
        resultadoElemento.textContent = "Por favor, digite um número válido.";
        return;
    }

    let tabuadaString = `Tabuada do ${numero}:\n\n`;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = `${numero} x ${i} = ${resultado}\n`;
        tabuadaString += linha;
    }

    resultadoElemento.textContent = tabuadaString;
}

// FERRAMENTA 4: DESENHO DE TRIÂNGULO (NOVO CÓDIGO)

function desenharTriangulo() {
    const inputLinhas = document.getElementById('numeroLinhas');
    const resultadoElemento = document.getElementById('resultadoTriangulo');
    const numeroDeLinhas = parseInt(inputLinhas.value);

    if (isNaN(numeroDeLinhas) || numeroDeLinhas <= 0) {
        resultadoElemento.textContent = "Por favor, digite um número inteiro e positivo.";
        return;
    }
    
    let trianguloCompleto = '';
    console.clear();
    console.log(`--- Triângulo com ${numeroDeLinhas} linhas ---`);

    for (let i = 1; i <= numeroDeLinhas; i++) {
        let linhaAtual = '';
        for (let j = 1; j <= i; j++) {
            linhaAtual += '*';
        }
        console.log(linhaAtual);
        trianguloCompleto += linhaAtual + '\n';
    }
    
    resultadoElemento.textContent = trianguloCompleto;
}

// FERRAMENTA 5: SOMA DA SÉRIE (NOVO CÓDIGO)

function calcularSerie() {
    const inputTermos = document.getElementById('numeroTermos');
    const resultadoElemento = document.getElementById('resultadoSerie');
    const nTermos = parseInt(inputTermos.value);

    if (isNaN(nTermos) || nTermos <= 0) {
        resultadoElemento.innerHTML = "<p style='color: red;'>Por favor, digite um número de termos válido e positivo.</p>";
        return;
    }

    let soma = 0;
    let termoAtual = '1';
    let serieString = '';

    for (let i = 1; i <= nTermos; i++) {
        soma += parseInt(termoAtual);
        
        if (i < nTermos) {
            serieString += termoAtual + ' + ';
        } else {
            serieString += termoAtual;
        }
        
        termoAtual += '1';
    }

    const resultadoHTML = `
        <p><strong>Série:</strong> ${serieString}</p>
        <p><strong>A soma é:</strong> ${soma.toLocaleString('pt-BR')}</p>
    `;
    
    resultadoElemento.innerHTML = resultadoHTML;
}