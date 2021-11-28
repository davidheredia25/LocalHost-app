import React from "react";
import { Route, Routes } from 'react-router-dom';
import {Home, Card, Cards, Details, Cart, NavBar, SearchBar, BrandContainer, CreateProduct, Catalogo} from "./components";







function App () {
	return (
		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path='/cart' element={<Cart/>} />
			<Route path="/detail/:id" element={<Details />}/>
			<Route path="/admin/brand" element={<BrandContainer />} /> 
			<Route path="/admin/crud" element={<CreateProduct/>} />
			<Route path="/catalogo" element={<Catalogo />} />
		</Routes>
	)
}



export default App;