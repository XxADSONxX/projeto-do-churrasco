/* 
Carne = 400 gramas por pessoa se for + de 6 horas = 650 gramas
Cerveja = 1200 ml por pessoa, se for + de 6 horas = 2000 ml
Refrigerante/agua = 1000 ml por pessoa se for + de 6 horas = 1500 ml

crianças valem por 0,5 pessoa
*/

let inputAdultos = document.getElementById("adultos");
let inputCrinacas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCrinacas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (400 / 2 * criancas);
    let qtdTotalFrango = frangoPP(duracao) * adultos + (300 / 2 * criancas);
    let qtdTotalCalabresa = calabresaPP(duracao) * adultos + (200 / 2 * criancas)
    let qtdTotalCerveja = CervejaPP(duracao) * adultos;
    let qtdTotalBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalFrango / 1000} kg de Frango</p>`
    resultado.innerHTML += `<p>${qtdTotalCalabresa / 1000} kg de Calabresa</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Coca-cola</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de Suco</p>`

}
/* Carne por Pessoa */
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function frangoPP(duracao) {
    if (duracao >= 6) {
        return 500;
    } else {
        return 300;
    }
}
function calabresaPP(duracao) {
    if (duracao >= 6) {
        return 400;
    } else {
        return 200;
    }
}
/* cerveja por Pessoa */
function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function BebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}