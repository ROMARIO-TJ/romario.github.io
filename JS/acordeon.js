const abajo = document.querySelectorAll('.abajo')

abajo.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {

        pregunta.classList.toggle("active")


    })

});