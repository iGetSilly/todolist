// Alteraçao do botão hamburger do menu

function alteraIcon() {
    let hamIcon = document.getElementById("hamIcon")
    let currentBackgroundImage = window.getComputedStyle(hamIcon).backgroundImage;
    if (currentBackgroundImage.includes("Ham%20icon.svg")) {
        hamIcon.style.backgroundImage = "url('img/X button.svg')"
    } else {
        hamIcon.style.backgroundImage = "url('img/Ham icon.svg')";
    }
}

// Fazendo o menu aparecer ao clicar no botao hamburger
function changeVisibility() {
    let off = document.querySelector(".off")
    let currentVisibility = window.getComputedStyle(off).visibility
    if (currentVisibility.includes("hidden")) {
        off.style.visibility = "visible"
        off.style.scale = 1
    } else {
        off.style.visibility = "hidden"
        off.style.scale = 0
    }
}
