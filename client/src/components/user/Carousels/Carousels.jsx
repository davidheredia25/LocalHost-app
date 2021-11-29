import React from 'react';
import { Link } from 'react-router-dom';
import style from './Carousels.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import nike from './img/nike.png';
import nw from './img/nw.png';
import adidas from './img/adidas.png';
import { Button } from '@mui/material';


const Carousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={nike}
                        alt="First slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>Just Do It</h3>
                        <p className={style.txt}></p>
                       <Link to='/catalogo' className={style.link}> <button className={style.btn}>Catalogo</button> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={nw}
                        alt="Second slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>Achieve New Balance </h3>
                        <p className={style.txt}></p>
                        <Link to='/catalogo' className={style.link}> <button className={style.btn}>Catalogo</button> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={adidas}
                        alt="Third slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>Impossible is nothing</h3>
                        <p className={style.txt}></p>
                        <Link to='/catalogo' className={style.link}> <button className={style.btn}>Catalogo</button> </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels;