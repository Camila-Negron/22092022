function crearElementoyAtributo3()
{
  var elemento=document.createElement('a');
  var puntero=document.getElementById('direccion1');
  puntero.appendChild(elemento);
  nodotexto=document.createTextNode('BBC');
  elemento.appendChild(nodotexto);
  elemento.setAttribute('href','https://www.bbc.com/mundo');
}