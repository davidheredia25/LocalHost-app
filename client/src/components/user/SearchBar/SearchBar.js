import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
/* import { getProducts, setPage } from '../../redux/actions/actions';
 */


const SearchBar= () => {

    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([])
    const [input, setInput] = useState("")

   /*  function handleInputChange(e){
        e.preventDefault()
        setInput(e.target.value)
    } */

   /*  function handleSubmit(e){
        e.preventDefault()
        dispatch(setPage(1))
        dispatch(getProducts({name:input}))
        setInput("")
    } */

    const handleFilter = (e) =>{
        const filterProducts = products.filter((x) =>{
            return x.name.includes(e.target.value)
        });
        if (e.target.value === ""){
            setFilteredData([])
        } else{
            setFilteredData(filterProducts)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(setPage(1))
        dispatch(getProducts({name:input}))
        setInput("")
    }

    return (
        <form onSubmit={e => handleSubmit(e)}className="search">
        <input  value = {input} className={style.input} 
                placeholder="Buscar por nombre y marca" 
                onChange={handleFilter}/>
                <div className="searchIcon">
                    <SearchIcon/>
                </div>

                <div className="dataResult">
            {filteredData.length != 0 && (
                products.map(e => {
                    return (
                        <a className="dataItem">
                            <p>{e.name}</p>
                        </a>
                    )
                })
            )}
        </div>
        <button className="button"></button>
    </form>
    )
}


export default SearchBar;