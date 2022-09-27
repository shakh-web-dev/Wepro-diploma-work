document.addEventListener("DOMContentLoaded", () => {
    let api = "http://localhost:3001/jetskis"
    axios.get(api)
        .then(response => {
            console.log("response:", response.status);
            console.log(response);
            // renderingCatalog(response.data)
        })
        .catch(error => { console.error(error) })
        
        // const renderingCatalog = (catalProd) {}
})