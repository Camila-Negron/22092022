function crearElementoyAtributo2()
{
  var elemento=document.createElement('a');
  var puntero=document.getElementById('direccion1');
  puntero.appendChild(elemento);
  nodotexto=document.createTextNode('CNN');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href','https://cnnespanol.cnn.com/');
}