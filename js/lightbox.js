document.addEventListener('DOMContentLoaded', (event) => {
    getSrc();
    getSrcLightbox()
    changeImg()
});

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

function expandMainImg() {
    let mainImg = document.querySelector(".mainImg")
    let lightbox = document.querySelector(".lightbox")
    let icon_left = document.querySelector(".icon_left")
    let icon_right = document.querySelector(".icon_right")
    if (lightbox.classList.contains("displayOn")) {
        document.querySelectorAll(".lightbox_images .img").forEach(img => {
            img.classList.add("displayOff")
        })
    }
    mainImg.classList.add("expandMainImg")
    icon_left.classList.remove("displayOff")
    icon_left.classList.add("displayOn")
    icon_right.classList.remove("displayOff")
    icon_right.classList.add("displayOn")

}

function changeImg() {
    
}
