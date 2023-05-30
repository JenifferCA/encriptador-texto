const ingresoTexto = document.getElementById("ingresoTexto"); 
const botonEncriptar = document.getElementById("botonEncriptar"); 
const botonDesencriptar = document.getElementById("botonDesencriptar"); 
const botonCopiar = document.getElementById("botonCopiar"); 
const mensajeFinal = document.getElementById("mensajeFinal"); 
const munheco = document.getElementById("munheco"); 
const rightInfo = document.getElementById("rightInfo"); 
const right = document.getElementById("right"); 
//a : ai
//e : enter
//i : imes
//o : ober
//u : ufat

let reemplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];
function encriptar(newText){
    for (let i = 0; i < reemplazar.length; i++){
        if (newText.includes(reemplazar[i][0])){
            newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
        };
    }; 
    return newText
}

function desencriptar(encriptedText) {
    for (let i = 0; i < reemplazar.length; i++) {
      if (encriptedText.includes(reemplazar[i][1])) {
        encriptedText = encriptedText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
      }
    }
    return encriptedText;
  }

botonEncriptar.addEventListener("click", () => {
    const texto= ingresoTexto.value.toLowerCase()
    const textoEncriptado = encriptar(texto)
    mensajeFinal.innerHTML = textoEncriptado;
    munheco.style.display = "none";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
});

botonCopiar.addEventListener('click', () => {
    const texto = mensajeFinal.innerHTML;
    navigator.permissions.query({name: "clipboard-write"})
    .then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(texto).then(() => {
                alert(`El texto ha sido copiado ${texto}`)
              }, () => {
                alert(`Error al copiar ${texto}`)
              });
        }
      });
});

botonDesencriptar.addEventListener('click', () => {
    const texto = ingresoTexto.value.toLowerCase()
    const textoDesencriptado = desencriptar(texto)
    mensajeFinal.innerHTML = textoDesencriptado;
    munheco.style.display = "none";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
})

