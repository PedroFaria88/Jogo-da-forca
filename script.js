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
let resposta = palavra;
let tamanho = palavra.length;
let campo = ["| "];
let enforcado = " ";
let chutes = ["| Erros:  "];

for (i = 0; i < tamanho ; i ++){
    campo.push("_ ");
}
let erros = 0;
document.getElementById("campo").value = campo;

function jogo(x){
    if (palavra.includes(x)){
        while(palavra.includes(x) == true){
        let q = (palavra.indexOf(x)) ;
        campo.splice(q+1 , 1, x);
        palavra = palavra.replaceAt(q, "0");
        document.getElementById("campo").value = campo;
        document.getElementById("narrador").innerHTML = "Certo!!"
        }
    }
    if (palavra.includes("ã")){
        while(palavra.includes("ã") == true){
        let q = (palavra.indexOf("ã")) ;
        campo.splice(q+1 , 1, "ã");
        palavra = palavra.replaceAt(q, "0");
        document.getElementById("campo").value = campo;
        document.getElementById("narrador").innerHTML = "Certo!!"
        }
    }

    if(chutes.includes(x) == false && campo.includes(x) == false && chutes.includes(x) == false && campo.includes("ã") == false){
        erchutes.includes(x) == false && campo.includes(x) == falseros = erros +1;
        chutes.push(x);
        document.getElementById("chutes").innerHTML = chutes;
        

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

        document.getElementById("enforcado").innerHTML = enforcado;
        document.getElementById("narrador").innerHTML = "Tente outra letra..."

    }

    if (erros >= 6){
        document.getElementById("narrador").innerHTML = "Você morreu!" + "A palavra era ''" + resposta + "''";

    }
}



document.getElementById("a").onclick = function(){
    let letra = "a";
    jogo(letra);
}
document.getElementById("b").onclick = function(){
    let letra = "b";
    jogo(letra);
}
document.getElementById("c").onclick = function(){
    let letra = "c";
    jogo(letra);
}
document.getElementById("d").onclick = function(){
    let letra = "d";
    jogo(letra);
}
document.getElementById("e").onclick = function(){
    let letra = "e";
    jogo(letra);
}
document.getElementById("f").onclick = function(){
    let letra = "f";
    jogo(letra);
}
document.getElementById("g").onclick = function(){
    let letra = "g";
    jogo(letra);
}
document.getElementById("h").onclick = function(){
    let letra = "h";
    jogo(letra);
}
document.getElementById("i").onclick = function(){
    let letra = "i";
    jogo(letra);
}
document.getElementById("j").onclick = function(){
    let letra = "j";
    jogo(letra);
}
document.getElementById("k").onclick = function(){
    let letra = "k";
    jogo(letra);
}
document.getElementById("l").onclick = function(){
    let letra = "l";
    jogo(letra);
}
document.getElementById("m").onclick = function(){
    let letra = "m";
    jogo(letra);
}
document.getElementById("n").onclick = function(){
    let letra = "n";
    jogo(letra);
}
document.getElementById("o").onclick = function(){
    let letra = "o";
    jogo(letra);
}
document.getElementById("p").onclick = function(){
    let letra = "p";
    jogo(letra);
}
document.getElementById("q").onclick = function(){
    let letra = "q";
    jogo(letra);
}
document.getElementById("r").onclick = function(){
    let letra = "r";
    jogo(letra);
}
document.getElementById("s").onclick = function(){
    let letra = "s";
    jogo(letra);
}
document.getElementById("t").onclick = function(){
    let letra = "t";
    jogo(letra);
}
document.getElementById("u").onclick = function(){
    let letra = "u";
    jogo(letra);
}
document.getElementById("v").onclick = function(){
    let letra = "v";
    jogo(letra);
}
document.getElementById("w").onclick = function(){
    let letra = "w";
    jogo(letra);
}
document.getElementById("x").onclick = function(){
    let letra = "x";
    jogo(letra);
}
document.getElementById("y").onclick = function(){
    let letra = "y";
    jogo(letra);
}
document.getElementById("z").onclick = function(){
    let letra = "z";
    jogo(letra);
}









