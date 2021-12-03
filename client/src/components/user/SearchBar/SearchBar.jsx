import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products.actions'
import style from "./SearchBar.css";
import { Button, TextField } from '@mui/material';
import {Link, useNavigate} from "react-router-dom"
import { setFilterName } from "../../../redux/actions/filters.actions";
/* import SearchIcon from '@material-ui/icons/Search'; */
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  


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
                <Button variant='text' style={{'color' : '#EEEEEE'}} className="button">Search</Button>
            </form>
        </div>
    )
}


export default SearchBar;