import React from 'react';
import style from './Carousels.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import nike from './img/nike.png';
import nw from './img/nw.png';
import adidas from './img/adidas.png'

const Carousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={nw}
                        alt="First slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>First slide label</h3>
                        <p className={style.txt}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className={style.btn}>Entrar</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={nike}
                        alt="Second slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>Second slide label</h3>
                        <p className={style.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className={style.btn}>Entrar</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={adidas}
                        alt="Third slide"
                    />
                    <Carousel.Caption className={style.ctnTxt}>
                        <h3 className={style.title}>Third slide label</h3>
                        <p className={style.txt}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className={style.btn}>Entrar</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels;