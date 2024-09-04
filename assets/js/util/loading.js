export const loading = (length) => {
    const products = document.querySelector(".products")

    products.style.display = "none"

    const loadingText = document.createElement("h2")

    loadingText.textContent = "Loading"
    loadingText.classList.add("loading")

    document.body.insertBefore(loadingText, products)

    let loadedImages = 0

    let points = 0

    setInterval(() => {
        loadingText.textContent = "Loading" + ".".repeat(points % 4)
        points++
    }, 750)

    loadingText.textContent = "Loading" + ".".repeat(points % 4)
    points++

    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("load", () => {
            loadedImages++

            if (loadedImages >= length) {
                products.style.display = "grid"

                loadingText.remove()
            }
        })
    })
}
