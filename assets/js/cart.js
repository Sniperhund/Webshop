import { fetchData } from "./util/fetch.js"
import { loading } from "./util/loading.js"
import { hasCart } from "./util/localStorage.js"
import { render } from "./util/render.js"

const app = {}

app.init = async () => {
    let products = await fetchData()

    products = products.filter((product) => hasCart(product.id))

    if (products.length === 0) {
        document.querySelector(".products").innerHTML = "<p>Kurven er tom</p>"
        return
    }

    render(products)

    loading(products.length)

    document.querySelectorAll(".buy").forEach((e) => {
        e.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove()
        })
    })
}

app.init()
