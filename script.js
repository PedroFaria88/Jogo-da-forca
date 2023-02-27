let palavrasPossiveis = ["cáos", "besta", "mitos", "celas", "notas", "mosca", "ácido", "firmeza","cavalo", "republicanos","feliz","deus","carinho","janeiro","narigudo","querido","tempo","vento","brilho","universo", "acabou", "computador", "garrafa", "apartamento", "elefante", "camomila", "crocodilo", "acumulador", "geladeira", "cozinha", "fazenda", "zebra", "rainha", "patriota", "caminho", "montanha", "escorregador", "maremoto", "antraz", "onda", "acidentado", "apaixonar", "coleira", "proliferação", "almofadado", "peixaria", "narcisismo", "esforçado", "aldeia", "nevasca", "relâmpago", "ingressar", "pequeno", "visivelmente", "ambicionar", "matagal", "mamão", "extraordinário", "etanol", "remanescente", "asiático", "acumular", "eletroquímica", "complicação", "dígito", "escovar", "detonador", "falsificado", "combate", "documental", "gavião", "positividade", "baú", "justificante", "brigadista", "hostilizado", "evoluído", "proclamado", "instrumentista", "hipódromo", "desarmonia", "tipografia", "tinta", "reanimar", "matriarca", "admissão", "usuário", "incrementa", "dislexia", "orangotango", "turba", "inocente", "corneta", "limpar", "talhar", "cintura", "preocupado", "silencioso", "amanhã", "retirar"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);}
x = getRandomInt(0,100);
let palavra = palavrasPossiveis[x];
let resposta = palavra;
let tamanho = palavra.length;
let campo = [""];



for (i = 0; i < tamanho ; i ++){
    campo.push("_");
}
let erros = 0;
document.getElementById("campo").value = campo.join(" ");

