document.getElementById('formulario1').addEventListener('submit', function( evento ){

    evento.preventDefault();

    if(this.getAttribute('class').match(/errado/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = []; 

    for(let key of dados.keys()){
        notas.push(dados.get(key)); 
    }

    console.log(notas);
    document.getElementById('resultado').innerHTML = "Formulario enviado";
});

function camponumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\d/)){
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

function campoletra(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\D/)){
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

function campouf(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\D/) && this.value.length == 2){
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

function campocep(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let cepnovo = this.value.replace(/-/,"");

        if(cepnovo.match(/[0-9]/)){
                document.querySelector('.errormsg').innerHTML = "";
                this.classList.remove('error');
                console.log(cepnovo)
                this.parentNode.classList.remove('errado')
        }
        else{
            document.querySelector('.errormsg').innerHTML = "Preencha o campo corretamente";
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            console.log(cepnovo)
            return false;
        }
    });
}

function campoemail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(email)){
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

let num = document.querySelectorAll('.num');
let letra = document.querySelectorAll('.letra');
let uf = document.querySelectorAll('.uf');
let cep = document.querySelectorAll('.cep');
let email = document.querySelectorAll('.email');

for(let emfoco of num){
    camponumerico(emfoco);
}

for(let emfoco of letra){
    campoletra(emfoco);
}

for(let emfoco of uf){
    campouf(emfoco);
}

for(let emfoco of cep){
    campocep(emfoco);
}

for(let emfoco of email){
    campoemail(emfoco);
}