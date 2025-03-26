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
            entries.forEach(item => {
                console.log(item)
                addToShop(item.regularPrice, item.layout.name, item.newDisplayAsset.renderImages[0].image);
            })
            console.log()
            document.querySelectorAll('.card').forEach(element => {
            element.style.backgroundImage = `url(${response})`
            })
        })
}
getData()

function addToShop(price, name, image){
    document.getElementById('items').innerHTML += `
    <div class="card two_col2">
            <img src="${image}" alt="item image">
            <div class="item-name">${name}</div>
            <div class="item-price">${price}</div>
        </div>
    `
}