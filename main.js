const color = document.querySelector("#color");

// console.log(color.value)

//eventos 

//dos formar de realizar eventos
// color.addEventListener("input", funcion)

color.addEventListener("input", () => {
    salida.innerHTML = color.value
    salida.style.background = color.value
    salida.style.color = "#FFF"
})

