class Copo{
    constructor(raioMaior, raioMenor, altura, geratriz) {
        this.raioMaior = raioMaior
        this.raioMenor = raioMenor
        this.altura = altura
        this.geratriz = geratriz
    }

    calcularGeratriz(raioMaior, raioMenor, altura){
        return Math.sqrt(altura ** 2 + (raioMaior - raioMenor) ** 2);
    }

    calcularAreaBaseMenor(raioMenor){
        return Math.PI * (raioMenor * raioMenor)
    }

    calcularAreaBaseMaior(raioMaior){
        return Math.PI * (raioMaior * raioMaior)
    }

    calcularAreaLateral(raioMenor, geratriz,raioMaior){
        return raioMenor * geratriz * (raioMaior + raioMenor)
    }

    calcularVolume(raioMenor, raioMaior, altura){
        return ((raioMenor * altura) / 3) * ((raioMaior * raioMaior) + raioMaior * raioMenor + (raioMenor * raioMenor))
    }
}