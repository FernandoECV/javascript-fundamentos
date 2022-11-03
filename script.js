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

// let idade = 'adulta';

// switch (idade) {
//     case 'adulta': console.log('+18');
//         break;
//     case 'adolescência': console.log('+14');
//         break;
//         case 'infância': console.log('Todos os Públicos');
//     default:
//         break;
// }

// let ab = a + b;
// let ac = a + c;
// let bc = b + c;

// if(ab > c && ac > b && bc > a){
//     if(a === b && a === c){
//         console.log('Equilátero');
//     }else if(a !== b && a !== c && b !== c){
//         console.log('Escaleno');
//     }else{
//         console.log('Isósceles');
//     }
// }else{
//     console.log('Não é um triângulo');
// }

// let a = 5;
// let b = 7;
// let c = 6;
// let d = 8;

// let media = ((a + b + c + d) / 4);

// if (media >= 9) {
//     conceito = 'A';
// } else if (media >= 7.5) {
//     conceito = 'B';
// } else if (media >= 6) {
//     conceito = 'C';
// } else if (media >= 4) {
//     conceito = 'D';
// } else {
//     conceito = 'F';
// }

// console.log(conceito);

// quantidade = 35;

// const preco = 5.50;
    
// let total = quantidade * 5.50;

// if(quantidade > 25) {
//     totalComDesconto = (total - (0.65 * quantidade));
//     console.log(totalComDesconto);
// } else {
//     console.log(total);
// }   

// for (let i = 1; i <= 10; i++) {
//     for(let j = 1;  j <= 3; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

// let palavra = 'javascript';
//     letra = 'v',
//     total = 0,
//     totalAProcurar = 3,
//     indice = 0;

// while(total < totalAProcurar && indice < palavra.length){
//     if(palavra[indice] === letra){
//         total++;
//     }

//     indice++;
// }

// if (total >= totalAProcurar){
//     console.log('SIM');
// }else {
//     console.log('NÃO');
// }

// let numeroEscolhido = Math.floor((Math.random() * 9) + 1),
//     acertou = false,
//     palpite = '';

// do{
//     palpite = prompt('Qual o seu número? ', 0);
//     if(parseInt(palpite) === numeroEscolhido){
//         acertou = true;
//     }

// }while(palpite !== '' && parseInt(palpite) !== numeroEscolhido);

// if(acertou){
//     console.log('Vitória');
// }else {
//     console.log('Não foi dessa vez');
// }














