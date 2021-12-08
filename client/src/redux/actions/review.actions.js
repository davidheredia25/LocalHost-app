import axios from 'axios';
import { getProducts } from './products.actions';

export const createReview = ({ id, rating, comment, user }) => async (dispatch) => {
    try {
        await axios.post(`/review/create/${id}`, { rating, comment, user });
        return dispatch(getProducts());
    } catch (error) {
        console.log(error);
    }
};