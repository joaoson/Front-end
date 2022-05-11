let answer;

function condicao( notas ){

    let media = notas/4;

    let answer = media>7 ? "legal" : "meme";

    return answer;

}


document.getElementById('formulario1').addEventListener('submit', function( evento ){

    evento.preventDefault();

    let dados = new FormData(this);

    let objeto = {};

    let notas = 0; 

    for(key of dados.keys()){
        objeto[key]= dados.get(key);

        notas += parseInt(dados.get(key));
    }

    console.log(notas);

    console.log(objeto);

    texto = condicao(notas);

    console.log(texto);

    document.getElementById("resultado").innerHTML = texto;

});
