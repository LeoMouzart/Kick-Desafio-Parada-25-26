// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
  "Bob Esponja",
  "Os Padrinhos Mágicos",
  "Kim Possible",
  "As Aventuras de Jackie Chan",
  "Hora de Aventura",
  "Avatar: A Lenda de Aang",
  "Ben 10",
  "X-Men: Evolution",
  "Duck Dodgers",
  "Danny Phantom",
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
  const lista = document.querySelector(".lista-desenhos");
  lista.innerHTML = "";

  desenhosAnimados.forEach((desenho) => {
    const item = document.createElement("li");
    item.textContent = desenho;
    lista.appendChild(item);
  });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
  const novoDesenho = document.getElementById("novo-desenho");
  if (novoDesenho.value.trim() !== "") {
    desenhosAnimados[indiceSubstituicao] = novoDesenho.value;
    indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length;
    exibirLista();
    document.getElementById("novo-desenho").value = "";
  }
}

// Exibe a lista inicial quando a página carrega
window.onload = exibirLista();