function jogo(x){
    let acerto = false;
    if (palavra.includes(x)){
        while(palavra.includes(x) == true){
        let q = (palavra.indexOf(x)) ;
        campo.splice(q+1 , 1, x);
        palavra = palavra.replaceAt(q, "0");
        document.getElementById("campo").value = campo.join(" ");
        document.getElementById("narrador").innerHTML = "Certo!!"
        acerto = true;
        }
    }
    if (x == "a"){
        if (palavra.includes("ã")){
            while(palavra.includes("ã") == true){
            let q = (palavra.indexOf("ã")) ;
            campo.splice(q+1 , 1, "ã");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
        if (palavra.includes("á")){
            while(palavra.includes("á") == true){
            let q = (palavra.indexOf("á")) ;
            campo.splice(q+1 , 1, "á");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
        if (palavra.includes("â")){
            while(palavra.includes("â") == true){
            let q = (palavra.indexOf("â")) ;
            campo.splice(q+1 , 1, "â");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
    }
    
    if (x == "e"){
        if (palavra.includes("é")){
            while(palavra.includes("é") == true){
            let q = (palavra.indexOf("é")) ;
            campo.splice(q+1 , 1, "é");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
        if (palavra.includes("ê")){
            while(palavra.includes("ê") == true){
            let q = (palavra.indexOf("ê")) ;
            campo.splice(q+1 , 1, "ê");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
    }

    if (x == "i"){
        if (palavra.includes("í")){
            while(palavra.includes("í") == true){
            let q = (palavra.indexOf("í")) ;
            campo.splice(q+1 , 1, "í");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
    }

    if (x == "o"){
        if (palavra.includes("ó")){
            while(palavra.includes("ó") == true){
            let q = (palavra.indexOf("ó")) ;
            campo.splice(q+1 , 1, "ó");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
    }

    if (x == "u"){
        if (palavra.includes("ú")){
            while(palavra.includes("ú") == true){
            let q = (palavra.indexOf("ú")) ;
            campo.splice(q+1 , 1, "ú");
            palavra = palavra.replaceAt(q, "0");
            document.getElementById("campo").value = campo.join(" ");
            document.getElementById("narrador").innerHTML = "Certo!!"
            acerto = true;
            }
        }
    }


    if(acerto == false){
        erros = erros +1;
        

        switch(erros){
            case 1:
                document.getElementById("forca0").style.display = "none";
                document.getElementById("forca1").style.display = "inline";
                break;
            case 2:
                document.getElementById("forca1").style.display = "none";
                document.getElementById("forca2").style.display = "inline";
                break;
            case 3:
                document.getElementById("forca2").style.display = "none";
                document.getElementById("forca3").style.display = "inline";
                break;
            case 4:
                document.getElementById("forca3").style.display = "none";
                document.getElementById("forca4").style.display = "inline";
                break;
            case 5 :
                document.getElementById("forca4").style.display = "none";
                document.getElementById("forca5").style.display = "inline";
                break;
            case 6:
                document.getElementById("forca5").style.display = "none";
                document.getElementById("enforcado").style.display = "inline";
        }

        
        document.getElementById("narrador").innerHTML = "Tente outra letra..."

    }

    if (erros >= 6){
        document.getElementById("narrador").innerHTML = "Você morreu!";
        document.getElementById("campo").value = resposta.split("").join(" ");
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {
          button.disabled = true;
        }

    }

    if(campo.includes("_") == false){
        document.getElementById("narrador").innerHTML = "Parabéns!!!";
        document.getElementById("forca0").style.display = "none";
        document.getElementById("forca1").style.display = "none";
        document.getElementById("forca2").style.display = "none";
        document.getElementById("forca3").style.display = "none";
        document.getElementById("forca4").style.display = "none";
        document.getElementById("forca5").style.display = "none";
        document.getElementById("enforcado").style.display = "none";
        document.getElementById("vitorioso").style.display = "inline";
    }
}



document.getElementById("a").onclick = function(){
    let letra = "a";
    jogo(letra);
    document.getElementById("a").disabled = true;

}
document.getElementById("b").onclick = function(){
    let letra = "b";
    jogo(letra);
    document.getElementById("b").disabled = true;
}
document.getElementById("c").onclick = function(){
    let letra = "c";
    jogo(letra);
    document.getElementById("c").disabled = true;
}
document.getElementById("d").onclick = function(){
    let letra = "d";
    jogo(letra);
    document.getElementById("d").disabled = true;
}
document.getElementById("e").onclick = function(){
    let letra = "e";
    jogo(letra);
    document.getElementById("e").disabled = true;
}
document.getElementById("f").onclick = function(){
    let letra = "f";
    jogo(letra);
    document.getElementById("f").disabled = true;
}
document.getElementById("g").onclick = function(){
    let letra = "g";
    jogo(letra);
    document.getElementById("g").disabled = true;
}
document.getElementById("h").onclick = function(){
    let letra = "h";
    jogo(letra);
    document.getElementById("h").disabled = true;
}
document.getElementById("i").onclick = function(){
    let letra = "i";
    jogo(letra);
    document.getElementById("i").disabled = true;
}
document.getElementById("j").onclick = function(){
    let letra = "j";
    jogo(letra);
    document.getElementById("j").disabled = true;
}
document.getElementById("k").onclick = function(){
    let letra = "k";
    jogo(letra);
    document.getElementById("k").disabled = true;
}
document.getElementById("l").onclick = function(){
    let letra = "l";
    jogo(letra);
    document.getElementById("l").disabled = true;
}
document.getElementById("m").onclick = function(){
    let letra = "m";
    jogo(letra);
    document.getElementById("m").disabled = true;
}
document.getElementById("n").onclick = function(){
    let letra = "n";
    jogo(letra);
    document.getElementById("n").disabled = true;
}
document.getElementById("o").onclick = function(){
    let letra = "o";
    jogo(letra);
    document.getElementById("o").disabled = true;
}
document.getElementById("p").onclick = function(){
    let letra = "p";
    jogo(letra);
    document.getElementById("p").disabled = true;
}
document.getElementById("q").onclick = function(){
    let letra = "q";
    jogo(letra);
    document.getElementById("q").disabled = true;
}
document.getElementById("r").onclick = function(){
    let letra = "r";
    jogo(letra);
    document.getElementById("r").disabled = true;
}
document.getElementById("s").onclick = function(){
    let letra = "s";
    jogo(letra);
    document.getElementById("s").disabled = true;
}
document.getElementById("t").onclick = function(){
    let letra = "t";
    jogo(letra);
    document.getElementById("t").disabled = true;
}
document.getElementById("u").onclick = function(){
    let letra = "u";
    jogo(letra);
    document.getElementById("u").disabled = true;
}
document.getElementById("v").onclick = function(){
    let letra = "v";
    jogo(letra);
    document.getElementById("v").disabled = true;
}
document.getElementById("w").onclick = function(){
    let letra = "w";
    jogo(letra);
    document.getElementById("w").disabled = true;
}
document.getElementById("x").onclick = function(){
    let letra = "x";
    jogo(letra);
    document.getElementById("x").disabled = true;
}
document.getElementById("y").onclick = function(){
    let letra = "y";
    jogo(letra);
    document.getElementById("y").disabled = true;
}
document.getElementById("z").onclick = function(){
    let letra = "z";
    jogo(letra);
    document.getElementById("z").disabled = true;
}

document.getElementById("refresh").onclick = function(){
    window.location.reload();
};






