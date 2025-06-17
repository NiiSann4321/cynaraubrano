let menu = document.getElementById("menu");
function clicarMenu() {
    menu.style.opacity = "1";
    menu.style.left = "0px";
}
function clicarSair() {
    menu.style.opacity = "0";
    menu.style.left = "-200px";
}

let certificados = ['certificado01.jpg', 'certificado02.jpg', 'certificado03.jpg']
let valorAtual = 0
let cert = document.querySelector('img#imgc')
function setaDireita(){
  if(valorAtual >= 0 && valorAtual < 2){
    valorAtual += 1
    cert.src = `certificado/${certificados[valorAtual]}`
  }else{
    valorAtual = 2
    cert.src = `certificado/${certificados[valorAtual]}`
  }
} 
function setaEsquerda(){
    if(valorAtual >= 1 && valorAtual <= 2){
    valorAtual -= 1
    cert.src = `certificado/${certificados[valorAtual]}`
  }else{
    valorAtual = 0
    cert.src = `certificado/${certificados[valorAtual]}`
  }
}




































/*
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Carrossel de Imagens</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

<div class="carrossel">
  <button class="seta esquerda" onclick="voltarImagem()">&#10094;</button>

  <img id="imagemCarrossel" src="imagem1.jpg" alt="Imagem 1">

  <button class="seta direita" onclick="avancarImagem()">&#10095;</button>
</div>

<script src="script.js"></script>
</body>
</html>
 */





/*
const imagens = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg"];
let indiceAtual = 0;

const imagemCarrossel = document.getElementById("imagemCarrossel");

function atualizarImagem() {
  imagemCarrossel.src = imagens[indiceAtual];
}

function avancarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function voltarImagem() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}
 */