// ============----------- navigation bar -----------============
const header = document.querySelector("header");
let navigation=document.querySelector(".navigation")

let headerId = document.getElementById("header")
headerDistance = headerId.offsetHeight
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
    // if (window.scrollY > 0 && window.innerWidth < 1040) {
    //     navigation.style.top="11.3%"
    // }
    // if (window.scrollY > 0 && window.innerWidth < 1040) {
    //     navigation.style.top="11.3%"
    // }
    // if(headerDistance ==66){
    //     navigation.style.top="11.3%"
    // }
    // else{
    //     navigation.style.top="11.3%"
    // }
})

// ============----------- side navigation bar -----------============


navigationItems = document.querySelectorAll(".navigation a")
bars = document.querySelector(".bars")
navigation = document.querySelector(".navigation")

bars.addEventListener("click", () => {
    bars.classList.toggle("uil-times");
    navigation.classList.toggle("active");
})
navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})
window.onscroll = () => {
    bars.classList.remove("uil-times");
    navigation.classList.remove("active");
}

// ============-----------reveal -----------============
window.addEventListener("scroll", reveal)

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active")
        }
    }
}
// ============-----------hide gallery -----------============

allG = document.querySelector(".allG")
littleG = document.querySelector(".littleG")
hideG = document.querySelectorAll(".hideG")

hideG.forEach((x) => {
    allG.addEventListener("click", () => {
        x.classList.add("ac");
        allG.style.display = "none"
        littleG.style.display = "block"
    })
    littleG.addEventListener("click", () => {
        x.classList.remove("ac");
        littleG.style.display = "none"
        allG.style.display = "block"
    })
})

// ============-----------hide website -----------============

allW = document.querySelector(".allW")
littleW = document.querySelector(".littleW")
hideW = document.querySelectorAll(".hideW")

hideW.forEach((x) => {
    allW.addEventListener("click", () => {
        x.classList.add("ac");
        allW.style.display = "none"
        littleW.style.display = "block"
    })
    littleW.addEventListener("click", () => {
        x.classList.remove("ac");
        littleW.style.display = "none"
        allW.style.display = "block"
    })
})


























// var imgList=Array.from(document.getElementsByClassName("img-item"))
var imgList = Array.from(document.querySelectorAll(".mygallery .card .card-img img"))
var lightContainer = document.querySelector(".light-container")
var lightBox = document.querySelector(".light-box")
var closeIcon = document.querySelector("#close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var thehtml = document.getElementById("thehtml")
var currentIndex;


for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function (e) {
        lightContainer.classList.replace("d-none", "d-flex")
        var imgSrc = e.target.getAttribute("src")
        lightBox.style.backgroundImage = `url(${imgSrc})`
        currentIndex = imgList.indexOf(e.target)
        console.log(currentIndex)
        console.log(thehtml)

        console.log(lightContainer.getAttribute("class"))
        if (lightContainer.getAttribute("class").includes("d-flex")) {
            thehtml.style.overflowY = "hidden"

        }

    })
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }
    var imgSrc = imgList[currentIndex].getAttribute("src")
    lightBox.style.backgroundImage = `url(${imgSrc})`
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1;
    }
    var imgSrc = imgList[currentIndex].getAttribute("src")
    lightBox.style.backgroundImage = `url(${imgSrc})`
}

function closeSlide() {
    lightContainer.classList.replace("d-flex", "d-none")
    if (lightContainer.getAttribute("class").includes("d-none")) {
        thehtml.style.overflowY = "auto"
    }
}

document.addEventListener("keydown", function (e) {
    console.log(e)
    if (e.code == "ArrowRight") {
        nextSlide()
    }
    else if (e.code == "ArrowLeft") {
        prevSlide()
    }
    else if (e.code = "Escape") {
        closeSlide()
    }
})





// let load = document.getElementById("load")
// let spinLoader = document.querySelector(".spinLoader")

// window.addEventListener("load", () => {
//     let x = setInterval(() => {
//         load.style.bottom = `100%`;
//         thehtml.style.overflowY = "scroll";
//         spinLoader.style.display = "none";
//     }, 1000)

// })


let about = document.querySelector(".about")
let arrowUp = document.querySelector(".arrowUp")

let aboutDistance = about.offsetTop
window.addEventListener("scroll", () => {
    if (window.scrollY > aboutDistance - 300) {
        arrowUp.style.opacity = 1
    } else {
        arrowUp.style.opacity = 0
    }
})
arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

// document.addEventListener("click",()=>{
//     let header = document.getElementById("header")
//     headerDistance = header.offsetHeight
//     console.log(aboutDistance)
//     aboutDistance = header.offsetTop
//     console.log(headerDistance)
    
// })

