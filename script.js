let who = ['Mi perro ', 'Mi hermano ', 'El cartero ', 'El camarero ', 'Un extraño ', 'Un terremoto '];
let verb = ['se comió ', 'tiró ', 'rompió ', 'robó ', 'estropeó ', 'destruyó '];
let what = ['mis deberes ', 'mi reloj ', 'mi teléfono ', 'mi pierna ', 'mi traje ','el coche '];
let when = ['ayer!', 'despues del partido!', 'en la calle!', 'en el parque!', 'al salir del cine!'];

function excuseGenerator () {

  let indxWho = Math.floor(Math.random() * who.length);
  let indxVerb = Math.floor(Math.random() * verb.length);
  let indxWhat = Math.floor(Math.random() * what.length);
  let indxWhen = Math.floor(Math.random() * when.length);

  return who[indxWho] + "" + verb[indxVerb] + "" + what[indxWhat] + "" + when[indxWhen];
}

function onLoad(){
  var excusa = document.getElementById('excuse');
  excusa.innerHTML = excuseGenerator();
}

window.onload = onLoad;
