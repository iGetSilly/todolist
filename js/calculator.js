document.addEventListener("DOMContentLoaded", (event) => {
    inputs(event);
})

function inputs(event) {
    event.preventDefault()


    // Fazendo as teclas funcionarem

    let resultado = document.querySelector(".resultado_calc")
    let resultado_anterior = document.querySelector(".resultado_anterior")
    let aux = 0
    let currentInput = ""
    let prevInput = ""
    document.querySelectorAll(".input").forEach(input => {
        window.addEventListener("keypress", tecla => {
            if (tecla.key === input.innerHTML) {
                currentInput = resultado.textContent += `${tecla.key}`
                resultado.textContent = currentInput
            }
        })
    })

    document.querySelectorAll(".input").forEach(input => {
        input.addEventListener("click", event => {
            event.preventDefault()
            currentInput += `${input.textContent}`
            resultado.textContent = currentInput

        })
    })

    // Fazendo o backspace funcionar

    document.querySelector(".backspace").addEventListener("click", event => {
        event.preventDefault()
        currentInput = resultado.textContent.slice(0, -1)
        resultado.textContent = currentInput
    })

    window.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
            event.preventDefault();
            currentInput = resultado.textContent.slice(0, -1)
            resultado.textContent = currentInput
            console.log(currentInput)
        }
    });

    // Fazendo o botao de reset funcionar

    document.querySelector(".reset_calc").addEventListener("click", event => {
        event.preventDefault()
        currentInput = ""
        prevInput = ""
        resultado.textContent = currentInput
        resultado_anterior.textContent = prevInput
    })

    // Deixando os numeros negativos ou positivos

    document.querySelector(".negativo_positivo").addEventListener("click", event => {
        event.preventDefault()
        if (Math.sign(resultado.textContent) === 1) {
            resultado.textContent = -(currentInput)
        } else {
            resultado.textContent = currentInput
        }

    })

    // Soma

    window.addEventListener("keydown", event => {
        document.querySelectorAll(".input_logico").forEach(input_logico => {
            if (input_logico.innerHTML === event.key) {
                event.preventDefault()
                aux = currentInput
                prevInput = resultado_anterior.textContent = aux + input_logico.innerHTML
                resultado_anterior.textContent = prevInput
                currentInput = ""
                resultado.textContent = currentInput

                window.addEventListener("keypress", event => {
                    if (event.key === "Enter" && resultado.textContent === "") {
                        event.preventDefault()
                        resultado.textContent = currentInput
                    } else {
                        if (event.key === "Enter") {
                            event.preventDefault()
            
                            prevInput = resultado_anterior.textContent = aux + input_logico.innerHTML + currentInput
                            console.log(prevInput)
                            resultado_anterior.textContent = prevInput
                            currentInput = resultado.textContent = parseFloat(aux) + parseFloat(currentInput)
                            resultado.textContent = currentInput
                        }

                    }

                })
            }
        })
    })
}