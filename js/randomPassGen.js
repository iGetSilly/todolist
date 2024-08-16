function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+."

let allowedChars = ""
let password = ""

allowedChars += includeLowerCase ? lowerCase : ""
allowedChars += includeUpperCase ? upperCase : ""
allowedChars += includeNumbers ? numbers : ""
allowedChars += includeSymbols ? symbols : ""

if (length <= 0) {
    return("A senha precisa ter pelo menos 1 caractere")
}

if (allowedChars.length === 0) {
    return("É preciso selecionar ao menos 1 tipo de caractere")
}

for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor((Math.random() * allowedChars.length))
    password += allowedChars[randomIndex]
}

return (password)
}

let passwordLength = 15
let includeLowerCase = true
let includeUpperCase = true
let includeNumbers = true
let includeSymbols = true

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)

console.log(`A senha gerada foi: ${password}`)


