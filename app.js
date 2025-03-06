// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let names = [];
let input = document.getElementById('amigo')
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    let amigo = input.value;
    if( input.value === ''){
        alert('Ingrese un Nombre');
        return;
    }
    names.push(amigo);
    input.value = '';
    listaAmigos.innerHTML = '';
    names.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigos(){
    let amigoSecreto = names[Math.floor(Math.random() * names.length)];
    document.getElementById('resultado').textContent = 'El amigo secreto es: ' + amigoSecreto;
}