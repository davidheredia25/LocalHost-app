import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products.actions'
import style from "./SearchBar.css";
import { Button } from '@mui/material';
import {Link, useNavigate} from "react-router-dom"
import { setFilterName } from "../../../redux/actions/filters.actions";
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([])
    const [input, setInput] = useState("")
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts({}))
    }, [])

    const handleFilter = (e) => {
        setInput(e.target.value)
        const filterProducts = products?.filter((x) => {
            return x.name.toLowerCase().includes(e.target.value.toLowerCase())
        });
        if (e.target.value === "") {
            setFilteredData([])
        } else {
            setFilteredData(filterProducts)
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setFilterName(input))
        navigate("/catalogo")
        /* dispatch(getProducts({ name: input })) */
        setInput("")
        setFilteredData([])
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className="search">
                <input value={input} className={style.input}
                    placeholder="Buscar por nombre y marca"
                    onChange={handleFilter} />
                {
                    filteredData.length  ?
                        <div className="dataResult">
                            {
                                filteredData.map(e => {
                                    return (
                                        <Link to={`/detail/${e._id}`}>
                                        <a className="dataItem">
                                            <p>{e.name}</p>
                                        </a>
                                        </Link>
                                    )
                                })
                            }
                        </div> :
                        null
                }
                <Button variant='text' style={{'color' : '#EEEEEE'}} className="button"><SearchIcon/></Button>
            </form>
        </div>
    )
}


export default SearchBar;