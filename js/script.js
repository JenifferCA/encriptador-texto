const ingresoTexto= document.getElementById(ingresoTexto); 
const botonEncriptar= document.getElementById(botonEncriptar); 
const botonDesencriptar= document.getElementById(botonDesencriptar); 
const botonCopiar= document.getElementById(botonCopiar); 
const mensajeFinal= document.getElementById(mensajeFinal); 
const munheco= document.getElementById(munheco); 
const rightInfo= document.getElementById(rightInfo); 
const right= document.getElementById(right); 
//a : ai
//e : enter
//i : imes
//o : ober
//u : ufat

let reemplazar = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],

]

botonEncriptar.addEventListener("click", () => {
    const texto= ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        }; 
        return newText
    }
    const textoEncriptado = encriptar(texto)

    mensajeFinal.innerHTML = textoEncriptado;
    munheco.style.display = "none";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList("ajustar");

})

