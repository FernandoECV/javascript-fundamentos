// document.querySelector('h1').innerText = 'TreinaWeb'

// console.log(undefined);
// console.log(null);

// console.log(2.998e8);

// console.log(Symbol('Programando'));

// let idade = 28,
//     nome = 'João',
//     texto = '';

// const PI = 3.14;

// // texto = 'A idade de '+ nome + ' é ' + idade;
// texto = `A idade de ${nome} é ${idade}`;

// console.log(texto);
// console.log(idade);

// let hora = 19,
//     mensagem = '';

// if (hora < 12) {

//     mensagem = 'Bom dia!';

// } else if (hora >= 12 && hora < 18) {

//     mensagem = 'Boa Tarde!';

// } else {

//     mensagem = 'Boa Noite!';
// }

// if(hora >= 12 && hora < 18) {
//     mensagem = 'Boa tarde!';
// }

// if(hora >= 18 ) {
//     mensagem = 'Boa Noite!';
// }

// console.log(mensagem);

// let mes = 89,
//     nomeMes = '';

// switch(mes) {
//     case 1: 
//         nomeMes = 'Janeiro'; 
//         break;
//     case 2: 
//         nomeMes = 'Fevereiro'; 
//         break;
//     case 3:
//         nomeMes = 'Março'; 
//         break;
//     case 4: 
//         nomeMes = 'Abril'; 
//         break;
//     case 5: 
//         nomeMes = 'Maio'; 
//         break;
//     case 6: 
//          nomeMes = 'Junho'; 
//          break;
//     case 7: 
//          nomeMes = 'Julho';  
//          break;
//     case 8: 
//          nomeMes = 'Agosto'; 
//          break;
//     case 9: 
//          nomeMes = 'Setembro'; 
//          break;
//     case 10: 
//          nomeMes = 'Outubro'; 
//          break;
//     case 11: 
//          nomeMes = 'Novembro'; 
//          break;
//     case 12: 
//          nomeMes = 'Dezembro'; 
//          break;
//     default: 
//          nomeMes = 'Mês Inválido';
// }

// if (idade === 'infância'){
//    console.log('Todos os Públicos') 
// }

// if (idade === 'adolescência'){
//     console.log('+14') 
// }

// if (idade === 'adulta'){
//     console.log('+18') 
// }

// console.log(nomeMes);

let idade = 'adulta';

switch (idade) {
    case 'adulta': console.log('+18');
        break;
    case 'adolescência': console.log('+14');
        break;
        case 'infância': console.log('Todos os Públicos');
    default:
        break;
}


