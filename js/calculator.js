document.addEventListener("DOMContentLoaded", (event) => {
    inputs();
    // reset()
    // backspace()
    // negativo_positivo()
    // soma()
})

const RESULTADO = document.querySelector(".resultado_calc")
const RESULTADO_ANTERIOR = document.querySelector(".resultado_anterior")
let aux = ""
let currentInput = ""
let prevInput = ""
let numbers = []

// Making the keys work

function inputs() {
    document.querySelectorAll(".input").forEach(input => {
        window.addEventListener("keypress", tecla => {
            if (tecla.key === input.innerHTML) {
                currentInput = RESULTADO.textContent += `${tecla.key}`
                RESULTADO.textContent = currentInput

            }
        })
    })
    document.querySelectorAll(".input").forEach(input => {
        input.addEventListener("click", event => {
            event.preventDefault()
            currentInput += `${input.textContent}`
            RESULTADO.textContent = currentInput
            event.target.blur()
        })
    })


// making the backspace work

    document.querySelector(".backspace").addEventListener("click", event => {
        event.preventDefault()
        currentInput = RESULTADO.textContent.slice(0, -1)
        RESULTADO.textContent = currentInput
        event.target.blur()
    })

    window.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
            currentInput = RESULTADO.textContent.slice(0, -1)
            RESULTADO.textContent = currentInput
            console.log(currentInput)
        }
    });

// Turn numbers into positives or negatives

    document.querySelector(".negativo_positivo").addEventListener("click", event => {
        event.preventDefault()
        event.target.blur()
        if (RESULTADO.textContent >= 0) {
            currentInput = -(currentInput)
            console.log(currentInput)
            return (RESULTADO.textContent = currentInput)

        } else {
            currentInput = -(currentInput)
            console.log(currentInput)
            return (RESULTADO.textContent = currentInput)
        }
    })

// addition

    window.addEventListener("keydown", event => {
        let soma = document.querySelector(".mais")

        // if (!isNaN(event.key) || event.key === ".") {
        // // if (soma.innerHTML === event.key) {
        // //    currentInput = RESULTADO.textContent += soma.innerHTML
        // //    RESULTADO.textContent = currentInput
        // //    prevInput = RESULTADO.textContent
        // //    currentInput += soma.innerHTML
        //    currentInput += event.key
        //    RESULTADO.textContent = currentInput
        // //    prevInput = RESULTADO.textContent
        // }
        if (soma.innerHTML === event.key) {
            if (currentInput !== "") {
                numbers.push(parseFloat(currentInput))
                currentInput += event.key
                RESULTADO.textContent = currentInput
                aux = RESULTADO_ANTERIOR.textContent = currentInput
                currentInput = ""
            }
            RESULTADO.textContent = ""
        }

        if (event.key === "Enter") {
            if (currentInput !== "") {
                numbers.push(parseFloat(currentInput))
                RESULTADO_ANTERIOR.textContent = aux += currentInput
                currentInput = ""
            }
            let total = numbers.reduce((acc, num) => acc + num, 0)
            RESULTADO.textContent = total
            console.log("numeros: ", numbers)
            console.log("total: ", total)
            numbers = []

            // prevInput = RESULTADO.textContent
            // RESULTADO_ANTERIOR.textContent = prevInput
            // console.log(prevInput)
            // console.log(currentInput)
            // RESULTADO.textContent = parseFloat(prevInput) + parseFloat(currentInput)

            // const prevValue = parseFloat(prevInput)
            // const currentValue = parseFloat(currentInput)

            // if (!isNaN(prevValue) && !isNaN(currentValue)) {
            //     RESULTADO.textContent = prevValue + currentValue
            // } else {
            //     console.error("Erro na conversao para numeros")
            // }

            

       }
    })


// making the reset button works

    document.querySelector(".reset_calc").addEventListener("click", event => {
        event.preventDefault()
        event.target.blur()
        RESULTADO.textContent = ""
        RESULTADO_ANTERIOR.textContent = ""
        aux = ""
        currentInput = ""
        prevInput = ""
        console.log("PrevInput: " + prevInput)
        console.log("Resultado Anterior: " + RESULTADO_ANTERIOR.textContent)
        console.log("Resultado: " + RESULTADO.textContent)
        console.log("Aux: " + aux)
    })
}
