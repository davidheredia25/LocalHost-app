import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/actions/brand.actions";

const BrandFilter = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands())
    }, [])
    
    const { brands } = useSelector(state => state.brand)

    return (
        <div>
            <ul>
            {
                brands.map(x => {
                    return (
                        <li>
                            <Link to={`/catalogo/${x.name}`}>
                               {x.name}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )

}

export default BrandFilter;