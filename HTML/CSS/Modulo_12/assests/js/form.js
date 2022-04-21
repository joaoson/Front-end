
function obterMedia(notas){

    let soma = 0;
    for( c=0; c < notas.length; c++){
        soma += notas[c];
    }

    let media = soma/notas.length;

    return media;
};

let media; 

function aprovacao(notas){

    let media = obterMedia(notas);
    let cond = media >= 6 ? "Aprovado" : "Reprovado";

    return "Media:  " + media + "  e sua situacao eh  " + cond;
};

document.addEventListener('submit', function (evento){
    
    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formula');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
        notas.push( parseInt(dados.get(key)));
    }

    console.log(objeto);
    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});
