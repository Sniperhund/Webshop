export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || []
}

export const addFavorite = (id) => {
    const favorites = getFavorites()
    favorites.push(id)
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

export const removeFavorite = (id) => {
    const favorites = getFavorites()
    const newFavorites = favorites.filter((favorite) => favorite !== id)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
}

export const toggleFavorite = (id) => {
    if (hasFavorite(id)) {
        removeFavorite(id)
    } else {
        addFavorite(id)
    }
}

export const hasFavorite = (id) => {
    return getFavorites().includes(id)
}

export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || []
}

export const addCart = (id) => {
    const cart = getCart()
    cart.push(id)
    localStorage.setItem("cart", JSON.stringify(cart))
}

export const removeCart = (id) => {
    const cart = getCart()
    const newCart = cart.filter((cart) => cart !== id)
    localStorage.setItem("cart", JSON.stringify(newCart))
}

export const toggleCart = (id) => {
    if (hasCart(id)) {
        removeCart(id)
    } else {
        addCart(id)
    }
}

export const hasCart = (id) => {
    return getCart().includes(id)
}
