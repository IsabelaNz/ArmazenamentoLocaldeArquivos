// comando para gravar no localStorage f12- application
window.localStorage.setItem("Uma Data", "20 de outubro de 2023");

let vetor = ["abacaxi",8.50];
window.localStorage.setItem("Meu vetor", vetor);

//usar stringfy
let vetorSerializado = JSON.stringify(vetor);
window.localStorage.setItem("meuVetor2", vetorSerializado);

//usar stringfy com objeto 
let umObjeto = {professor: "Luciano", disciplina: "Javascript"};
let objetoSerealizado = JSON.stringify(umObjeto);
window.localStorage.setItem("umObjeto", objetoSerealizado);

//usar stringify com vetor de objetos
let umObjeto2 = {professor: "Paulo", disciplina: "Oficina Front-End"};
let listaProf = [umObjeto,umObjeto2];
let listaSerealizada = JSON.stringify(listaProf);
window.localStorage.setItem("lista", listaSerealizada);

// processos  para leitura de localStorage
let corpo = document.getElementById("exibe");
corpo.innerHTML += window.localStorage.getItem("umaData");
corpo.innerHTML += "<br>";
corpo.innerHTML += window.localStorage.getItem("meuVetor");
corpo.innerHTML += "<br>";
corpo.innerHTML += JSON.parse(window.localStorage.getItem("meuVetor2"));
corpo.innerHTML += "<br>";
corpo.innerHTML += JSON.parse(window.localStorage.getItem("umObjeto"));
corpo.innerHTML += "<br>";
corpo.innerHTML += JSON.parse(window.localStorage.getItem("lista"));
corpo.innerHTML += "<hr><hr>";
 
// recuperando para variáveis
let novoVetor = JSON.parse(window.localStorage.getItem("meuVetor2"));
let novoObjeto = JSON.parse(window.localStorage.getItem("umObjeto"));
let novaLista =  JSON.parse(window.localStorage.getItem("lista"));
 
    corpo.innerHTML += novoVetor[0];
    corpo.innerHTML += "<br>";
    corpo.innerHTML += novoVetor[1];
    corpo.innerHTML += "<br>";
 
    corpo.innerHTML += novoObjeto.professor + "<--->";
    corpo.innerHTML += novoObjeto.disciplina + "<br>";

    let erro = window.localStorage.getItem("umObjeto");
    corpo.innerHTML += erro.professor;