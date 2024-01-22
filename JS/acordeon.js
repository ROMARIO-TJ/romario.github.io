
const contenedor01 = document.querySelectorAll('.abajo')

contenedor01.forEach(function (contenedor) {

    const btn = contenedor.querySelector('.pregunta')
    btn.addEventListener('click', function () {
        contenedor01.forEach(function (item) {
            if (item !== contenedor) {
                item.classList.remove('active')
            }
        })

        contenedor.classList.toggle('active')
    })
})