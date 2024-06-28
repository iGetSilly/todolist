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

// Alterando o conteudo da pagina

function changeContent(event, sectionId) {
    event.preventDefault()
    let sections = document.querySelectorAll(".pageContent, .mainContent")
    console.log(sections.map)
    sections.forEach(section => {
        if(section.id === sectionId) {
            section.classList.remove("changeDisplayOff")
            section.classList.add("changeDisplayOn")
            console.log("mudou")
        } else {
            section.classList.remove("changeDisplayOn")
            section.classList.add("changeDisplayOff")
        }
    })
}

// Alterando conteudo selecionado na pagina projetos

function changeProjectContent(event, contentId) {
    event.preventDefault()
    let projetoContents = document.querySelectorAll(".projetosPageContent")
    projetoContents.forEach(content => {
        if (content.id === contentId) {
            content.classList.remove("changeDisplayOff")
            content.classList.add("changeDisplayOn")
        } else {
            content.classList.remove("changeDisplayOn")
            content.classList.add("changeDisplayOff")
        }
    })
}

// Adicionando background ao link nav na aba projetos

function changeBackgroundNavProjetos(id) {
    let navProjetos = document.querySelectorAll(".navProjeto")
    navProjetos.forEach(linkNav => {
        if(linkNav.id === id) {
            linkNav.classList.add("active")
        } else {
            linkNav.classList.remove("active")
        }
    })
}


