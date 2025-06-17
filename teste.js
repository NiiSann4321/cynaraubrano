let certificados = ['certificado01.jpg', 'certificado02.jpg', 'certificado03.jpg']
let valorAtual = 0
let certificado = document.querySelector('#certificado')
function adicionar(){
  if(valorAtual >= 0 && valorAtual < 2){
    valorAtual += 1
    certificado.src = certificados[valorAtual]
  }else{
    valorAtual = 0
  }
}
function retirar(){
    if(valorAtual <= 2 && valorAtual >= 0){
     valorAtual -= 1
   console.log(certificados[valorAtual])
  }
}
adicionar()
adicionar()
retirar()
retirar()
