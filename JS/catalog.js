document.addEventListener("DOMContentLoaded", () => {
    let api = "http://localhost:3001/jetskis"
    axios.get(api)
        .then(response => {
            console.log("response:", response.status);
            console.log(response);
            if (response.status == 200 || response.status == 201) {
                renderingCatalog(response.data)
            }
        })
        .catch(error => { console.error(error) })
        
        let prodsZone = document.querySelector(".products_area")
        const renderingCatalog = (catalProds) => {
            prodsZone.innerHTML = ""
            for (let item of catalProds) {
                prodsZone.innerHTML += `
                <div class="moto_product">
                    <div class="like"></div>
                    <img class="moto_product_img" src="${item.img}">
                    <h3>${item.model}</h3>
                    <p>${item.price}</p>
                    <p class="fff_nnn"></p>
                    <div class="add_cart"></div>
                </div>
                `
            } 
        }
})