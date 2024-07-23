let maxNum = 100
let minNum = 1
let answer = Math.floor((Math.random() * maxNum + minNum))
let tentativas = 0
let running = true

let numeroDigitado = document.querySelector("#numeroDigitado")
let error = document.querySelector("#error")
let mostraTentativas = document.querySelector("#tentativas")
let backspace = document.querySelector("#backspace")
let enter = document.querySelector("#confirm")

document.addEventListener("DOMContentLoaded", event => {
    mostraNumero()
    
})

function mostraNumero() {
    document.querySelectorAll(".input").forEach(input => {
        window.addEventListener("keypress", event => {
            if (event.key === input.innerHTML) {
                numeroDigitado.textContent += input.innerHTML
            }
        })
    })

    document.querySelectorAll(".input").forEach(input => {
        input.addEventListener("click", event => {
            event.preventDefault()
            if (input.innerHTML) {
                numeroDigitado.textContent += input.innerHTML
            }
        })
    })

    window.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
            numeroDigitado.textContent = numeroDigitado.textContent.slice(0, -1)
        }
    })

    backspace.addEventListener("click", event => {
        event.preventDefault()
            numeroDigitado.textContent = numeroDigitado.textContent.slice(0, -1)
    })

    window.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            tentativas++
            if (numeroDigitado.textContent > 100 || numeroDigitado.textContent < 1) {
                error.textContent = "Digite um numero maior que 0 e menor que 100"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else if (numeroDigitado.textContent < answer){
                error.textContent = "Digite um número maior"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else if (numeroDigitado.textContent > answer) {
                error.textContent = "Digite um número menor"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else {
                error.textContent = "Parabéns, você acertou"
                mostraTentativas.textContent = tentativas
            }
        }
    })

    enter.addEventListener("click", event => {
        event.preventDefault()
            tentativas++
            if (numeroDigitado.textContent > 100 || numeroDigitado.textContent < 1) {
                error.textContent = "Digite um numero maior que 0 e menor que 100"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else if (numeroDigitado.textContent < answer){
                error.textContent = "Digite um número maior"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else if (numeroDigitado.textContent > answer) {
                error.textContent = "Digite um número menor"
                console.log(numeroDigitado.textContent)
                numeroDigitado.textContent = ""
            } else {
                error.textContent = "Parabéns, você acertou"
                mostraTentativas.textContent = tentativas
            }
        }
    )
}




