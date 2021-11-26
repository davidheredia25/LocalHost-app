import React from "react";
import Cards from '../Cards/Cards';
import Carousels from '../Carousels/Carousels.jsx';


const Home= () => {
    return (
        <div>
            {/* // <button> Filters </button> */}
            <Carousels />
            <Cards />
        </div>
    )
}


export default Home;