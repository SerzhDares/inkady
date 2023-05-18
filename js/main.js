// -----------------------------BURGER_MENU-------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
    })
})

document.getElementById("menu").addEventListener("click", event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener("click", event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open");
});


// -----------------------------SPARES_SLIDER-----------------------------------------

const brandBlocksSpares = document.querySelectorAll("#spares_bb .brands_block_container_visible .brand_block");
const sliderLineSpares = document.getElementById("slider_spares");
let countSpares = 0;
let widthSpares;

function initSpares() {
    widthSpares = document.querySelector(".brand_block").offsetWidth;
    sliderLineSpares.style.widthSpares = widthSpares*brandBlocksSpares.length + "px";
    brandBlocksSpares.forEach( item => {
        item.style.width = widthSpares + "px";
    });
    rollSliderSpares();
}

window.addEventListener("resize", initSpares);
initSpares();

document.getElementById("prev_spares").addEventListener("click", function() {
        countSpares--;
        if (countSpares < 0) {
            countSpares = brandBlocksSpares.length - 1;
        }
        rollSliderSpares();
});

document.getElementById("next_spares").addEventListener("click", function() {
        countSpares++;
        if (countSpares >= brandBlocksSpares.length) {
            countSpares = 0;
        }
        rollSliderSpares();
});


function rollSliderSpares() {
    sliderLineSpares.style.transform = "translate(-"+countSpares*widthSpares+"px)";
}

// -----------------------------PESTICIDES_SLIDER-----------------------------------------

const brandBlocksPest = document.querySelectorAll("#pesticides_bb .brands_block_container_visible .brand_block");
const sliderLinePest = document.getElementById("slider_pesticides");
let countPest = 0;
let widthPest;

function initPest() {
    widthPest = document.querySelector(".brand_block").offsetWidth;
    sliderLinePest.style.widthPest = widthPest*brandBlocksPest.length + "px";
    brandBlocksPest.forEach( item => {
        item.style.width = widthPest + "px";
    });
    rollSliderPest();
}

window.addEventListener("resize", initPest);
initPest();

document.getElementById("prev_pesticides").addEventListener("click", function() {
        countPest--;
        if (countPest < 0) {
            countPest = brandBlocksPest.length - 1;
        }
        rollSliderPest();
    });

document.getElementById("next_pesticides").addEventListener("click", function() {
        countPest++;
        if (countPest >= brandBlocksPest.length) {
            countPest = 0;
        }
        rollSliderPest();
    });

function rollSliderPest() {
    sliderLinePest.style.transform = "translate(-"+countPest*widthPest+"px)";
}


// -----------------------------FERTILIZER_SLIDER-----------------------------------------

const brandBlocksFert = document.querySelectorAll("#fertilizer_bb .brands_block_container_visible .brand_block");
const sliderLineFert = document.getElementById("slider_fertilizer");
let countFert = 0;
let widthFert;

function initFert() {
    widthFert = document.querySelector(".brand_block").offsetWidth;
    sliderLineFert.style.widthFert = widthFert*brandBlocksFert.length + "px";
    brandBlocksFert.forEach( item => {
        item.style.width = widthFert + "px";
    });
    rollSliderFert();
}

window.addEventListener("resize", initFert);
initFert();

document.getElementById("prev_fertilizer").addEventListener("click", function() {
        countFert--;
        if (countFert < 0) {
            countFert = brandBlocksFert.length - 1;
        }
        rollSliderFert();
    });

document.getElementById("next_fertilizer").addEventListener("click", function() {
        countFert++;
        if (countFert >= brandBlocksFert.length) {
            countFert = 0;
        }
        rollSliderFert();
    });

function rollSliderFert() {
    sliderLineFert.style.transform = "translate(-"+countFert*widthFert+"px)";
}