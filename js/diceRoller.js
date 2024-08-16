function jogarDado() {
    const diceValue = document.getElementById("diceNumber").value
    const diceNumber = document.getElementById("diceResult")
    const diceImage = document.getElementById("diceImage")
    const values = []
    const diceImages = []

    for (let i = 1; i <= diceValue; i++) {
        let dado = Math.floor((Math.random() * 6) + 1)
        values.push(dado)
        diceImages.push(`<img src="/img/diceRoller/Dice-${dado}.png" alt="Dice ${dado}">`)
    }

    diceNumber.textContent = `Dados: ${values.join(", ")}`
    diceImage.innerHTML = diceImages.join(" ")
}