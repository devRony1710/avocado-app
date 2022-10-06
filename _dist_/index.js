const URL = "https://platzi-avo.vercel.app/api/avo";
const root = document.querySelector('#root');

const formatPrice = (price) => {
    const newPrice = new Intl.NumberFormat('en-En', {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice
}

const printItems = (items) => {
    const allItems = []
    items.map(item => {
        const image = document.createElement('img')
        image.src = `https://platzi-avo.vercel.app/${item.image}`

        const title = document.createElement('h2')
        title.textContent = item.name
        title.className = 'item-name'

        const price = document.createElement('span')
        price.textContent = formatPrice(item.price)
        

        const container = document.createElement('div')

        container.append(image, title, price)

        allItems.push(container)
        root.append(...allItems)
    })

}

const fetchData = async (urlApi) => {
    const res = await fetch(urlApi);
    const data = await res.json()
    const allAvocados = data.data
    printItems(allAvocados)
}

fetchData(URL);

