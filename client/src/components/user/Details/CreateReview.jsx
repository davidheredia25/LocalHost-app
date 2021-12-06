import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { createReview } from '../../../redux/actions/review.actions';

const CreateReview = ({ id }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.login);
    // const { product } = useSelector(state => state.products);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({
            rating: rating,
            comment: comment,
            user: user.email,
            id: id
        }));
        setRating(0);
    };

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    return (
        <div className=''>
            <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
            />
            <textarea 
                type='text'
                value={comment}
                placeholder='Ingrese su comentario ...'
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>AGREGAR COMMENTARIO</button>
        </div>
    );
};

export default CreateReview;