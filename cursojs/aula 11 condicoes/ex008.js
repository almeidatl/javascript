//criando lógica de lombada eletrônica

//gera uma velocidade aleatória entre 40 e 60km/h

var min = 35; // Valor mínimo do intervalo
var max = 58; // Valor máximo do intervalo

var velAleatoria = Math.floor(Math.random() * (max - min + 1)) + min;

//frase informando a velocidade do veículo
var frase = `A velocidade do veículo no momento da aferição foi de ${velAleatoria}km/h`
console.log('*'.repeat(frase.length))
console.log(frase)

//condição de multa se passar de 50km/h

if (velAleatoria > 50){    
    console.log('Teje multado, tá correno demais pô!')
} else{
    console.log('Segue reto criatura, tá de boa, dale!')
}

console.log('*'.repeat(frase.length))

