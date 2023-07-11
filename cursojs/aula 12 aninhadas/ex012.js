var data = new Date() //cria o objeto date()
var dia = data.getDay() //busca o dia atual e armazena na var

//condição múltipla em que cada case tem um bloco a seguir

switch(dia){ // sintaxe switch(expressão)
    case 0: //case 0 -> se o valor da expressão for 0
        dia = 'domingo'
        break
    case 1:
        dia = 'segunda'   
        break    
    case 2:
        dia = 'terça'
        break
    case 3:
        dia = 'quarta'
        break
    case 4:
        dia = 'quinta'
        break
    case 5:
        dia = 'sexta'
        break
    case 6:
        dia = 'sábado'
        break    
    default:
        console.log('ERRO')

}

console.log(`Bom dia, hoje é ${dia}!`)