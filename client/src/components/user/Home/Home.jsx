import React from "react";
import Cards from '../Cards/Cards';
import Carousels from '../Carousels/Carousels.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';


const Home= () => {
    return (
        <div>
            {/* // <button> Filters </button> */}
            <Carousels />
            <Cards />
            <SearchBar/>
        </div>
    )
}


export default Home;