import { fetchData } from "./util/fetch.js"
import { loading } from "./util/loading.js"
import { render } from "./util/render.js"

const app = {}

app.init = async () => {
    let products = await fetchData()

    render(products)

    loading(products.length)
}

app.init()
