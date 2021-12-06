export const subcategoriesArray = (brandsArray, category) => {
    let types = [];
    brandsArray.forEach(b => {
        b.categories.forEach(c => {
            if (c.name === category) {
                types = [...types, ...c.types]
                types = [...new Set(types)]
            }
        })
    })
    return types
}