import React from "react";
import Cards from '../Cards/Cards';
import Carousels from '../Carousels/Carousels.jsx';
import NavBar from "../NavBar/NavBar";
import ImgSection from "../ImgSection/ImgSection";
import BrandsHome from '../BrandsHome/BrandsHome.jsx'
import './Home.scss';


const Home = () => {
    return (
        <div>
            <NavBar />
            <Carousels />
            <BrandsHome />
            <ImgSection />
            <Cards />
        </div>
    )
}


export default Home;