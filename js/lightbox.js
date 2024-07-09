document.addEventListener('DOMContentLoaded', (event) => {
    function getSrc() {
        document.querySelectorAll("main .img").forEach(img => {
            img.addEventListener('click', function () {
                let src = this.src;
                let main = document.querySelector(".container");
                let lightbox = document.querySelector(".lightbox");
                let mainImg = document.querySelector(".mainImg");
                if (main && lightbox && mainImg) {
                    if (main.classList.contains("displayOn")) {
                        main.classList.remove("displayOn");
                        main.classList.add("displayOff");
                        lightbox.classList.remove("displayOff");
                        lightbox.classList.add("displayOn");
                        mainImg.src = src;
                    }
                }
            });
        });
    }
    getSrc();
});

document.addEventListener('DOMContentLoaded', (event) => {
    function getSrcLightbox() {
        document.querySelectorAll("section div .img").forEach(img => {
            img.addEventListener('click', function () {
                let src = this.src
                let mainImg = document.querySelector(".mainImg")
                if (mainImg) {
                    if (mainImg.src !== src) {
                        mainImg.src = src
                    }
                }
            })
        })
    }
    getSrcLightbox()
})

function expandMainImg() {
    let mainImg = document.querySelector(".mainImg")
    let lightbox = document.querySelector(".lightbox")
    if (lightbox.classList.contains("displayOn")) {
        document.querySelectorAll("section div .img").forEach(img => {
            img.classList.add("displayOff")
        })
    }
    mainImg.classList.add("expandMainImg")
}