const url = 'https://fortnite-api.com/v2/shop'

const sendRequest = (url, method) =>{
    return fetch(url, {
        method: method,
    })
    .then(response => response.json())
}
const getData = () =>{
    sendRequest(url, 'GET')
        .then(response => {
            console.log(response)
            console.log(response.data.entries)
            const entries = response.data.entries;
            entries.filter(Boolean).forEach(item => {
                if (item && item.finalPrice && item.brItems && item.brItems[0].images.featured ) {
                    console.log(item);
                    addItemToShop(item.finalPrice, item.brItems[0].name, item.brItems[0].images.featured);
                }else if(item && item.finalPrice && item.bundle){
                    addBundleToShop(item.finalPrice, item.bundle.name, item.bundle.image);
                }
                console.log(item)

            });

            document.querySelectorAll('.card').forEach(element => {
            element.style.backgroundImage = `url(${response})`
            })
        })
}
getData()

function addItemToShop(price, name, image){
    document.getElementById('items').innerHTML += `
    <div class="card">
            <img src="${image}" alt="item image">
            <div class="item-name">${name}</div>
            <div class="item-price">${price}</div>
        </div>
    `
}
function addBundleToShop(price, name, image){
    document.getElementById('items').innerHTML += `
    <div class="card two_col">
            <img src="${image}" alt="item image">
            <div class="item-name">${name}</div>
            <div class="item-price">${price}</div>
        </div>
    `
}