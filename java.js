let jogador
let tabuleiro

function marcar(indice) {
    tabuleiro[indice] = jogador
    trocarJogador()
    renderizar()
    verificarVitoria()
}

function trocarJogador() {
    jogador = jogador == "X" ? "O" : "X"
}

function renderizar() {
    // jogador na tela
    const b = document.getElementById("jogador")
    b.innerText = jogador

    // tabuleiro na tela
    const tds = document.querySelectorAll("#tabuleiro td")
    for(let i = 0; i < tabuleiro.length; i++) {
        tds[i].innerText = tabuleiro[i]
    }
}

function verificarVitoria() {
    //horizontal
    if (tabuleiro[0] && tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2]) {
        alert("HOUVE VITORIA!")
    }
    if (tabuleiro[3] && tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5]) {
        alert("HOUVE VITORIA!")
    }
    if (tabuleiro[6] && tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8]) {
        alert("HOUVE VITORIA!")
    }
    if (tabuleiro[7] && tabuleiro[7] == tabuleiro[8] && tabuleiro[8] == tabuleiro[9]) {
        alert("HOUVE VITORIA!")
    }
    //vertical
    if (tabuleiro[0] && tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6]) {
        alert("HOUVE VITORIA!")
    }
    if (tabuleiro[1] && tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7]) {
        alert("HOUVE VITORIA!")
    }

    if (tabuleiro[2] && tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8]) {
        alert("HOUVE VITORIA!")
    }

    // diagonal
    if (tabuleiro[0] && tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8]) {
        alert("HOUVE VITORIA!")
    }

    if (tabuleiro[2] && tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6]) {
        alert("HOUVE VITORIA!")
    }

    // verificar se deu velha
    let deuVelha = true
    for(let i = 0; i < tabuleiro.length; i++) {
        if (!tabuleiro[i]) {
            deuVelha = false
        }
    }
    if (deuVelha) alert("DEU VELHA!")
}

function iniciar() {
    jogador = "X"
    tabuleiro = ["", "", "", "", "", "", "", "", ""]
    renderizar()
}

iniciar()