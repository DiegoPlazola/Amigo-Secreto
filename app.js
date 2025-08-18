let listaAmigos = [];


function agregarAmigo(){
  let amigo = document.getElementById("amigo").value.trim();
  
  if (amigo === ""){
    alert("No puede haber un campo vacio, ingrese un nombre")
  } else {
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarAmigos();
  }
}

function actualizarAmigos(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    lista.innerHTML += "<li>" + listaAmigos[i] + "</li>";
  }
}

function sortearAmigo(){
  if (listaAmigos.length < 2){
    alert("La lista contiene amigos insuficientes para realizar el sorteo, agrega más");
    return;
  } else {
    let amigosSorteados = Math.floor(Math.random() * listaAmigos.length);
    let resultados = listaAmigos[amigosSorteados];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + resultados;
  }
}

