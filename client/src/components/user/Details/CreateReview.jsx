import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { createReview } from '../../../redux/actions/review.actions';
import { getProductsDetails } from '../../../redux/actions/products.actions';
import style from './CreateReview.module.scss'

const CreateReview = ({ id }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.login);
    // const { product } = useSelector(state => state.products);
    console.log('id: ', id);

    let User;
    if(user.email)  User = user;
    else User = user.user;

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    useEffect(() => {
        dispatch(getProductsDetails(id));
    },[dispatch, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({
            rating: rating,
            comment: comment,
            user: User.email,
            id: id
        }));
        setRating(0);
    };

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    return (
        <div className={style.CtnRating}>
            <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
            />
            <textarea  className={style.Cuadrado} 
                type='text'
                value={comment}
                placeholder='Ingrese su comentario ...'
                onChange={handleChange}
            />
            <button className={style.btnRating} onClick={handleSubmit}>AGREGAR COMENTARIO</button>
        </div>
    );
};

export default CreateReview;