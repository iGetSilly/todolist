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
