let palavrasPossiveis = ["caos", "besta", "mitos", "celas", "notas", "mosca", "acido", "firmeza","cavalo", "republicanos","feliz","deus","carinho","janeiro","narigudo","querido","tempo","vento","brilho","universo", "acabou", "computador", "garrafa", "apartamento", "elefante", "camomila", "crocodilo", "acumulador", "geladeira", "cozinha", "fazenda", "zebra", "rainha", "patriota", "caminho", "montanha", "escorregador", "maremoto", "antraz", "onda",];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);}
x = getRandomInt(0,40);
let palavra = palavrasPossiveis[x];
let tamanho = palavra.length;
let campo = ["| "];
let enforcado = " ";
let chutes = ["              | erros:  "];


for (i = 0; i < tamanho ; i ++){
    campo.push("_ ");
}
let erros = 0;

while (campo.includes("_ ") == true && erros < 6){

let P1 = prompt("Escolha uma letra \n  \n"  +  campo +"\n "+ enforcado + chutes).toLocaleLowerCase();

if (palavra.includes(P1)){
    while(palavra.includes(P1) == true){
    let q = (palavra.indexOf(P1)) ;
    campo.splice(q+1 , 1, P1);
    palavra = palavra.replaceAt(q, "0");
    }
}
else if(chutes.includes(P1) == false && campo.includes(P1) == false){
    erros = erros +1;
    chutes.push(P1);
    
}

switch(erros){
    case 1:
        enforcado = "  o "
        break;
    case 2:
        enforcado = "  o \n   |"
        break;
    case 3:
        enforcado = " o \n  |\\"
        break;
    case 4:
        enforcado = "  o \n  /|\\"
        break;
    case 5 :
        enforcado = "  o \n  /|\\ \n  /"
        break;
    case 6:
        enforcado = "   o \n  /|\\ \n  /\\"
}

}

if (erros < 6){
alert("Parabéns!!!" + "\n" + campo + "\n" + enforcado);
}
else{
    alert("Você morreu!!! " + "\n" + campo + "\n" + enforcado +"\n" + "A palavra era: " + palavrasPossiveis[x]);
}
