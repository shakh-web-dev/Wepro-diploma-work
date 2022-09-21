document.addEventListener("DOMContentLoaded", () => {
    let transPage = document.querySelector(".jetSkis")
    transPage.onclick = () => {
        window.location.href = "../catalog.html"
        console.log(window.location);
    }
    
})