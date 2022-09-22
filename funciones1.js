function crearElementoyAtributo1()
{
  var elemento=document.createElement('a');
  var puntero=document.getElementById('direccion1');
  puntero.appendChild(elemento);
  nodotexto=document.createTextNode('La Razon');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href','https://www.la-razon.com/');
}