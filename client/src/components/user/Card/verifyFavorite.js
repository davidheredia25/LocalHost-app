export const verifyFavorite = (arrayFavorites, id) => {
    let boolean = false;
    if(arrayFavorites?.length) {
        arrayFavorites.forEach(p => {
            if(p._id === id) {
                boolean = true;
            }
        })
    }
    return boolean;
}