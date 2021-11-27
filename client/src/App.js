import React from "react";
import { Route, Routes } from 'react-router-dom';
import {Home, Card, Cards, Details, Cart, NavBar, SearchBar, BrandContainer, CreateProduct} from "./components";







function App () {
	return (
		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/admin/brand" element={<BrandContainer />} /> 
			<Route path="/admin/crud" element={<CreateProduct/>}/>
		</Routes>
	)
}



export default App;