import React from "react";
import Carousels from '../Carousels/Carousels.jsx';
import ImgSection from "../ImgSection/ImgSection";
import BrandsHome from '../BrandsHome/BrandsHome.jsx'
import './Home.scss';


const Home = () => {
    return (
        <div>
            <Carousels />
            <BrandsHome />
            <ImgSection />
        </div>
    )
}


export default Home;