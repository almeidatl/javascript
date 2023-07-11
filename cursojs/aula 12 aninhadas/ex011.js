/*
var idade = 15

console.log(`Você tem ${idade} anos.`)

if (idade < 16){    
    console.log('Logo, você ainda não pode votar.')
} else if (idade < 18){
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}
*/

/*
//saudação de acordo com a hora

//cria a variável a receber o horário atual

function exibirHora(){
    var horaAgora = new Date() //cria o objeto date

    var hora = String(horaAgora.getHours()).padStart(2, '0')
    var min = String(horaAgora.getMinutes()).padStart(2, '0')
    var seg = String(horaAgora.getSeconds()).padStart(2, '0')

    var horaReal = (hora) + ':' + (min) + ':' + (seg)
    
    console.log('O horário atual é ' + horaReal)   

    //return horaReal

    
}

exibirHora()
*/

//cria o objeto date
var horaAgora = new Date() 

//cria e converte as var em String para exibir 2 casas decimais
var hora = String(horaAgora.getHours()).padStart(2, '0')
var min = String(horaAgora.getMinutes()).padStart(2, '0')
var seg = String(horaAgora.getSeconds()).padStart(2, '0')

//após formatar o horário obtido, inserir na var horaReal
var horaReal = (hora) + ':' + (min) + ':' + (seg)

console.log('O horário atual é ' + horaReal)   

//de acordo com o horário, será exibida uma saudação de acordo
if (hora < 4){
    console.log('Que tal uma soneca?')
} else if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa Tarde!')
} else{
    console.log('Boa noite!')
}





