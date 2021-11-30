export const GET_USER = "GET_USER"


export const loginGoogle = (tokenId) = async dispatch => {
    try {
        const { data } = await axios.post("/login", { tokenId })
        return dispatch({
            type: GET_USER,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}