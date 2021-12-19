export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase().trim())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const searchFilterPriceRange = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price >= Number(min) && goodsItem.price <= Number(max)
    })
}