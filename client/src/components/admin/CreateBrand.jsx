import React, { useState } from "react";


const CreateBrand = () => {
    
    const [brand, setBrand] = useState({
        brand: "",
        categories: [],
    })
    const [category, setCategory] = useState({
        name: "",
        types: []
    })

    return (
        <div>
            <div>
                <h3>Marca:</h3>
                <h4>{brand.brand}</h4>
                <h3>Categorías:</h3>
                {
                    brand?.categories?.map(x => {
                        return (
                            <h3>{x}</h3>
                        )
                    })
                }
                <h3>Tipos:</h3>
                {
                    brand?.types?.map(x => {
                        return (
                            <h3>{x}</h3>
                        )
                    })
                }
                
            </div>
        </div>
    )
}