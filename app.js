let amigos=[];


function agregarUnAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

}


if (nombre == ""){
    alert("debes agregar un nombre");
    return;
}


if(amigos.includes(nombreAmigo)){alert(`el nombre que proporcionaste ${nombreAmigo} ya fue puesto anteriromente`);
return;
}

amigos.push(nombreAmigo);

inputAmigo.ariaValueMax = "";

function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML= "";

    for(let i = 0; i <amigos.length; i++){
        li.textContent = amigos [i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0)alert ("debes agregar un nombre");
    return;
}

const numeroAleatorio = Math.floor(Math.random() * amigos.length);


const amigoSorteado = amigos[numeroAleatorio];

const resultado = document.getElementById("resultado");
resultado.innerHTML = `amigo sorteado: <strong> ${amigoSorteado}</strong>`;
