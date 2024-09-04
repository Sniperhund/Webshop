export const productTmpl = (product, favorited = false, cart = false) => `
    <div>
        <img src="${product.images[0]}" alt="${product.title}" />
        <div class="flex">
            <h2>${product.title}</h2>
            <p class="price">$${product.price}</p>
            
        </div>
        <p class="brand">${product.brand}</p>
        <p class="description">${product.description}</p>
        <p class="stock ${product.stock > 5 ? "green" : "red"}">Der er ${
    product.stock
} stk. tilbage</p>
        <div class="flex btns">
            <button class="favorite">${
                favorited ? "Fjern fra" : "Tilføj til"
            } favoriter</button>
            <button class="buy">${
                cart ? "Fjern fra" : "Tilføj til"
            } kurv</button>
        </div>

    </div>
`
