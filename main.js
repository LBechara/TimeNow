var c = 0
var circulo = document.querySelector(".circulo")
var toggle = document.querySelector(".toggle")
var yearly = document.querySelector("#yearly")
var monthly = document.querySelector("#monthly")

document.getElementById("toggle").addEventListener("click", function () {
  trocaClasses()
})

function trocaClasses() {
  if (c == 0) {
    circulo.classList.add("esquerda")
    toggle.style.backgroundColor = "#46c387"
    yearly.classList.add("bold")
    monthly.classList.remove("bold")
    c = 1
    console.log("entrou direita", c)
  } else {
    circulo.classList.remove("esquerda")
    toggle.style.backgroundColor = "#3a84f7"
    yearly.classList.remove("bold")
    monthly.classList.add("bold")

    c = 0
  }
}
