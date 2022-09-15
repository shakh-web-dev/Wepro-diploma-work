let slides = document.querySelectorAll(".slider_wrap .slide")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let counter = 1
let status = true

function nextSlide(next_slide) {
    for (let item of slides) {
        item.classList.remove("active_slide")
    }
    slides[counter].classList.add("active_slide")
    if (next_slide == 1) {
        counter++
        if (counter > slides.length - 1) {
            counter = 0
        }
    } else {
        counter--
        if (counter < 0) {
            counter = slides.length - 1
        }
    }
    Dots(slides, counter)
}
prev.onclick = () => nextSlide(-1)
next.onclick = () => nextSlide(1)

function Dots(slides, counter) {
    let slide_dots = document.querySelector(".slide_dots")
    let i
    slide_dots.innerHTML = ""
    counter += 1
    for (let i = 1; i <= slides.length; i++) {
        let dot = document.createElement("div")
        dot.classList.add("dot")
        dot.setAttribute("dot-id", i)
        if (i == counter) {
            dot.classList.add("active_dots")
        }
        slide_dots.append(dot)
    }
    if (i == counter) {
        slide_dots.children[0].classList.add("active_dots")
    }
}

let tabs = document.querySelectorAll(".prd_tab")
for (let ii of tabs) {
    ii.onclick = () => {
        for (let jj of tabs) { 
            jj.classList.remove("pr_active_tab")
            ii.classList.add("pr_active_tab")
        }
    }
}

let tabs2 = document.querySelectorAll(".search_tab")
for (let ii of tabs2) {
    ii.onclick = () => {
        for (let jj of tabs2) {
            jj.classList.remove("active_tab")
            ii.classList.add("active_tab")
        }
    }
}