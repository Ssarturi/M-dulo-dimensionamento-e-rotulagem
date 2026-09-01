const Copo = require('./models/Copo')

let resposta = document.getElementById('resposta')
let btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', () => {
    let raioMaior = parseFloat(document.getElementById('raioMaior').value)
    let raioMenor = parseFloat(document.getElementById('raioMenor').value)
    let altura = parseFloat(document.getElementById('altura').value)

    const copo = new Copo(raioMaior, raioMenor, altura)

    let classificacaoVolume = copo.classificarVolume()

    resposta.innerHTML = `A geratriz do copo é: ${copo.calcularGeratriz().toFixed(2)}<br>
    A área da base menor é: ${copo.calcularAreaBaseMenor().toFixed(2)}<br>
    A área da base maior é: ${copo.calcularAreaBaseMaior().toFixed(2)}<br>
    A área lateral é: ${copo.calcularAreaLateral().toFixed(2)}<br>
    O volume do copo é: ${copo.calcularVolume().toFixed(2)}<br>
    Classificação do volume: ${classificacaoVolume}`
})