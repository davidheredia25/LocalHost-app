import axios from 'axios'

export const MERCADO_ID = "MERCADO_ID"


export const mercadoId = () => async (dispatch) =>{
    try{
        const res = (await axios.get('/mercadopago')).data
        return dispatch ({
            type: MERCADO_ID,
            payload: res
        });
    } catch (err) {
        console.log(err)
    }

 
}