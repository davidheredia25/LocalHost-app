import {React, useEffect, useState} from "react";



const ProductImage = ({props}) => {


    return(
        <div>
            <img src={props.image}/>
        </div>
    )
}


export default ProductImage;