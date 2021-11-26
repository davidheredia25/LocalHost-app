import React from "react";
import Cards from '../Cards/Cards';
import Carousels from '../Carousels/Carousels.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import NavBar from "../NavBar/NavBar";
import ImgSection from "../ImgSection/ImgSection";


const Home= () => {
    return (
        <div>
            {/* // <button> Filters </button> */}
            
            <NavBar />
            <Carousels />
            <ImgSection />
            <Cards />
            
        </div>
    )
}


export default Home;