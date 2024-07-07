function getSrc() {
   document.querySelectorAll("main .img").forEach(img => {
    img.addEventListener('click', function () {
        let src = this.src
        let main = document.querySelector(".container")
        let lightbox = document.querySelector(".lightbox")
        let mainImg = document.querySelector(".mainImg")
        if(main.classList.contains("displayOn")) {
            main.classList.remove("displayOn")
            main.classList.add("displayOff")
            lightbox.classList.remove("displayOff")
            lightbox.classList.add("displayOn")
            mainImg.src = src
        }
    })
   })
}