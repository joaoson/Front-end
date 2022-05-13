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

    if(this.getAttribute('class').match(/errado/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = []; 

    for(let key of dados.keys()){

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


function campopreenchido(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
                document.querySelector('.errormsg').innerHTML = "Preencha o campo corretamente";
                this.classList.add('error');
                this.parentNode.classList.add('errado')
                return false;
        }
        else{
            document.querySelector('.errormsg').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('errado')
        }
    });
}

function camponumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/[0-9]/) && this.value >= 0 && this.value <= 10){

                document.querySelector('.errormsg').innerHTML = "";
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
        }
        else{
            document.querySelector('.errormsg').innerHTML = "Preencha o campo corretamente";
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            return false;
        }
    });
}

let obg = document.querySelectorAll('input.obg')

for(let emfoco of obg){
    camponumerico(emfoco);
}

