

function ad() {
  const x = Number(document.getElementById("Valeur1").value);
// console.log(x)
  const y = Number(document.getElementById("Valeur2").value);
  const z = x+y;
    document.getElementById("total").value=z;
}

function sou() {
  const x = Number(document.getElementById("Valeur1").value);
  const y = Number(document.getElementById("Valeur2").value);
  const z = x-y;
    document.getElementById("total").value=z;
}

function mul() {
  const x = Number(document.getElementById("Valeur1").value);
  const y = Number(document.getElementById("Valeur2").value);
  const z = x*y;
    document.getElementById("total").value=z;
}

function divi() {
  const x = Number(document.getElementById("Valeur1").value);
  const y = Number(document.getElementById("Valeur2").value);
  const z = x/y;
    document.getElementById("total").value=z;
}
