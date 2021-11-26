import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products.actions'
import style from "./SearchBar.css";
import { Button } from '@mui/material';



const SearchBar = () => {

    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([])
    const [input, setInput] = useState("")
    const { products } = useSelector(state => state.products)


    const handleFilter = (e) => {
        setInput(e.target.value)
        const filterProducts = products.filter((x) => {
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
        dispatch(getProducts({ name: input }))
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
                    filteredData.length ?
                        <div className="dataResult">
                            {
                                filteredData.map(e => {
                                    return (
                                        <a className="dataItem">
                                            <p>{e.name}</p>
                                            {/* <Link to="/products/detail:{e.id}"/> */}
                                        </a>
                                    )
                                })
                            }
                        </div> :
                        null
                }
                <Button variant='text' style={{'color' : '#EEEEEE'}} className="button">Enviar</Button>
            </form>
        </div>
    )
}


export default SearchBar;