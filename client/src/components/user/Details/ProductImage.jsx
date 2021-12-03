import { React, useEffect, useState } from "react";
import './image.scss';
import Carousel from 'react-bootstrap/Carousel';



const ProductImage = ({ images, product }) => {
    return (
        product ?
            <div className='ctn'>

                <Carousel>
                    {
                        images.length &&
                        images.map(i => {
                            if (i) {
                                return (
                                    <Carousel.Item interval={3000}>
                                        <img
                                            className="product_image"
                                            src={i}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                )
                            }
                        })
                    }
                </Carousel>

            </div>
            :
            "Loading..."
    )
}


export default ProductImage;