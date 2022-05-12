let answer;

function condicao( notas ){

    let media = 0;

    for (let i = 0; i < notas.length; i++) {
        media += notas[i];
    }

    media = media/4;

    let answer = media>=7 ? "legal" : "meme";

    return answer + media;

}

document.getElementById('formulario1').addEventListener('submit', function( evento ){

    evento.preventDefault();

    let dados = new FormData(this);

    let notas = []; 

    for(key of dados.keys()){

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)){
           notas.push(numero); 
        }  
    }

    console.log(notas);

    texto = condicao(notas);

    console.log(texto);

    document.getElementById("resultado").innerHTML = texto;

});
