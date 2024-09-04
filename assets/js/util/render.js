import {
    hasCart,
    hasFavorite,
    toggleCart,
    toggleFavorite,
} from "./localStorage.js"
import { productTmpl } from "./templates.js"

export const render = (products) => {
    const productsContainer = document.querySelector(".products")

    productsContainer.innerHTML = ""

    products.forEach((product) => {
        productsContainer.insertAdjacentHTML(
            "beforeend",
            productTmpl(product, hasFavorite(product.id), hasCart(product.id))
        )

        const productElement = productsContainer.lastElementChild

        productElement.querySelector(".buy").addEventListener("click", (e) => {
            toggleCart(product.id)
            e.target.textContent = hasCart(product.id)
                ? "Fjern fra kurv"
                : "Tilføj til kurv"
        })

        productElement
            .querySelector(".favorite")
            .addEventListener("click", (e) => {
                toggleFavorite(product.id)
                e.target.textContent = hasFavorite(product.id)
                    ? "Fjern fra favoriter"
                    : "Tilføj til favoriter"
            })
    })
}
