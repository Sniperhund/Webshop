export const fetchData = async () => {
    return (
        await fetch("https://dummyjson.com/products?limit=12").then(
            (response) => response.json()
        )
    ).products
}
