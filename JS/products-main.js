document.addEventListener("DOMContentLoaded", () => {
    let api = "http://localhost:3001/popularProducts"
    axios.get(api)
        .then(response => {
            console.log("status:", response.status);
            console.log(response.data);
            if (response.status == 200 || response.status == 201) {
                renderingProducts(response.data)
            } else {
                let ST = response.statusText = "Проблемы со связью"
                document.querySelector(".prd_slider").innerText = ST
            }
        })
        .catch(error => console.log(error))

    let displayArea = document.querySelector(".prd_slider")
    function renderingProducts(products) {
        displayArea.innerHTML = ""
        for (let item of products) {
            displayArea.innerHTML += `
            <div class="popl_product">
                <div class="like"></div>
                <img class="popl_product_img" / src="${item.img}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p class="fff_nnn"></p>
                <div class="add_cart"></div>
            </div>
            `
            if (item.price === "Нет в наличии") {
                document.querySelector(".fff_nnn").innerText = "Сообщить о поступлении"
            }
        }
    }
    let cart_arr = []
    let liked_arr = []

    let btnMobMenu = document.querySelector(".mobile_menu")
    let opMobMenu = document.querySelector(".open_mobile_menu")
    let bg_mobile_menu = document.querySelector(".bg_mobile_menu")
    let bgEl = document.querySelector(".bg_el")
    let exs = document.querySelector(".exs")
    btnMobMenu.onclick = () => {
        opMobMenu.classList.add("opened")
        bg_mobile_menu.classList.add("actived_bg")
        document.body.style.overflow = "hidden"
    }
    bg_mobile_menu.onclick = () => {
        opMobMenu.classList.remove("opened")
        bg_mobile_menu.classList.remove("actived_bg")
        document.body.style.overflowY = "scroll"
    }

    function closedBG() {
        bgEl.style = "display: none;"
        bgEl.classList.remove("active_bg_el")
        document.body.style.overflowY = "scroll"
    }
    function actBG() {
        bgEl.style = "display: block;"
        setTimeout(() => { bgEl.classList.add("active_bg_el") }, 100);
        setTimeout(() => { bgEl.style.transition = "none" }, 150)
        document.body.style.overflow = "hidden"
    }

    let liked_prod = document.querySelector(".liked_prod")
    let liked_btn = document.querySelector(".like_butt")
    liked_btn.onclick = () => {
        liked_prod.classList.add("open_wind")
        actBG()
    }

    let cart_prod = document.querySelector(".cart_products")
    let cart_btn = document.querySelector(".cart_butt")
    cart_btn.onclick = () => {
        cart_prod.classList.add(".open_wind_cart")
        actBG()
    }

    bgEl.onclick = () => {
        liked_prod.classList.remove("open_wind")
        cart_prod.classList.remove("open_wind_cart")
        closedBG()
    }
})