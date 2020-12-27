/* tocanco a Música */
var x = document.getElementById("myAudio"); 


function playAudio() { 
  x.play(); 
}

function pauseAudio() { 
  x.pause(); 
}
/* faça com seus amigos */
let form = document.getElementById('formulario');
let campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
  const copiar = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
  copiar(`https://eventonanatal.glitch.me/` + encodeURIComponent(campo.value))
  alert('Copiado ✋😎 vote no meu projeto')
    e.preventDefault();
});