let api = "http://localhost:3001/popularPoducts"
axios.get(api)
    .then(response => {
        console.log("status:", response.status);
        console.log(response.data);
        console.log(response);
        RenderingProducts(response.data)
    })
    .catch(error => console.log(error))

let displayArea = document.querySelector(".prd_slider")
function RenderingProducts(products) {
    displayArea.innerHTML = ""
    for (let item of products) {
        displayArea.innerHTML = `
        <div class="popl_product">
            <div class="like"></div>
            <img class="popl_product_img" / src="${item.img}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <div class="add_cart"></div>
        </div>
        `
    }
}

let btnMobMenu = document.querySelector(".mobile_menu")
let opMobMenu = document.querySelector(".open_mobile_menu")
let bg_mobile_menu = document.querySelector(".bg_mobile_menu")
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